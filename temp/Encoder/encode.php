<?php


function getPixelData($char){
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
    
    // Execute the request
    $response = curl_exec($ch);
    
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
        return json_encode([
            'status' => 'error',
            'message' => 'JSON Decode Error: ' . json_last_error_msg()
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

    return $arr;
}

$url = "_YOUR_URL_";
$arr = getDailyJSON($url);



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
    $string .= "@";
}

echo $string;
exit;

    
$image = imagecreatetruecolor($width, $height);

// Define a color (RGB)
$color = imagecolorallocate($image, 255, 255, 255);

// Fill the entire image with the color
imagefill($image, 0, 0, $color);



    for ($i = 0; $i < strlen($string); $i += 6) {
        
        // Set RGB
        $pixelData = imagecolorallocate($image, 
            ((getPixelData($string[$i+0]) & 0xF) << 4) | (getPixelData($string[$i+1]) & 0xF) , 
            ((getPixelData($string[$i+2]) & 0xF) << 4) | (getPixelData($string[$i+3]) & 0xF) , 
            ((getPixelData($string[$i+4]) & 0xF) << 4) | (getPixelData($string[$i+5]) & 0xF)
        );
        imagesetpixel($image, $widthIndex, $heightIndex, $pixelData);


        $widthIndex = $widthIndex + 1;
        if($widthIndex === $width){
            $widthIndex = 0;
            $heightIndex++;
        }


    }


// Set the header to output as PNG
header('Content-Type: image/png');

// Output the image
imagepng($image);

// Free up memory
imagedestroy($image);
