<?php
// Target URL
$url = "https://tvc4.investing.com/992e24dcd430b68ff076871fa8d20125/9742300125/1/1/8/history?symbol=6408&resolution=1&from=0&to=1739566800";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");
curl_setopt($ch, CURLOPT_HEADER, true); // Include headers to extract cookies if needed

$response = curl_exec($ch);
$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$headers = substr($response, 0, $header_size);
$body = substr($response, $header_size);

curl_close($ch);

// Check if it's a Cloudflare challenge
if (strpos($body, '__cf_chl_opt') !== false) {
    // Save the challenge HTML to a file or pass it directly
    file_put_contents('challenge.html', $body);
    echo "Challenge detected. Open 'challenge.html' in your browser to solve it.";
} else {
    echo "No challenge detected. Response: " . $body;
}

?>