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
                (strtolower($symbol['ticker']) == strtolower($query)) ||
                // For crypto
                (strtolower($symbol['symbol']) == strtolower($query))
            ;
        })
    );

    $reformattedResult = [];
    foreach ($result as $symbol) {
        if(isset($symbol['type']) && $symbol['type'] == 'crypto')
            $isCrypto = true;
        else
            $isCrypto = false;

        $priceScale = 100;
        if(in_array($symbol['symbol'] ?? $symbol['ticker'], ['FILUSD', 'ATOMUSD'])){
            $priceScale = 1000;
        }else if(in_array($symbol['symbol'] ?? $symbol['ticker'], ['DOGEUSD'])){
            $priceScale = 100000;
        }else if(in_array($symbol['symbol'] ?? $symbol['ticker'], ['HBARUSD'])){
            $priceScale = 100000;
        }

        array_push($reformattedResult, [
            "name" => $symbol['symbol'] ?? $symbol['ticker'],
            "description" => $symbol['description'] ?? $symbol['comp_name_2'],
            "type" => $isCrypto ? 'crypto' : 'stock',
            "session" => $isCrypto ? '24x7' : '0930-1600:12345',
            "timezone" => $isCrypto ? 'Etc/UTC' : 'America/New_York',
            "ticker" => $symbol['symbol'] ?? $symbol['ticker'],
            "minmov" => 1,
            "pricescale" => $priceScale,
            "has_intraday" => true,
            "has_daily" => true,
            "intraday_multipliers" =>  $isCrypto ? ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"] : ["D"],
            "supported_resolutions" =>  
                $isCrypto ? 
                ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"]                 : 
                ["D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
            "volume_precision" => 2,
        ]);
    }

    // Sort the result 
    $reformattedResult = sortByClosestFromLeft($reformattedResult, $query, "asc");
    
    // Return successful response in JSON format
    return json_encode([
        'status' => 'success',
        'data' =>  array_slice($reformattedResult, 0, 1)
    ]);
}

// Set header for JSON response
header('Content-Type: application/json');

echo getSymbols($_GET['query'] ?? '');

/*
      "BTCUSD": {
        name: "BTCUSD",
        description: "BTCUSD / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "BTCUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },

        //   "AAPL": {
    //     name: "AAPL",
    //     description: 'Apple Inc.',
    //     type: "stock",
    //     ticker: "AAPL",
    //     session: '0930-1600:12345', // 9:30 AM - 4:00 PM EST, Mon-Fri
    //     timezone: 'America/New_York', // Matches AAPL’s market
    //     minmov: 1,
    //     pricescale: 100,
    //     has_intraday: true,
    //     has_daily: true,
    //     intraday_multipliers:   ["D"],
    //     supported_resolutions:  ["D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
    //     volume_precision: 2,
    //   },

*/