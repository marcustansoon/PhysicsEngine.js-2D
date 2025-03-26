<?php
// Step 1: Fetch the image using cURL
$url = 'https://imgur.com/12It4Rh.png';

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Follow redirects (Imgur often redirects)
curl_setopt($ch, CURLOPT_HEADER, false); // Exclude headers from the response
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification (use with caution)
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'); // Set a user agent to avoid being blocked

// Execute the request
$response = curl_exec($ch);

// Check for errors
if ($response === false) {
    $error = curl_error($ch);
    echo "cURL Error: $error";
    curl_close($ch);
    exit;
}

// Get the HTTP status code
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($httpCode !== 200) {
    echo "HTTP Error: $httpCode";
    curl_close($ch);
    exit;
}

// Close cURL
curl_close($ch);

// Step 2: Save the image temporarily
$tempFile = 'temp_image.png';
file_put_contents($tempFile, $response);

// Step 3: Read the image and extract pixel data using GD
$image = imagecreatefrompng($tempFile);
if ($image === false) {
    echo "Failed to load image";
    unlink($tempFile);
    exit;
}

// Enable alpha support
imagealphablending($image, false);
imagesavealpha($image, true);

// Check original alpha at (0, 0)
$colorIndex = imagecolorat($image, 0, 0);
$colors = imagecolorsforindex($image, $colorIndex);
echo "Original Alpha: " . $colors['alpha'] . "\n"; // Should be 0 for 255

// Get image dimensions
$width = imagesx($image);
$height = imagesy($image);

$arr = [];
// Loop through each pixel and extract RGBA values
for ($y = 0; $y < $height; $y++) {
    for ($x = 0; $x < $width; $x++) {
        // Get the color index at this pixel
        $colorIndex = imagecolorat($image, $x, $y);
        
        // Extract RGBA values
        $colors = imagecolorsforindex($image, $colorIndex);
        
        // Access individual components
        $red = $colors['red'];     // 0-255
        $green = $colors['green']; // 0-255
        $blue = $colors['blue'];   // 0-255
        $alpha = $colors['alpha']; // 0-127 (0 = opaque, 127 = transparent)

        // Optional: Print the values (comment out for large images to avoid flooding output)
         echo "Pixel ($x, $y): R=$red, G=$green, B=$blue, A=$alpha\n<br>";
        
        array_push($arr, $red, $green, $blue);
    }
}

// Step 4: Clean up
imagedestroy($image);
unlink($tempFile);

echo json_encode($arr);
?>