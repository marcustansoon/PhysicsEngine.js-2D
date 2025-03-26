<?php
function getAllSymbols($url){

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
    $arr = json_decode($response, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return json_encode([
            'status' => 'error',
            'message' => 'JSON Decode Error: ' . json_last_error_msg()
        ]);
    }

    return $arr;
}

function sortByClosestFromLeft(array $arr, string $input, string $order = 'asc'): array {
    // Create a copy of the array to avoid modifying the original
    $sortedArray = $arr;

    // Sort using usort with a custom comparison function
    usort($sortedArray, function ($a, $b) use ($input, $order) {
        // Convert to lowercase for case-insensitive matching
        $aSymbol = strtolower($a['symbol'] ?? '');
        $bSymbol = strtolower($b['symbol'] ?? '');
        $aDesc = strtolower($a['description'] ?? '');
        $bDesc = strtolower($b['description'] ?? '');
        $inputLower = strtolower($input);

        // Find position of input in symbol fields (-1 if not found)
        $aSymbolPos = strpos($aSymbol, $inputLower);
        $bSymbolPos = strpos($bSymbol, $inputLower);
        $aSymbolPos = $aSymbolPos === false ? -1 : $aSymbolPos;
        $bSymbolPos = $bSymbolPos === false ? -1 : $bSymbolPos;

        // Find position in description fields (only if needed)
        $aDescPos = strpos($aDesc, $inputLower);
        $bDescPos = strpos($bDesc, $inputLower);
        $aDescPos = $aDescPos === false ? -1 : $aDescPos;
        $bDescPos = $bDescPos === false ? -1 : $bDescPos;

        // Prioritize symbol matches first
        if ($aSymbolPos >= 0 || $bSymbolPos >= 0) {
            // If both have symbol matches
            if ($aSymbolPos >= 0 && $bSymbolPos >= 0) {
                $posCompare = $aSymbolPos - $bSymbolPos;
                if ($posCompare !== 0) {
                    return $order === 'asc' ? $posCompare : -$posCompare;
                }
                return $order === 'asc' ? strcmp($aSymbol, $bSymbol) : strcmp($bSymbol, $aSymbol);
            }
            // If only a has symbol match
            if ($aSymbolPos >= 0) return -1;
            // If only b has symbol match
            if ($bSymbolPos >= 0) return 1;
        }

        // If no symbol matches, check description (optional prioritization)
        if ($aDescPos >= 0 || $bDescPos >= 0) {
            if ($aDescPos >= 0 && $bDescPos >= 0) {
                $posCompare = $aDescPos - $bDescPos;
                if ($posCompare !== 0) {
                    return $order === 'asc' ? $posCompare : -$posCompare;
                }
                return $order === 'asc' ? strcmp($aSymbol, $bSymbol) : strcmp($bSymbol, $aSymbol);
            }
            if ($aDescPos >= 0) return -1;
            if ($bDescPos >= 0) return 1;
        }

        // If no matches in either field, sort by symbol alphabetically
        return $order === 'asc' ? strcmp($aSymbol, $bSymbol) : strcmp($bSymbol, $aSymbol);
    });

    return $sortedArray;
}


function getSymbols($query) {
    // Construct the API URL
    $us_stocks_url = "https://foodify-ai.great-site.net/us-stocks.txt";
    $crypto_coins_url = "https://foodify-ai.great-site.net/crypto-coins.txt";

    $usStocks = getAllSymbols($us_stocks_url);
    $coins = getAllSymbols($crypto_coins_url);

    $stocks = array_merge(
        is_array($coins) ? $coins : [], 
        is_array($usStocks) ? $usStocks : []
    );
    
    $result = array_values(
        array_filter($stocks, function($symbol) use($query) {
            return 
                // For us stocks
                str_contains(strtolower($symbol['ticker']), strtolower($query)) || str_contains(strtolower($symbol['comp_name_2']), strtolower($query)) || 
                // For crypto
                str_contains(strtolower($symbol['symbol']), strtolower($query)) || str_contains(strtolower($symbol['description']), strtolower($query)) || str_contains(strtolower($symbol['full_name']), strtolower($query))
            ;
        })
    );

    $reformattedResult = [];

    foreach ($result as $symbol) {
        array_push($reformattedResult, [
            "symbol" => $symbol['symbol'] ?? $symbol['ticker'],
            "full_name" => $symbol['full_name'] ?? $symbol['ticker'],
            "description" => $symbol['description'] ?? $symbol['comp_name_2'],
            "type" => isset($symbol['type']) && $symbol['type'] == 'crypto' ? 'crypto' : 'stock',
            "exchange" => $symbol['exchange'],
            "logo_urls" => $symbol['logo_urls'] ?? ["https://s3-symbol-logo.tradingview.com/".$symbol['comp_name'].".svg"],
        ]);
    }

    // Sort the result 
    $reformattedResult = sortByClosestFromLeft($reformattedResult, $query, "asc");

    // Slice the result to max 10 length
    /*$reformattedResult = array_slice($reformattedResult, 0, 10);

    foreach ($reformattedResult as &$symbol) {
        if($symbol['logo_urls'] && count($symbol['logo_urls'])){
            $symbol['logo_urls'] = checkImageURL($symbol['logo_urls'][0]);
        }
    }
    unset($symbol); // Unset the reference to avoid unintended side effects
    */

    
    // Return successful response in JSON format
    return json_encode([
        'status' => 'success',
        'data' =>  array_slice($reformattedResult, 0, 10)
    ]);
}

function checkImageURL($imageUrl){
    // Initialize cURL session
    $ch = curl_init($imageUrl);

    // Set cURL options
    curl_setopt($ch, CURLOPT_NOBODY, true); // Don't download the body
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT_MS, 3000); // Set connection timeout to 1.3 seconds
    curl_setopt($ch, CURLOPT_TIMEOUT_MS, 3000); // Set maximum execution time to 1.3 seconds

    // Execute cURL request
    curl_exec($ch);

    // Get HTTP response code
    $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Close cURL session
    curl_close($ch);

    // Check if the response code indicates the image exists
    if ($responseCode == 200) {
        return [$imageUrl];
    } else {
        return ["https://s3-symbol-logo.tradingview.com/country/US.svg"];
    }
}

// Set header for JSON response
header('Content-Type: application/json');

echo getSymbols($_GET['query'] ?? '');