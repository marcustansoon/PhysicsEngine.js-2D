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











let tickers = ['AVBP', 'AVD', 'AVDL', 'AVDX', 'AVGO', 'AVGR', 'AVIR', 'AVNS', 'AVNT', 'AVNW', 'AVO', 'AVPT', 'AVR', 'AVT', 'AVTE', 'AVTR', 'AVTX', 'AVXL', 'AVY', 'AWH', 'AWI', 'AWIN', 'AWK', 'AWR', 'AWRE'];
let jsonTickers = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

tickers = ["IBM"]



//const proxy = 'http://halusngj:iqii2z5mv1ke@38.154.227.167:5868';
const proxyList = [
	'http://halusngj:iqii2z5mv1ke@38.154.227.167:5868',//'http://64.62.219.99:3128',
];


//const proxy = 'http://64.62.219.99:3128';


app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
				
			
				
					
					
	for(let loop = 0; loop < tickers.length; loop++){
		let ticker = tickers[loop];
				
				
				  
		for (let i = 0; i < proxyList.length; i++) {
					  
			let proxy = proxyList[i];
			let agent = new HttpsProxyAgent(proxy);
			
			res.write("Using proxy: " + proxy + ' \n');
						
			let proxyFailedAttempts = 0;
					
			while(proxyFailedAttempts < 3){
				try {
								
								
				
				
				
				
				
				
				await delay(500)
				await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=demo`,{
				   agent: agent, 
				  }).then(d => d.json()).then(async resp => {
					
					if(!resp['Time Series (Daily)']) {
						res.write(resp);
						throw new Error("Data not found");
						return;
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
						let red = ((getEncodedPixelData(string[i]) & 0xF) << 4) | (getEncodedPixelData(string[i+1]) & 0xF);
						let green = ((getEncodedPixelData(string[i+2]) & 0xF) << 4) | (getEncodedPixelData(string[i+3]) & 0xF);
						let blue = ((getEncodedPixelData(string[i+4]) & 0xF) << 4) | (getEncodedPixelData(string[i+5]) & 0xF);
					
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
					
					
					const albumId = 'G0DQ6Hk'; // Imgur album ID
					const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token
					let dd = {
								//"imgur-id": imageId,
								"ticker": ticker,
								"type": "daily",
								"from":arr[arr.length-1]['d'],
								"to":arr[0]['d'],
							}
					let r = await uploadImageToImgur(base64Image, accessToken, JSON.stringify(dd));
					if(r['success']){
						let imageId = r['data']['id'];
						res.write(`Image uploaded successfully. ID: ${imageId} \n`)
						let albumR = await addImageToImgurAlbum(imageId, albumId, accessToken);

						if(albumR['success']){
							res.write(`Image Album Added successfully \n`)
							jsonTickers[ticker] = {
								"imgur-id": imageId,
								"ticker": ticker,
								"type": "daily",
								"from":arr[arr.length-1]['d'],
								"to":arr[0]['d'],
							};
						}else{
							res.write(`Added album failed \n`)
						}
					}else{
						res.write(`Image uploaded failed \n`)
					}
				})
			// })
			

				
				
				
				
				
				
				
				
				
			 
			 
			//return;
			//const response = await fetch(targetUrl, { agent });
			//const data = await response.text();
			//res.send(data);
		  } catch (error) {
			 
			//res.status(500).send('Error: ' + error.message);
			res.write(proxyFailedAttempts + ' Attempt : Error: ' + error.message + ' \n');
			proxyFailedAttempts++;
		  }
		  
		}
		
		if(proxyFailedAttempts === 3 && proxy === proxyList[proxyList.length - 1]){
			res.write('All proxies failed \n');
			res.write(JSON.stringify(jsonTickers));
			res.end();
			return;
		}
		  
		  
		}
	}
	
});

app.listen(3000, () => console.log('Server running on port 3000'));
