<?php

// Encode string digits into proper pixel data
function getEncodedPixelData($char){
        switch($char){
            case '0':
                $pixelData = 0;
                break;
            case '1':
                $pixelData = 1;
                break;
            case '2':
                $pixelData = 2;
                break;
            case '3':
                $pixelData = 3;
                break;
            case '4':
                $pixelData = 4;
                break;
            case '5':
                $pixelData = 5;
                break;
            case '6':
                $pixelData = 6;
                break;
            case '7':
                $pixelData = 7;
                break;
            case '8':
                $pixelData = 8;
                break;
            case '9':
                $pixelData = 9;
                break;
            case '.':
                $pixelData = 10;
                break;
            case '-':
                $pixelData = 11;
                break;
            case ',':
                $pixelData = 12;
                break;
            case ';':
                $pixelData = 13;
                break;
            default:
                $pixelData = 15;
                break;
        }
    return $pixelData;
}

// Decode pixel data into proper digits (string)
function getDecodedPixelData($rawPixelData){
        switch($rawPixelData){
            case 0:
                $pixelData = '0';
                break;
            case 1:
                $pixelData = '1';
                break;
            case 2:
                $pixelData = '2';
                break;
            case 3:
                $pixelData = '3';
                break;
            case 4:
                $pixelData = '4';
                break;
            case 5:
                $pixelData = '5';
                break;
            case 6:
                $pixelData = '6';
                break;
            case 7:
                $pixelData = '7';
                break;
            case 8:
                $pixelData = '8';
                break;
            case 9:
                $pixelData = '9';
                break;
            case 10:
                $pixelData = '.';
                break;
            case 11:
                $pixelData = '-';
                break;
            case 12:
                $pixelData = ',';
                break;
            case 13:
                $pixelData = ';';
                break;
            default:
                $pixelData = ' ';
                break;
        }
    return $pixelData;
}

function getDailyJSON($url){

    // Initialize cURL
    $ch = curl_init();
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Accept: application/json'
    ));

    // Set the URL to send the request to
    //curl_setopt($ch, CURLOPT_URL, "https://www.alphavantage.co");

    // Set the User-Agent to mimic a browser (e.g., Firefox on Windows)
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36");
    
    // Execute the request
    $response = curl_exec($ch);

    // var_dump($response);
    // exit;

    // Check for errors
    if ($response === false) {
        $error = curl_error($ch);
        curl_close($ch);
        return json_encode([
            'status' => 'error',
            'message' => 'cURL Error: ' . $error
        ]);
    }
    
    // Get HTTP status code
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode != 200) {
        return json_encode([
            'status' => 'error',
            'message' => 'HTTP Error: ' . $httpCode
        ]);
    }

    // Decode JSON response
    $response = json_decode($response, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return ([
            'status' => 'error',
            'message' => 'JSON Decode Error: ' . json_last_error_msg()
        ]);
    }

    if($response["Information"] ?? ''){
        return ([
            'status' => 'error',
            'message' => $response["Information"]
        ]);
    }
    

    $arr = [];
    
    foreach ($response['Time Series (Daily)'] as $date => $values) {
        array_push($arr, [
            "d" => $date, 
            "o" => $values["1. open"],
            "h" => $values["2. high"],
            "l" => $values["3. low"],
            "c" => $values["4. close"],
            "v" => $values["5. volume"],
        ]);
    }

    return [
        'status' => 'success',
        'data' => $arr
    ];
}

//$url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo";
$url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" . ($_GET['symbol'] ?? '') . "&outputsize=full&apikey=" . ($_GET['apikey'] ?? '');
$response = getDailyJSON($url);

if($response['status'] == "error" || !isset($response['data']) || !count($response['data'])){
    echo json_encode($response);
    exit;
}

// echo var_dump($arr);
// exit;

// $arr = [
//     [
//         'd' => '2020-123',
//         'o' => 123,
//         'h' => 456,
//         'l' => 234,
//         'c' => 544,
//         'v' => 767
//     ],
//     [
//         'd' => 25,
//         'o' => 33,
//         'h' => 44,
//         'l' => 55,
//         'c' => 66,
//         'v' => 77
//     ],
//     [
//         'd' => 25,
//         'o' => 99,
//         'h' => 888,
//         'l' => 777,
//         'c' => 66,
//         'v' => 44
//     ]
// ];


$widthIndex = 0;
$heightIndex = 0;

$string = "";
$arr = $response['data'];
foreach($arr as $index => $values){
    $string .= $values['d'] . "," . $values['o'] . "," . $values['h'] . "," . $values['l'] . "," . $values['c'] . "," . $values['v'] . (($index === count($arr) - 1) ? "" : ";");
}


// 1 pixel = 6 data
// Assuming string length is 345692
// 800 * X pixels >= 345692 data
// 800 * 6 * X >= 345692
// X >= 72.01
// X = 73

$width = 800;
$height = ceil(strlen($string) / 6 / $width);


// Fill up empty spaces
$paddingCount = 6 - strlen($string) % 6;
while($paddingCount--){
    $string .= " ";
}


// Create image
$image = imagecreatetruecolor($width, $height);

// Define a color (RGB)
$color = imagecolorallocate($image, 255, 255, 255);

// Fill the entire image with the color
imagefill($image, 0, 0, $color);



// Encode Image
    for ($i = 0; $i < strlen($string); $i += 6) {
        
        // Set RGB
        $pixelData = imagecolorallocate($image, 
            ((getEncodedPixelData($string[$i+0]) & 0xF) << 4) | (getEncodedPixelData($string[$i+1]) & 0xF) , 
            ((getEncodedPixelData($string[$i+2]) & 0xF) << 4) | (getEncodedPixelData($string[$i+3]) & 0xF) , 
            ((getEncodedPixelData($string[$i+4]) & 0xF) << 4) | (getEncodedPixelData($string[$i+5]) & 0xF)
        );
        imagesetpixel($image, $widthIndex, $heightIndex, $pixelData);


        $widthIndex = $widthIndex + 1;
        if($widthIndex === $width){
            $widthIndex = 0;
            $heightIndex++;
        }


    }







// Decode image
// Loop through the pixels
$decodedString = "";
for ($y = 0; $y < $height; $y++) {
        for ($x = 0; $x < $width; $x++) {
            // Get pixel color
            $rgb = imagecolorat($image, $x, $y);
            $r = ($rgb >> 16) & 0xFF; // Red component
            $g = ($rgb >> 8) & 0xFF;  // Green component
            $b = $rgb & 0xFF;         // Blue component

            // Store pixel data
            //$pixelData[$y][$x] = ['r' => $r, 'g' => $g, 'b' => $b];
            $decodedString .= getDecodedPixelData((($r & 0xF0) >> 4)) . getDecodedPixelData((($r & 0x0F) >> 0));
            $decodedString .= getDecodedPixelData((($g & 0xF0) >> 4)) . getDecodedPixelData((($g & 0x0F) >> 0));
            $decodedString .= getDecodedPixelData((($b & 0xF0) >> 4)) . getDecodedPixelData((($b & 0x0F) >> 0));

            // Output pixel data (optional)
            //echo "Pixel ($x, $y): R=$r, G=$g, B=$b" . PHP_EOL;
        }
    }

$string = trim($string);
$decodedString = trim($decodedString);

if(strcmp($string, $decodedString) != 0){
    echo json_encode([
        'status' => 'error',
        'message' => 'Pixel data is not match'
    ]);
    exit;
}

// Set the header to output as PNG
// header('Content-Type: image/png');

// Output the image
// imagepng($image);

// Capture the image in a buffer
ob_start();
imagepng($image); // Or use imagejpeg($image) for JPEG format, etc.
$image_data = ob_get_contents();
ob_end_clean();

// Convert to base64
$base64_image = base64_encode($image_data);

// Optionally, you can prepend the appropriate MIME type (e.g., for PNG)
$base64_image_with_mime = 'data:image/png;base64,' . $base64_image;

// Output or use the base64 string
echo json_encode([
    'status' => 'success',
    'base64' => $base64_image_with_mime
]);


// Free up memory
imagedestroy($image);
