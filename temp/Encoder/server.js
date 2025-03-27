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
    "CAPL",
    "CAPN",
    "CAPR",
    "CAPT",
    "CAR",
    "CARA",
    "CARE",
    "CARG",
    "CARM",
    "CARR",
    "CARS",
    "CART",
    "CARV",
    "CASH",
    "CASI",
    "CASK",
    "CASS",
    "CASY",
    "CAT",
    "CATO",
    "CATY",
    "CAUD",
    "CAVA",
    "CB",
    "CBAN",
    "CBAT",
    "CBFV",
    "CBL",
    "CBLL",
    "CBNA",
    "CBNK",
    "CBRE",
    "CBRL",
    "CBSH",
    "CBT",
    "CBU",
    "CBUS",
    "CBZ",
    "CC",
    "CCAP",
    "CCB",
    "CCBG",
    "CCCC",
    "CCCS"
]
let jsonTickers = {};
let jsonImages = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

//tickers = ["IBM"]



// Proxy list
const proxyList = [

	"3.25.149.163:20202",
	"56.124.99.210:20201",
	"13.60.245.53:20202",
	"13.53.96.5:20202",
	"3.36.99.188:20201",
	"18.175.166.238:20201",
	"13.231.150.2:20202",
	"3.86.236.60:20201",
	"3.143.222.197:20202",
	"56.228.16.241:20201",
	"13.250.204.5:20202",
	"3.106.120.30:20201",
	"44.201.43.27:20202",
	"43.207.50.162:20202",
	"51.17.21.181:20202",
	"56.155.36.111:20201",
	"54.92.41.120:20005",
	"13.203.209.37:20202",
	"51.44.173.80:20202",
	"204.236.185.207:20201",
	"54.202.35.97:20201",
	"44.202.134.58:20201",
	"3.35.133.153:20201",
	"47.129.126.231:20005",
	"13.51.6.203:20202",
	"51.44.41.231:20201",
	"51.44.176.151:20202",
	"13.40.100.60:20202",
	"13.53.126.216:20201",
	"13.36.195.120:20201",
	"184.72.19.222:20201",
	"3.104.88.178:80",
	"47.129.112.152:20202",
	"43.201.58.184:20202",
	"35.90.98.216:20201",
	"18.175.216.106:20201",
	"18.138.124.192:20202",
	"3.27.112.170:20201",
	"35.78.114.150:20201",
	"13.208.191.82:20202",
	"51.84.68.241:20202",
	"18.144.50.181:20201",
	"35.181.61.51:20202",
	"18.183.24.164:20202",
	"98.81.33.66:20002",
	"51.84.12.99:20202",
	"18.134.96.240:20202",
	"35.78.198.199:20202",
	"56.155.32.72:20202",
	"51.17.101.31:20202",
	"15.235.10.43:28003",
	"170.106.116.169:17981",
	"154.65.39.8:80",
	"65.49.2.99:3128",
	"14.229.249.242:8080",
	"170.106.137.158:13001",
	"170.106.73.178:13001",
	"49.51.178.207:13001",
	"170.106.141.8:13001",
	"49.51.207.251:13001",
	"43.159.132.190:13001",
	"170.106.183.91:13001",
	"43.159.136.60:13001",
	"43.135.178.216:13001",
	"170.106.99.182:13001",
	"43.135.166.98:13001",
	"43.159.149.62:13001",
	"43.159.139.58:13001",
	"43.153.4.125:13001",
	"49.51.49.138:13001",
	"170.106.181.226:13001",
	"170.106.198.32:13001",
	"170.106.196.118:13001",
	"170.106.74.95:13001",
	"170.106.80.237:13001",
	"170.106.153.126:13001",
	"49.51.73.61:13001",
	"43.159.138.46:13001",
	"43.159.149.150:13001",
	"43.135.172.243:13001",
	"170.106.173.254:13001",
	"170.106.117.195:13001",
	"43.130.58.21:13001",
	"170.106.198.54:13001",
	"49.51.201.67:13001",
	"49.51.72.228:13001",
	"49.51.35.214:13001",
	"43.130.61.237:13001",
	"65.49.68.199:3128",
	"43.153.48.105:13001",
	"43.153.39.191:13001",
	"43.153.35.252:13001",
	"43.153.61.52:13001",
	"43.153.65.34:13001",
	"43.153.69.25:13001",
	"187.28.39.176:80",
	"43.153.103.42:13001",
	"43.153.79.15:13001",
	"189.1.220.189:8080",
	"192.73.244.36:80",
	"51.79.145.40:3128",
	"49.48.91.86:8080",
	"38.49.149.138:999",
	"103.122.65.51:8282",
	"49.48.177.11:8080",
	"58.69.143.223:41890",
	"103.156.248.173:3128",
	"177.184.199.36:80",
	
	
	"3.25.149.163:20202",
	"56.124.99.210:20201",
	"13.60.245.53:20202",
	"13.53.96.5:20202",
	"3.36.99.188:20201",
	"18.175.166.238:20201",
	"13.231.150.2:20202",
	"3.86.236.60:20201",
	"3.143.222.197:20202",
	"56.228.16.241:20201",
	"13.250.204.5:20202",
	"3.106.120.30:20201",
	"44.201.43.27:20202",
	"43.207.50.162:20202",
	"51.17.21.181:20202",
	"56.155.36.111:20201",
	"54.92.41.120:20005",
	"13.203.209.37:20202",
	"51.44.173.80:20202",
	"204.236.185.207:20201",
	"54.202.35.97:20201",
	"44.202.134.58:20201",
	"3.35.133.153:20201",
	"47.129.126.231:20005",
	"13.51.6.203:20202",
	"51.44.41.231:20201",
	"51.44.176.151:20202",
	"13.40.100.60:20202",
	"13.53.126.216:20201",
	"13.36.195.120:20201",
	"184.72.19.222:20201",
	"3.104.88.178:80",
	"47.129.112.152:20202",
	"43.201.58.184:20202",
	"35.90.98.216:20201",
	"18.175.216.106:20201",
	"18.138.124.192:20202",
	"3.27.112.170:20201",
	"35.78.114.150:20201",
	"13.208.191.82:20202",
	"51.84.68.241:20202",
	"18.144.50.181:20201",
	"35.181.61.51:20202",
	"18.183.24.164:20202",
	"98.81.33.66:20002",
	"51.84.12.99:20202",
	"18.134.96.240:20202",
	"35.78.198.199:20202",
	"56.155.32.72:20202",
	"51.17.101.31:20202",
	"15.235.10.43:28003",
	"170.106.116.169:17981",
	"154.65.39.8:80",
	"65.49.2.99:3128",
	"14.229.249.242:8080",
	"170.106.137.158:13001",
	"170.106.73.178:13001",
	"49.51.178.207:13001",
	
	"52.26.114.229:1080",
	"18.223.25.15:80",
	"200.60.145.167:8082",
	"81.215.198.27:1453",
	"5.75.197.16:10602",
	"43.153.69.148:18088",
	"43.153.74.196:18088",
	"142.171.85.100:800",
	"43.153.110.21:18089",
	"172.245.202.41:2335",
	"43.153.102.192:18088",
	"38.113.189.131:5340",
	"43.153.50.118:18088",
	"113.160.132.195:8080",
	"47.243.113.74:5555",
	"170.106.137.158:13001",
	"170.106.107.101:13001",
	"49.51.193.30:13001",
	"3.71.239.218:3128",
	"3.12.144.146:3128",
	"43.135.134.152:13001",
	"43.153.113.17:13001",
	"43.135.138.21:13001",
	"43.135.179.180:13001",
	"170.106.117.36:13001",
	"49.51.75.240:13001",
	"43.130.2.30:13001",
	"13.59.156.167:3128",
	"161.97.136.251:3128",
	"43.153.88.171:13001",
	"43.153.107.10:13001",
	"3.90.100.12:80",
	"89.36.65.133:3128",
	"43.153.11.118:13001",
	"44.219.175.186:80",
	
	
	"200.60.145.167:8082",
	"38.113.190.153:5340",
	"212.111.89.182:443",
	"43.153.92.230:18088",
	"185.254.96.244:3030",
	"27.77.132.33:25810",
	"172.188.122.92:80",
	"43.153.110.21:18089",
	"117.5.58.130:30549",
	"172.245.202.16:2335",
	"103.213.218.217:22854",
	"154.236.177.101:1976",
	"170.106.107.101:13001",
	"27.79.245.82:16000",
	"43.159.132.190:13001",
	"43.153.4.125:13001",
	"49.51.75.240:13001",
	"43.130.9.70:13001",
	"170.106.169.110:13001",
	"117.54.114.33:80",
	"190.103.177.131:80",
	"77.238.103.98:8080",
	"43.153.36.97:13001",
	"43.153.88.171:13001",
	"43.153.98.107:13001",
	
	"3.140.12.63:88",
	"141.11.123.189:63650",
	"43.130.32.94:13001",
	"170.106.106.9:13001",
	"43.130.17.73:13001",
	"43.135.179.240:13001",
	"72.10.160.91:26867",
	"67.43.227.226:11305",
	"195.35.2.231:80",
	"4.175.200.138:8080",
	"162.214.165.203:80",
	"139.59.1.14:80",
	"15.236.186.15:45554",
	"3.106.120.30:20201",
	"44.201.43.27:20202",
	"18.175.216.106:20201",
	"18.223.25.15:80",
	"116.125.141.115:80",
	"77.91.70.115:59620",
	"77.221.141.36:53647",
	"43.153.110.21:18089",
	"13.38.153.36:80",
	"8.218.14.185:1088",
	"13.36.113.81:3128",
	"13.37.73.214:80",
	
	
	"43.153.22.230:13001",
	"43.153.58.73:13001",
	"43.153.22.138:13001",
	"43.153.32.146:13001",
	"43.153.69.199:13001",
	"43.153.69.25:13001",
	"43.153.91.13:13001",
	"43.153.92.57:13001",
	"43.153.103.45:13001",
	"43.153.98.70:13001",
	"43.153.94.8:13001",
	"43.153.100.6:13001",
	"43.153.107.74:13001",
	"43.153.103.42:13001",
	"43.153.79.15:13001",
	"43.153.98.220:13001",
	"43.153.8.210:13001",
	"43.153.2.3:13001",
	"50.169.222.243:80",
	"43.153.2.82:13001",
	"43.153.11.82:13001",
	
	"43.135.162.60:13001",
	"170.106.115.219:13001",
	"43.130.2.57:13001",
	"170.106.110.139:13001",
	"43.130.39.127:13001",
	"43.159.149.150:13001",
	"43.135.179.180:13001",
	"43.135.184.36:13001",
	"43.130.16.92:13001",
	"43.135.166.82:13001",
	"43.153.45.169:13001",
	"170.106.192.157:13001",
	"43.135.153.235:13001",
	"81.169.213.169:8888",
	"43.135.164.4:13001",
	"43.130.48.100:13001",







	"http://170.106.73.178:13001",
	"http://170.106.168.138:13001",
	"http://170.106.100.130:13001",
	"http://43.135.177.23:13001",
	"http://43.135.139.239:13001",
	"http://170.106.67.179:13001",
	"http://170.106.99.182:13001",
	"http://43.135.129.111:13001",
	"http://182.72.203.255:80",
	"http://170.106.106.9:13001",
	"http://170.106.196.118:13001",
	"http://170.106.140.86:13001",
	"http://170.106.80.237:13001",
	"http://170.106.153.126:13001",
	"http://43.135.130.124:13001",



	"http://38.177.103.132:8899",
	"http://38.177.105.35:8899",
	"http://47.251.122.81:8888",
	"http://85.214.107.177:80",
	"http://158.255.77.169:80",
	"http://118.27.111.97:80",
	
	"http://50.207.199.80:80",
	"http://50.207.199.83:80",
	"http://50.174.7.153:80",
	"http://50.202.75.26:80",
	"http://50.239.72.18:80",
	"http://50.221.74.130:80",
	"http://50.175.212.74:80",
	"http://50.207.199.82:80",
	"http://50.174.7.152:80",
	"http://71.14.218.2:8080",
	
	
	"http://hrfcwnmp:h5842xrc9zzm@38.154.227.167:5868",
	"http://hrfcwnmp:h5842xrc9zzm@38.153.152.244:9594",
	"http://hrfcwnmp:h5842xrc9zzm@86.38.234.176:6630",
	"http://hrfcwnmp:h5842xrc9zzm@173.211.0.148:6641",
	"http://hrfcwnmp:h5842xrc9zzm@161.123.152.115:6360",
	
	"http://hrfcwnmp:h5842xrc9zzm@216.10.27.159:6837",
	"http://hrfcwnmp:h5842xrc9zzm@154.36.110.199:6853",
	"http://hrfcwnmp:h5842xrc9zzm@45.151.162.198:6600",
	"http://hrfcwnmp:h5842xrc9zzm@185.199.229.156:7492",
	"http://hrfcwnmp:h5842xrc9zzm@185.199.228.220:7300",


	/*'http://halusngj:iqii2z5mv1ke@38.154.227.167:5868',
	"http://tkifgotd:h5842xrc9zzm@38.154.227.167:5868",
	"http://tkifgotd:h5842xrc9zzm@38.153.152.244:9594",
	"http://tkifgotd:h5842xrc9zzm@86.38.234.176:6630",
	"http://tkifgotd:h5842xrc9zzm@173.211.0.148:6641",
	"http://tkifgotd:h5842xrc9zzm@161.123.152.115:6360",
	
	"http://tkifgotd:h5842xrc9zzm@216.10.27.159:6837",
	"http://tkifgotd:h5842xrc9zzm@154.36.110.199:6853",
	"http://tkifgotd:h5842xrc9zzm@45.151.162.198:6600",
	"http://tkifgotd:h5842xrc9zzm@185.199.229.156:7492",
	"http://tkifgotd:h5842xrc9zzm@185.199.228.220:7300",
	
	"http://83.168.72.172:8081",
	"http://185.132.242.212:8083",
	"http://80.249.112.163:80",
	"http://103.49.114.195:8080",
	"http://89.110.78.230:80",
	
	"http://79.110.200.27:8000",
	"http://79.110.201.235:8081",
	
	"http://83.168.74.163:8080",
	"http://93.171.157.249:8080",
	"http://203.74.125.18:8888",*/

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

	for (let loop = 0; loop < tickers.length; loop++) {
		let ticker = tickers[loop];
		
		let shouldLoop = true;
		let reply;
		
		res.write("TICKER: " + ticker + ' \n');
		res.write("Using proxy: " + proxy + ' \n');

		while (shouldLoop) {
			try {

				await delay(1000)
				await fetchWithTimeout(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=dem`, {
					agent: agent,
				}, 15000).then(d => d.json()).then(async resp => {
					reply = resp;
					if (resp['Information']) {
						res.write(JSON.stringify(resp));
						shouldLoop = false;
						res.write("Error api exceed usage limits");
						break;
						//maxRetriesAttempt = 0;
						//throw new Error("Error api exceed usage limits");
					}
					
					if (!resp['Time Series (Daily)']) {
						res.write(JSON.stringify(resp));
						throw new Error("Error data not found");
					}
					
					if(resp['Error Message'] && resp['Error Message'].includes('Invalid API call'){
						shouldLoop = false;
						res.write("Skipping " + ticker);
						break;
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


					const albumId = "w2q9yRA";//,"YcnD8zI";//'G0DQ6Hk'; // Imgur album ID
					const accessToken = '4bbf60ae2a3105a2ed11eb3bee07c069a8943769'// 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token
					
					
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
