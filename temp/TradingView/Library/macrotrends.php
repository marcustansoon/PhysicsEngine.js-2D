
<?php

function getStockPriceHistory($ticker, $startTime, $endTime) {
    // Construct the API URL
    $url = "https://www.macrotrends.net/assets/php/stock_price_history.php?t=" . urlencode($ticker);
    
    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");

    // Fetch the HTML content
    $htmlContent = curl_exec($ch);
    
    // Check for cURL errors
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
    
    

    // Extract the dataDaily array using regex
    $pattern = '/var dataDaily = (\[\s*(?:\{[^}]*?\}(?:,\s*\{[^}]*?\})*?)?\s*\])/s';
    preg_match($pattern, $htmlContent, $matches);


    if (isset($matches[1])) {
        $dataDailyJson = $matches[1]; // The raw JSON array string
        

        // Decode JSON response
        $dataDailyJson = json_decode($dataDailyJson, true);


        if (json_last_error() !== JSON_ERROR_NONE) {
            return json_encode([
                'status' => 'error',
                'message' => 'JSON Decode Error: ' . json_last_error_msg()
            ]);
        }

        foreach ($dataDailyJson as &$row) {
            // Get timestamp in milliseconds (multiply by 1000)
            $row['d'] = strtotime($row['d'])  * 1000;
        }
        unset($row); // Unset the reference after inner loop

        // Filter by timestamp
        if($startTime)
            $dataDailyJson = array_values(array_filter($dataDailyJson, function($value) use($startTime) {
                return $value['d'] >= $startTime;
            }));

        if($endTime)
            $dataDailyJson = array_values(array_filter($dataDailyJson, function($value) use($endTime) {
                return $value['d'] < $endTime;
            }));

    }else{
        $dataDailyJson = [];
    }
    

    // Return successful response in JSON format
    return json_encode([
        'status' => 'success',
        'data' => $dataDailyJson
    ]);
}

// Set header for JSON response
header('Content-Type: application/json');

// Example usage:
$ticker = $_GET['ticker'] ?? "NVDA";  // Example stock ticker
$startTime = intval($_GET['startTime'] ?? '0');
$endTime = intval($_GET['endTime'] ?? '0');


$result = getStockPriceHistory($ticker, $startTime, $endTime);

// Output the JSON result
echo $result;

?>

