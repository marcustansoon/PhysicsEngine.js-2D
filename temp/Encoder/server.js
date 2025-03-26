// server.js
const express = require('express');
const { createCanvas } = require('canvas');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

const app = express();
app.use(express.json());







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
    "BA",
    "BABA",
    "BAC",
    "BACK",
    "BACQ",
    "BAER",
    "BAFN",
    "BAH",
    "BAK",
    "BALL",
    "BAM",
    "BANC",
    "BAND",
    "BANF",
    "BANL",
    "BANR",
    "BANX",
    "BAOS",
    "BAP",
    "BARK",
    "BASE",
    "BATL",
    "BATRA",
    "BATRK",
    "BAX",
    "BAYA",
    "BB",
    "BBAI",
    "BBAR",
    "BBBYQ",
    "BBCP",
    "BBD",
    "BBDC",
    "BBDO",
    "BBGI",
    "BBIO",
    "BBLG",
    "BBNX",
    "BBSI",
    "BBU",
    "BBVA",
    "BBW",
    "BBWI",
    "BBY",
    "BC",
    "BCAB",
    "BCAL",
    "BCAX",
    "BCBP",
    "BCC"
]
let jsonTickers = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

//tickers = ["IBM", "NVDA", "MSFT"]



// Proxy list
const proxyList = [
	"http://43.153.25.185:13001",
	"http://43.153.61.52:13001",
	"http://43.153.91.13:13001",
	"http://43.153.85.114:13001",
	"http://43.153.2.82:13001",
	"http://43.153.7.172:13001",
	"http://31.40.248.2:8080",
	"http://139.59.1.14.2:80",
	"http://50.223.246.237:80",
	"http://50.174.7.159:80",
	"http://50.207.199.87:80",
	"http://32.223.6.94:80",
	"http://172.188.122.92:80",
	"http://13.38.153.36:80",
	"http://13.37.59.99:3128",
	
	"http://50.122.86.118:80",
	"http://188.68.52.244:80",
	"http://184.169.154.119:80",
	"http://13.56.192.187:80",
	
	
	"http://13.38.153.36:80",
	"http://13.36.104.85:80",
	"http://13.37.73.214:80",
	"http://44.195.247.145:80",
	"http://50.174.7.153:80",
	"http://165.232.129.150:80",
	"http://50.239.72.18:80",
	"http://50.217.226.47:80",
	"http://50.239.72.19:80",
	
	"http://50.221.74.130:80",
	"http://190.58.248.86:80",
	"http://203.115.101.51:82",
	"http://188.68.52.244:80",
	"http://184.169.154.119:80",
	"http://13.56.192.187:80",
	"http://4.145.89.88:8080",
	
	"http://85.215.64.49:80",
	"http://23.247.136.248:80",
	"http://13.208.56.180:80",
	"http://35.72.118.126:80",
	"http://3.71.239.218:3128",
	
	"http://35.76.62.196:80",
	"http://3.127.62.252:80",
	"http://18.228.149.161:80",
	
	"http://46.51.249.135:3128",
	"http://43.200.77.128:3128",
	"http://54.233.119.172:3128",
	
	"http://52.67.10.183:80",
	"http://200.250.131.218:80",
	"http://52.196.1.182:80",
	
	"http://204.236.176.61:3128",
	"http://3.130.65.162:3128",
	
	//'http://halusngj:iqii2z5mv1ke@38.154.227.167:5868',//'http://64.62.219.99:3128',
];


//const proxy = 'http://64.62.219.99:3128';
app.get('/proxy', async (req, res) => {
	const targetUrl = req.query.url;


	// Set initial proxy
	let proxyIndex = 0;
	let proxy = proxyList[proxyIndex];
	const proxyRetries = 5;
	let maxRetriesAttempt = proxyRetries;
	let agent = new HttpsProxyAgent(proxy);

	for (let loop = 0; loop < tickers.length; loop++) {
		let ticker = tickers[loop];
		
		let shouldLoop = true;
		let reply;
		
		res.write("TICKER: " + ticker + ' \n');
		res.write("Using proxy: " + proxy + ' \n');

		while (shouldLoop) {
			try {

				// await delay(500)
				await fetchWithTimeout(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=dem`, {
					agent: agent,
				}, 15000).then(d => d.json()).then(async resp => {
					reply = resp;
					
					if (!resp['Time Series (Daily)']) {
						res.write(JSON.stringify(resp));
						throw new Error("Error data not found");
					}

					let arr = [];
					for (const [date, values] of Object.entries(resp['Time Series (Daily)'])) {
						arr.push({
							d: date,
							o: values['1. open'],
							h: values['2. high'],
							l: values['3. low'],
							c: values['4. close'],
							v: values['5. volume']
						});
					}
					
					if(!arr.length)
						throw new Error("Error length is zero");



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


					const albumId = "YcnD8zI";//'G0DQ6Hk'; // Imgur album ID
					const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token
					let dd = {
						//"imgur-id": imageId,
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
					}
				})


			} catch (error) {
				res.write(maxRetriesAttempt + ' Attempt : Error: ' + error.message + ' \n');
				res.write(JSON.stringify(reply) + ' \n');
				maxRetriesAttempt--;
			}
			
			if (maxRetriesAttempt === 0) {
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
				proxy = proxyList[proxyIndex];
				agent = new HttpsProxyAgent(proxy);
				res.write('Switched to proxy: ' + proxy + ' \n');
			}
		}

	}
	
	res.write(JSON.stringify(jsonTickers));
	res.end();
});
app.listen(3000, () => console.log('Server running on port 3000'));
