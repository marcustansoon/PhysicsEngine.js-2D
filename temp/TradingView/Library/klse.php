<?php
// fetch_klsescreener_json.php

header("Content-Type: application/json; charset=UTF-8");

// Parameters
$symbol = $_GET['symbol'] ?? '1015';
$resolution = $_GET['resolution'] ?? '1';
$from = $_GET['from'] ?? (time() - 24 * 60 * 60); // Last 24 hours
$to = $_GET['to'] ?? time(); // Now
$countback = $_GET['countback'] ?? '300'; // Last 300 bars

// Build URL
$url = "https://www.klsescreener.com/v2/trading_view/history?symbol=$symbol&resolution=$resolution&from=$from&to=$to&countback=$countback¤cyCode=MYR";

// Function to make a request and return response + headers
function makeRequest($url, $cookie = null) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Accept: application/json",
        "Origin: https://www.klsescreener.com"
    ]);
    curl_setopt($ch, CURLOPT_HEADER, true); // Include headers in output
    if ($cookie) {
        curl_setopt($ch, CURLOPT_COOKIE, $cookie);
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $headers = substr($response, 0, $headerSize);
    $body = substr($response, $headerSize);

    curl_close($ch);
    return [$httpCode, $headers, $body];
}

// First request to get the cookie
list($httpCode, $headers, $body) = makeRequest($url);

// Extract Set-Cookie header
$cookie = null;
if (preg_match('/Set-Cookie: (KLSE=[^;]+)/i', $headers, $match)) {
    $cookie = $match[1]; // e.g., "KLSE=1sl2j92hb39ott6dtqmbdkad96"
}

// Handle first response
if ($httpCode === 202 && $cookie) {
    // Second request with the extracted cookie
    list($secondHttpCode, $secondHeaders, $secondBody) = makeRequest($url, $cookie);

    if ($secondHttpCode === 200 && !empty($secondBody) && $secondBody !== "[]") {
        echo $secondBody; // Successful response with data
    } elseif ($secondHttpCode === 200) {
        echo json_encode([
            "s" => "no_data",
            "message" => "Empty response after second request",
            "http_code" => $secondHttpCode,
            "cookie_used" => $cookie
        ], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode([
            "s" => "error",
            "message" => "Second request failed with HTTP $secondHttpCode",
            "response" => $secondBody,
            "cookie_used" => $cookie
        ], JSON_UNESCAPED_UNICODE);
    }
} elseif ($httpCode === 200 && !empty($body) && $body !== "[]") {
    echo $body; // First request succeeded with data
} elseif ($httpCode === 200) {
    echo json_encode([
        "s" => "no_data",
        "message" => "Empty response from first request",
        "http_code" => $httpCode
    ], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode([
        "s" => "error",
        "message" => "First request failed with HTTP $httpCode",
        "response" => $body
    ], JSON_UNESCAPED_UNICODE);
}
?>