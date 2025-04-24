// server.js
const express = require('express');
const { createCanvas } = require('canvas');
const fetch = require('node-fetch');
const fs = require("fs");
const HttpsProxyAgent = require('https-proxy-agent');

const app = express();
app.use(express.json());


function createImageFile(name, base64String){
		
	// Remove metadata (if present)
	const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
	
	// Write the file
	fs.writeFile(name, base64Data, { encoding: "base64" }, (err) => {
		if (err) {
			console.error("❌ Error saving image:", err);
		} else {
			console.log("✅ Image saved successfully:", name);
		}
	});
}




// Encode string digits into proper pixel data
function getEncodedPixelData(char) {
    let pixelData;
    switch (char) {
        case '0': pixelData = 0; break;
        case '1': pixelData = 1; break;
        case '2': pixelData = 2; break;
        case '3': pixelData = 3; break;
        case '4': pixelData = 4; break;
        case '5': pixelData = 5; break;
        case '6': pixelData = 6; break;
        case '7': pixelData = 7; break;
        case '8': pixelData = 8; break;
        case '9': pixelData = 9; break;
        case '.': pixelData = 10; break;
        case '-': pixelData = 11; break;
        case ',': pixelData = 12; break;
        case ';': pixelData = 13; break;
        default: pixelData = 15; break;
    }
    return pixelData;
}

// Decode pixel data into proper digits (string)
function getDecodedPixelData(rawPixelData) {
    let pixelData;
    switch (rawPixelData) {
        case 0: pixelData = '0'; break;
        case 1: pixelData = '1'; break;
        case 2: pixelData = '2'; break;
        case 3: pixelData = '3'; break;
        case 4: pixelData = '4'; break;
        case 5: pixelData = '5'; break;
        case 6: pixelData = '6'; break;
        case 7: pixelData = '7'; break;
        case 8: pixelData = '8'; break;
        case 9: pixelData = '9'; break;
        case 10: pixelData = '.'; break;
        case 11: pixelData = '-'; break;
        case 12: pixelData = ','; break;
        case 13: pixelData = ';'; break;
        default: pixelData = ' '; break;
    }
    return pixelData;
}


async function uploadImageToImgur(base64Image, accessToken, description) {
    const url = 'https://api.imgur.com/3/image';

    // Read image file as a Base64 encoded string (using FileReader)
    //const imageData = await fetch(imagePath).then(res => res.arrayBuffer());
    //const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageData)));

    const postData = {
        description: description,
        image: base64Image.split(',')[1], // Base64-encoded image data
    };

    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(postData)
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error uploading image:', error);
        return { success: false, error: error.message };
    }
}

async function addImageToImgurAlbum(imageId, albumId, accessToken) {
    const url = `https://api.imgur.com/3/album/${albumId}/add`;

    const postData = {
        ids: [imageId] // Array of image IDs to be added
    };

    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(postData)
        });

        const result = await response.json();
        const httpCode = response.status;

        if (httpCode === 200) {
            return {
                success: true,
                data: result.data
            };
        } else {
            return {
                success: false,
                error: result.data.error || `HTTP ${httpCode}: Unknown error`,
                raw_response: result
            };
        }
    } catch (error) {
        console.error('Error adding image to album:', error);
        return { success: false, error: error.message };
    }
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchWithTimeout = (url, options, timeout = 10000) => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Fetch timeout')), timeout))
    ]);
};















let tickers = [
    "2003-01",
    "2003-02",
    "2003-03",
    "2003-04",
    "2003-05",
    "2003-06",
    "2003-07",
    "2003-08",
    "2003-09",
    "2003-10",
    "2003-11",
    "2003-12",
]



let jsonTickers = {};
let jsonImages = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

//tickers = ["IBM"]



// Proxy list
const proxyList = [


  "http://165.232.129.150:80",
  "http://43.130.57.214:13001",
  "http://106.12.156.26:80",
  "http://43.130.56.110:13001",
  "http://40.76.69.94:8080",
  "http://43.130.15.214:13001",
  "http://170.106.84.125:13001",
  "http://72.10.160.174:4111",
  "http://154.16.146.42:80",
  "http://117.84.75.216:8089",
  "http://43.153.107.10:13001",
  "http://114.224.204.240:8089",
  "http://103.213.218.9:24926",
  "http://170.106.104.171:13001",
  "http://133.18.234.13:80",
  "http://8.209.255.13:3128",

];


app.get('/image-json', async (req, res) => {
	res.write(JSON.stringify(jsonImages));
	res.end();
});


app.get('/json', async (req, res) => {
	res.write(JSON.stringify(jsonTickers));
	res.end();
});



//const proxy = 'http://64.62.219.99:3128';
app.get('/proxy', async (req, res) => {
	const targetUrl = req.query.url;


	// Set initial proxy
	let proxyIndex = 0;
	let proxy = proxyList[proxyIndex].includes('http') ? proxyList[proxyIndex] : "http://" + proxyList[proxyIndex];
	const proxyRetries = 5;
	let maxRetriesAttempt = proxyRetries;
	let agent = new HttpsProxyAgent(proxy);

	let arr = [];
					
	for (let loop = 0; loop < tickers.length; loop++) {
		let ticker = tickers[loop];
		
		let shouldLoop = true;
		let reply;
		
		res.write("TICKER: " + ticker + ' \n');
		res.write("Using proxy: " + proxy + ' \n');

		while (shouldLoop) {
			try {

				await delay(1000)
				await fetchWithTimeout(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=QQQ&interval=60min&outputsize=full&apikey=de1&month=${ticker}`, {
					agent: agent,
				}, 15000).then(d => d.json()).then(async resp => {
					reply = resp;
					if (resp['Information']) {
						res.write(JSON.stringify(resp));
						//shouldLoop = false;
						maxRetriesAttempt = 0;
						throw new Error("Error api exceed usage limits");
						//throw new Error("Error api exceed usage limits");
					}
					
					if(resp['Error Message'] && resp['Error Message'].includes('Invalid API call')){
						shouldLoop = false;
						throw new Error("Skipping " + ticker);
					}
					
					if (!resp['Time Series (60min)']) {
						res.write(JSON.stringify(resp));
						throw new Error("Error data not found");
					}

					for (const [date, values] of Object.entries(resp['Time Series (60min)'])) {
						arr.push({
							d: date.replace(/ /g, "."),
							o: values['1. open'],
							h: values['2. high'],
							l: values['3. low'],
							c: values['4. close'],
							v: values['5. volume']
						});
					}
					
					if(!arr.length)
						throw new Error("Error length is zero");

					
					
					
					
					if(ticker !== tickers[tickers.length-1]){
						shouldLoop = false;
					} else{						
						
						

						let string = "";
						arr.forEach((values, index) => {
							string += values.d + "," + values.o + "," + values.h + "," + values.l + "," + values.c + "," + values.v;
							if (index !== arr.length - 1) {
								string += ";";
							}
						});
						

						let widthIndex = 0;
						let heightIndex = 0;

						let width = 800;
						let height = Math.ceil(string.length / 6 / width);

						// Fill up empty spaces
						let paddingCount = 6 - (string.length % 6);
						while (paddingCount--) {
							string += " ";
						}

						// Create a canvas element
						let canvas = createCanvas(width, height);

						// Get the 2D drawing context
						let ctx = canvas.getContext('2d');

						// Define a color (RGB) - white
						ctx.fillStyle = 'rgb(255, 255, 255)';

						// Fill the entire canvas with the color
						ctx.fillRect(0, 0, canvas.width, canvas.height);

						for (let i = 0; i < string.length; i += 6) {
							// Get RGB values from the encoded pixel data
							let red = ((getEncodedPixelData(string[i]) & 0xF) << 4) | (getEncodedPixelData(string[i + 1]) & 0xF);
							let green = ((getEncodedPixelData(string[i + 2]) & 0xF) << 4) | (getEncodedPixelData(string[i + 3]) & 0xF);
							let blue = ((getEncodedPixelData(string[i + 4]) & 0xF) << 4) | (getEncodedPixelData(string[i + 5]) & 0xF);

							// Set the pixel color
							ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
							// console.log(`rgb(${red}, ${green}, ${blue})`)
							// Draw the pixel at the current position
							ctx.fillRect(widthIndex, heightIndex, 1, 1);

							// Move to the next pixel
							widthIndex++;
							if (widthIndex === width) {
								widthIndex = 0;
								heightIndex++;
							}
						}

						// Create a link to download the canvas as a PNG
						let base64Image = canvas.toDataURL('image/png');
						//res.write(base64Image);
						//return;

						
						const albumId = "w2q9yRA";//,"YcnD8zI";//'G0DQ6Hk'; // Imgur album ID
						const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token
						
						
						//res.write( JSON.stringify(dd) + `\n`);
						//res.write( base64Image + `\n`);
						
						//return;
						
						if(1){
							shouldLoop = false;
							jsonImages[ticker] = {
										"image-name": ticker + ".png",
										"ticker": ticker,
										"type": "daily",
										"from": arr[arr.length - 1]['d'],
										"to": arr[0]['d'],
							}
							createImageFile(ticker + ".png", base64Image);
						}
						
						// Temporarily bypass Imgur
						if(false){
							let dd = {
								"imgur-id": imageId,
								"ticker": ticker,
								"type": "daily",
								"from": arr[arr.length - 1]['d'],
								"to": arr[0]['d'],
							}
						
							let r = await uploadImageToImgur(base64Image, accessToken, JSON.stringify(dd));
							if (r['success']) {
								let imageId = r['data']['id'];
								res.write(`Image uploaded successfully. ID: ${imageId} \n`)
								jsonTickers[ticker] = {
										"imgur-id": imageId,
										"ticker": ticker,
										"type": "daily",
										"from": arr[arr.length - 1]['d'],
										"to": arr[0]['d'],
								};
								let albumR = await addImageToImgurAlbum(imageId, albumId, accessToken);

								if (albumR['success']) {
									res.write(`Image Album Added successfully \n`)
								} else {
									res.write(`Added album failed \n`)
								}
								shouldLoop = false;
							} else {
								res.write(`Image uploaded failed \n`)
								res.write(JSON.stringify(
									{
										base64Image:base64Image,
										description:dd,
									}
								));
								res.write(`\n`)
								shouldLoop = false;
							}
						}
					}
				})


			} catch (error) {
				res.write(maxRetriesAttempt + ' Attempt : Error: ' + error.message + ' \n');
				res.write(JSON.stringify(reply) + ' \n');
				maxRetriesAttempt--;
			}
			
			if (maxRetriesAttempt <= 0) {
				if (proxyIndex === proxyList.length - 1){
					shouldLoop = false;
					res.write('All proxies failed \n');
					res.write(JSON.stringify(jsonTickers));
					res.end();
					return;
				}

				// Set next proxy
				maxRetriesAttempt = proxyRetries;
				proxyIndex++;
				proxy = proxyList[proxyIndex].includes('http') ? proxyList[proxyIndex] : "http://" + proxyList[proxyIndex];
				agent = new HttpsProxyAgent(proxy);
				res.write('Switched to proxy: ' + proxy + ' \n');
			}
		}

	}
	
	res.write(JSON.stringify(jsonTickers));
	res.end();
});
app.listen(3000, () => console.log('Server running on port 3000'));
