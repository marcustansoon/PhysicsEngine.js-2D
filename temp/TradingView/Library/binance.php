<?php

function getBinanceKlines($coin, $interval, $startTime, $endTime, $isPerpetualContract) {
    // Construct the API URL
    $spotURL = "https://api.binance.com/api/v3/klines";
    $perpertualURL = "https://fapi.binance.com/fapi/v1/klines";
    $params = [
        'symbol' => $coin,
        'interval' => $interval,
        'startTime' => $startTime,
        'endTime' => $endTime,
        'limit' => 1000
    ];
    
    // Build the query string
    $query = http_build_query($params);
    $fullUrl = (!$isPerpetualContract ? $spotURL : $perpertualURL) . '?' . $query;
    
    // Initialize cURL
    $ch = curl_init();
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $fullUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
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
    $data = json_decode($response, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return json_encode([
            'status' => 'error',
            'message' => 'JSON Decode Error: ' . json_last_error_msg()
        ]);
    }
    
    // Return successful response in JSON format
    return json_encode([
        'status' => 'success',
        'data' => $data
    ]);
}

// Set header for JSON response
header('Content-Type: application/json');

// Example usage:
$coin = $_GET["symbol"];              // Example coin
$interval = $_GET['interval'];          // Example interval (1h, 4h, 1d, etc.)
$startTime = $_GET['startTime']; // Example start time in milliseconds (Jan 1, 2022)
$endTime = $_GET['endTime'];   // Example end time in milliseconds (Feb 1, 2022)
$isPerpetualContract = boolval($_GET["isPerpetualContract"] ?? null);

$result = getBinanceKlines($coin, $interval, $startTime, $endTime, $isPerpetualContract);

// Output the JSON result
echo $result;

?>