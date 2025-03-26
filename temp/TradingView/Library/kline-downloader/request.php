<?php

// Alpha Vantage API keys
$apiKeys = [
    'ZN73S3OXOIGP5EXM',
    'de',
];

// Get existing kline json (previously converted)
$filename = 'us-stocks-daily-kline.txt';

// Read the file as string
$contents = file_get_contents($filename);
$klines = json_decode($contents, true);

// Get all US stocks
$url = "https://foodify-ai.great-site.net/us-stocks.txt";

// Initialize cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification if needed

// Execute the request
$response = curl_exec($ch);
$usStocks = json_decode($response, true);


// Start the process
$counter = 0;
foreach($apiKeys as $apikey){
    $requestsPerAPI =  5;

    foreach($usStocks as $stock){

        if(isset($klines[$stock['ticker']])){
            continue;
        }
        
        // Example Usage:
        $url = "https://foodify-ai.great-site.net/kline-downloader/download.php?symbol=" . strtoupper($stock['ticker']) . "&apikey=" . $apikey; // Change this to your image URL
        $response = getKlineImageJson($url);


        if(!$response || !isset($response['base64'])){
            error_log(date('Y-m-d H:i:s') . ' : ' . json_encode($response) . ' | ' . $url . "\n", 3, "error.log");
            echo 'Failed 1 <br>';
            $requestsPerAPI--;
            if(!$requestsPerAPI){
                break;
            }
            continue;
        }
        
        $saveDirectory = __DIR__ . "/images"; // Save to 'images' folder in the script directory
        $savePath = $saveDirectory . "/downloaded_image-" . $counter . ".png";
        $counter++;

        // Ensure the directory exists
        if (!file_exists($saveDirectory)) {
            mkdir($saveDirectory, 0777, true);
        }

        // Save image
        $resp = base64ToImage($response['base64'], $savePath);
        if(!$resp){
            error_log(date('Y-m-d H:i:s') . ' : ' . 'Image conversion failed' . ' | ' . $url . "\n", 3, "error.log");
            echo 'Failed 2 <br>';
            $requestsPerAPI--;
            if(!$requestsPerAPI){
                break;
            }
            continue;
        }


        echo 'Using key:' . $apikey . ' for ' . $stock['ticker'] . '<br>';

        
        // Imgur API access token
        // $imageId = 'pnO7aVX'; // Image ID (e.g., from a previous upload)
        $albumId = 'G0DQ6Hk'; // Imgur album ID
        $accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token


        // Upload the image to Imgur
        $uploadResponse = uploadImageToImgur($savePath, $accessToken);

        if ($uploadResponse['success']) {
            $imageId = $uploadResponse['data']['id'];

            $klines[$stock['ticker']] = ["imgur-id" => $imageId];
            file_put_contents($filename, json_encode($klines));

            echo "Image uploaded successfully. ID: $imageId<br>";
            
            // Add image to album
            $albumResponse = addImageToImgurAlbum($imageId, $albumId, $accessToken);
            
            if ($albumResponse['success']) {
                echo "Image added to album successfully.<br>";
            } else {
                echo "Error adding image to album: " . json_encode($albumResponse);
                error_log(date('Y-m-d H:i:s') . ' : ' . 'Error adding image to album' . ' | ' . $url . "\n", 3, "error.log");
            }
        } else {
            echo "Error uploading image: " . json_encode($uploadResponse);
            error_log(date('Y-m-d H:i:s') . ' : ' . 'Error uploading image' . ' | ' . $url . "\n", 3, "error.log");
        }
        
        $requestsPerAPI--;
        if(!$requestsPerAPI){
            break;
        }
    }
}





// $json['beast'] = 123;
// $json['332'] = 5152;
// // Write data to the file
// file_put_contents($filename, json_encode($json));



exit;


function getKlineImageJson($url) {
    // Initialize cURL session
    $ch = curl_init($url);
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification if needed
    
    // Execute the request
    $response = curl_exec($ch);
    
    // Check for errors
    if ($imageData === false) {
        echo "cURL Error: " . curl_error($ch);
        curl_close($ch);
        return false;
    }


    return json_decode($response, true);

    // Close cURL session
    curl_close($ch);

    // Save image to file
    file_put_contents($savePath, $imageData);

    // Verify if the image was saved successfully
    if (file_exists($savePath)) {
        echo "Image downloaded successfully: " . $savePath;
        return true;
    } else {
        echo "Failed to save image.";
        return false;
    }
}


function base64ToImage($base64_string, $output_file) {
    // Remove data URI scheme if present (e.g., "data:image/jpeg;base64,")
    $base64_string = preg_replace('#^data:image/\w+;base64,#i', '', $base64_string);
    
    // Decode the base64 string
    $image_data = base64_decode($base64_string);
    
    // Save to file
    if ($image_data !== false) {
        file_put_contents($output_file, $image_data);
        return true;
    }
    return false;
}




function uploadImageToImgur($imagePath, $accessToken) {
    $url = 'https://api.imgur.com/3/image';
    
    $imageData = file_get_contents($imagePath);


    $postFields = [
        'name' => 'beast',
        'image' => base64_encode($imageData),
    ];
    
    $headers = [
        "Authorization: Bearer $accessToken"
    ];
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

function addImageToImgurAlbum($imageId, $albumId, $accessToken) {
    $url = "https://api.imgur.com/3/album/{$albumId}/add";
    
    // Prepare the data as a JSON object
    $postData = [
        'ids' => [$imageId] // Array of image IDs
    ];
    
    // Convert to JSON string
    $jsonData = json_encode($postData);
    
    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer {$accessToken}",
        "Content-Type: application/json"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    
    // Execute the request
    $response = curl_exec($ch);
    
    // Check for cURL errors
    if (curl_errno($ch)) {
        $error = curl_error($ch);
        curl_close($ch);
        return ['success' => false, 'error' => "cURL error: $error"];
    }
    
    // Get HTTP status code
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    // Decode the JSON response
    $result = json_decode($response, true);
    
    if ($httpCode === 200) {
        return [
            'success' => true,
            'data' => $result['data']
        ];
    } else {
        return [
            'success' => false,
            'error' => $result['data']['error'] ?? "HTTP $httpCode: Unknown error",
            'raw_response' => $response
        ];
    }
}


// // Example usage:

// $result = addImageToAlbum($imageId, $albumId, $accessToken);

// if ($result['success']) {
//     echo "Image added to album successfully!";
// } else {
//     echo "Failed to add image: " . ($result['data']['error'] ?? 'Unknown error');
// }


// exit;







// Upload the image
$uploadResponse = uploadImageToImgur($savePath, $accessToken);

if ($uploadResponse['success']) {
    $imageId = $uploadResponse['data']['id'];
    echo "Image uploaded successfully. ID: $imageId\n";
    
    // Add image to album
    $albumResponse = addImageToImgurAlbum($imageId, $albumId, $accessToken);
    
    if ($albumResponse['success']) {
        echo "Image added to album successfully.";
    } else {
        echo "Error adding image to album: " . json_encode($albumResponse);
    }
} else {
    echo "Error uploading image: " . json_encode($uploadResponse);
}











?>
