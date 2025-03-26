<?php
// fetch_and_extract.php

// Target URL
$url = "https://www.macrotrends.net/assets/php/stock_price_history.php?t=AAPL";

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");

// Fetch the HTML content
$htmlContent = curl_exec($ch);

if (curl_errno($ch)) {
    http_response_code(500);
    echo "Error fetching content: " . curl_error($ch);
    curl_close($ch);
    exit;
}

curl_close($ch);

// Extract the dataDaily array using regex
$pattern = '/var dataDaily = (\[.*?\]);/s';
preg_match($pattern, $htmlContent, $matches);

if (isset($matches[1])) {
    $dataDailyJson = $matches[1]; // The raw JSON array string

    // Echo the raw JSON string
    echo $dataDailyJson;

    // Optional: Decode and re-encode to verify or manipulate
    /*
    $dataDailyArray = json_decode($dataDailyJson, true);
    if ($dataDailyArray === null) {
        echo "Error decoding JSON: " . json_last_error_msg();
    } else {
        // Echo as formatted JSON
        echo json_encode($dataDailyArray, JSON_PRETTY_PRINT);
    }
    */
} else {
    echo 'nope';
    http_response_code(404);
    echo "dataDaily array not found in the HTML content";
}
?>