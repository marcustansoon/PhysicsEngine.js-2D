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















let tickers = ['RZLV']



let jsonTickers = {};
let jsonImages = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

//tickers = ["IBM"]



// Proxy list
const proxyList = [


  "20.13.148.109:8080",
  "43.153.27.172:13001",
  "170.106.110.139:13001",
  "170.106.193.214:13001",
  "27.64.218.85:4009",
  "116.125.141.115:80",
  "193.123.244.193:8080",
  "190.61.106.110:999",
  "91.134.55.236:8080",
  "49.51.182.56:13001",
  "47.83.192.255:8888",
  "159.65.230.46:8888",
  "49.51.250.227:13001",
  "43.153.88.171:13001",
  "72.10.160.92:8447",
  "72.10.160.91:11305",
  "43.135.131.121:13001",
  "189.22.234.33:80",
  "15.235.10.31:28003",
  "116.105.167.226:10001",
  "199.102.106.94:4145",
  "43.153.98.70:13001",
  "43.153.45.169:13001",
  "49.51.41.61:13001",
  "52.23.165.15:3128",
  "27.37.98.168:8888",
  "31.44.91.218:8080",
  "185.26.201.73:8080",
  "43.153.8.210:13001",
  "213.239.221.24:8888",
  "188.117.108.73:9401",
  "91.134.55.236:8443",
  "184.178.172.17:4145",
  "43.153.69.199:13001",
  "125.228.143.207:4145",
  "171.237.122.99:1003",
  "43.153.48.105:13001",
  "165.225.36.127:11197",
  "123.58.199.232:8168",
  "27.189.133.206:8089",
  "43.153.91.13:13001",
  "202.131.235.138:4153",
  "43.135.149.15:13001",
  "44.205.145.200:8080",
  "8.42.68.109:39593",
  "67.43.228.253:10523",
  "43.252.236.114:1080",
  "103.247.242.22:8080",
  "58.243.224.244:8085",
  "200.174.198.86:8888",
  "171.237.121.209:1004",
  "43.153.11.82:13001",
  "171.228.121.183:5102",
  "115.72.5.95:10007",
  "193.200.151.69:32777",
  "51.195.248.19:80",
  "72.10.160.91:27971",
  "141.82.81.49:8080",
  "188.117.108.76:9443",
  "67.43.228.250:29805",
  "47.100.223.33:12080",
  "103.13.113.66:3128",
  "103.213.218.213:18581",
  "197.96.157.93:8080",
  "171.237.124.107:1021",
  "168.227.40.126:9192",
  "43.135.162.60:13001",
  "154.73.109.241:1981",
  "188.117.108.72:9443",
  "159.203.61.169:3128",
  "179.48.251.190:8082",
  "23.138.88.65:999",
  "181.209.82.197:999",
  "103.189.110.50:7200",
  "182.253.140.250:8080",
  "170.106.100.130:13001",
  "51.254.78.223:80",
  "72.214.108.67:4145",
  "5.78.118.46:60552",
  "104.128.228.69:8118",
  "27.189.132.141:8089",
  "27.189.133.8:8089",
  "27.189.131.31:8089",
  "121.224.156.180:8089",
  "188.117.108.68:9443",
  "43.135.134.89:13001",
  "103.191.254.1:8087",
  "43.153.61.52:13001",
  "204.199.140.20:999",
  "67.43.236.21:9931",
  "49.51.178.207:13001",
  "102.209.18.82:8080",
  "192.145.205.97:8080",
  "68.71.247.130:4145",
  "61.164.204.130:4999",
  "43.135.172.243:13001",
  "27.54.117.78:4444",
  "38.152.72.190:2335",
  "43.135.138.21:13001",
  "41.242.69.196:5678",
  "45.14.247.64:30335",
  "217.15.166.95:80",
  "103.251.8.255:8282",
  "103.165.151.81:8080",
  "177.234.192.14:999",
  "43.159.149.62:13001",
  "67.43.236.20:4931",
  "118.113.245.167:2324",
  "218.75.224.4:3309",
  "27.189.128.43:8089",
  "179.184.245.66:4500",
  "188.117.108.68:8800",
  "170.106.99.182:13001",
  "182.160.114.214:8080",
  "85.30.219.207:8080",
  "170.106.137.158:13001",
  "43.130.42.164:13001",
  "103.181.255.149:8080",
  "181.78.105.156:999",
  "43.135.179.240:13001",
  "123.232.166.25:8080",
  "189.22.234.37:80",
  "43.153.113.17:13001",
  "221.231.13.198:1080",
  "43.153.99.175:13001",
  "37.156.46.209:8080",
  "43.153.11.118:13001",
  "203.130.22.115:4545",
  "192.111.139.163:19404",
  "220.81.123.23:48678",
  "103.124.198.190:3125",
  "157.125.220.80:8080",
  "187.172.203.143:999",
  "43.153.50.230:13001",
  "27.189.128.77:8089",
  "115.231.181.40:8128",
  "200.59.10.50:999",
  "171.228.113.106:5131",
  "186.88.46.84:8080",
  "103.22.99.166:8080",
  "150.181.4.41:80",
  "77.242.98.5:8080",
  "44.215.100.135:8118",
  "188.117.108.71:9400",
  "95.159.105.21:8080",
  "5.180.45.235:80",
  "72.10.160.92:22445",
  "120.203.214.144:80",
  "43.130.17.73:13001",
  "103.166.159.199:8085",
  "43.153.28.45:13001",
  "141.95.238.126:8080",
  "13.80.134.180:80",
  "43.130.39.183:13001",
  "74.82.60.199:3128",
  "188.117.108.71:3128",
  "188.117.108.67:80",
  "43.135.164.2:13001",

	'http://halusngj:iqii2z5mv1ke@38.154.227.167:5868',
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

  
  
  
    "34.76.73.21:80",
    "171.237.122.135:1001",
    "43.135.130.88:13001",
    "43.153.4.199:13001",
    "43.153.42.39:13001",
    "49.51.73.61:13001",
    "218.75.224.4:3309",
    "47.88.59.79:82",
    "46.47.197.210:3128",
    "43.153.14.2:13001",
    "171.237.121.209:1004",
    "222.68.32.220:8118",
    "189.22.234.39:80",
    "31.44.91.218:8080",
    "144.126.216.57:80",
    "170.106.153.126:13001",
    "43.130.38.18:13001",
    "14.236.246.171:1009",
    "72.10.160.94:10523",
    "193.200.151.69:32777",
    "43.135.172.243:13001",
    "145.239.196.123:80",
    "103.165.156.186:8090",
    "43.153.98.220:13001",
    "78.46.212.196:1359",
    "43.153.79.9:13001",
    "59.53.80.122:10024",
    "159.65.230.46:8888",
    "43.153.46.52:13001",
    "38.152.72.253:2335",
    "20.27.14.220:8561",
    "211.234.125.3:443",
    "49.51.35.214:13001",
    "47.56.110.204:8990",
    "43.153.14.194:13001",
    "43.153.48.129:13001",
    "115.231.181.40:8128",
    "200.250.131.218:80",
    "128.199.202.122:8080",
    "72.10.160.92:10977",
    "85.89.184.87:5678",
    "37.49.151.44:92",
    "158.255.77.169:80",
    "18.163.90.139:8001",
    "72.10.160.170:26435",
    "117.74.65.207:443",
    "43.152.72.7:13001",
    "122.224.124.26:12080",
    "43.153.22.138:13001",
    "170.106.83.149:13001",
    "43.153.105.141:13001",
    "140.227.61.201:3128",
    "72.10.160.93:8601",
    "72.10.164.178:14435",
    "43.153.23.198:13001",
    "170.106.135.2:13001",
    "20.13.148.109:8080",
    "117.74.65.207:80",
    "43.153.43.169:13001",
    "75.81.166.118:39593",
    "166.0.235.143:56290",
    "43.153.23.65:13001",
    "170.106.99.182:13001",
    "67.43.228.252:21523",
    "43.135.185.22:13001",
    "117.80.190.179:8089",
    "45.87.68.9:15321",
    "43.130.39.127:13001",
    "49.51.203.88:13001",
    "211.251.236.253:80",
    "82.213.29.203:19000",
    "170.106.183.91:13001",
    "45.77.249.199:1236",
    "43.130.2.30:13001",
    "45.129.141.143:3128",
    "102.182.134.53:8082",
    "113.160.214.209:8080",
    "143.42.66.91:80",
    "170.106.117.36:13001",
    "119.3.113.152:9094",
    "132.148.128.8:56222",
    "67.43.228.254:10969",
    "38.152.72.140:2335",
    "170.106.73.178:13001",
    "103.124.137.99:8080",
    "67.43.236.18:16891",
    "43.153.118.161:13001",
    "203.74.125.18:8888",
    "43.153.27.172:13001",
    "34.203.106.9:80",
    "171.237.122.99:1004",
    "90.174.128.42:3128",
    "14.204.5.187:8085",
    "41.155.47.107:8080",
    "189.1.220.189:8080",
    "49.51.203.51:13001",
    "61.160.236.62:8888",
    "72.10.160.90:10523",
    "43.153.91.13:13001",
    "171.237.122.99:1005",
    "115.74.2.49:10001",
    "45.70.113.20:8080",
    "124.6.155.170:3131",
    "59.36.239.108:21133",
    "116.125.141.115:80",
    "27.37.98.168:8888",
    "196.1.93.16:80",
    "27.189.133.19:8089",
    "84.39.179.101:8000",
    "85.10.199.48:80",
    "67.43.227.230:23959",
    "49.51.178.207:13001",
    "114.224.221.46:8089",
    "103.82.135.154:8888",
    "106.12.111.83:9103",
    "8.213.195.191:3128",
    "31.57.228.216:3128",
    "103.191.254.1:8087",
    "89.249.62.8:3128",
    "92.58.181.171:1194",
    "89.116.34.113:80",
    "67.43.236.18:18865",
    "180.127.230.67:1080",
    "144.24.122.46:80",
    "87.248.129.32:80",
    "103.177.235.207:84",
    "101.71.143.237:8092",
    "49.51.197.116:13001",
    "77.236.203.106:19500",
    "52.22.60.110:100",
    "103.171.183.254:8090",
    "114.229.213.216:8089",
    "109.164.38.189:2306",
    "181.224.205.42:999",
    "119.95.250.54:8082",
    "170.106.169.110:13001",
    "190.121.153.68:9992",
    "78.157.57.71:3128",
    "106.38.26.22:2080",
    "115.178.49.226:8080",
    "9.163.145.93:3129",
    "13.228.125.72:8888",
    "103.172.254.145:84",
    "92.42.8.23:4153",
    "184.178.172.28:15294",
    "185.252.146.41:8000",
    "144.139.210.56:80",
    "43.153.11.82:13001",
    "46.60.15.62:8080",
    "210.1.246.146:65535",
    "168.121.242.66:999",
    "38.83.108.90:5678",
    "113.192.31.87:8080",
    "67.43.228.250:20121",
    "89.46.249.254:60729",
    "43.153.113.17:13001",
    "43.153.69.25:13001",
    "23.82.137.156:80",
    "170.106.193.214:13001",
    "124.160.103.162:11451",
    "43.153.26.163:13001",
    "35.209.198.222:80",
    "171.224.73.237:16662",
    "176.119.159.213:3128",
    "49.51.179.85:13001",
    "187.62.241.136:8080",
    "38.51.48.235:999",
    "14.236.246.171:1005",
    "192.252.208.67:14287",
    "47.251.54.0:6698",
    "180.94.80.18:8080",
    "67.43.227.226:11041",
    "58.209.32.91:8089",
    "27.189.131.103:8089",
    "103.108.131.2:8080",
    "114.229.213.221:8089",
    "217.26.67.57:3180",
    "152.166.69.34:8080",
    "116.111.100.239:10002",
    "43.135.134.152:13001",
    "49.51.228.176:13001",
    "177.234.217.43:999",
    "147.45.104.252:80",
    "1.160.0.68:8081",
    "43.153.69.199:13001",
    "5.161.81.198:8080",
    "138.117.63.102:3629",
    "103.156.75.41:8181",
    "43.153.22.230:13001",
    "103.48.71.6:84",
    "43.153.116.85:13001",
    "34.143.143.61:7777",
    "67.43.227.226:32995",
    "52.194.235.79:1080",
    "220.168.77.235:8085",
    "103.82.37.235:8888",
    "49.51.248.107:13001",
    "141.95.238.126:8080",
    "43.130.32.94:13001",
    "162.214.165.203:80",
    "170.106.181.226:13001",
    "49.51.201.67:13001",
    "103.234.31.79:8080",
    "36.33.43.226:8060",
    "160.19.19.17:7777",
    "43.135.161.247:13001",
    "103.193.144.13:8080",
    "128.140.28.137:8080",
    "160.3.168.70:8080",
    "113.160.148.71:80",
    "213.178.39.170:8080",
    "103.160.182.169:1080",
    "182.253.121.62:8080",
    "51.254.132.238:90",
    "185.35.130.81:58911",
    "49.51.33.115:13001",
    "103.183.58.35:8181",
    "120.133.37.235:1080",

	'dmfudori:ycoetjksk903@38.154.227.167:5868',
	'dmfudori:ycoetjksk903@38.153.152.244:9594',
	'dmfudori:ycoetjksk903@86.38.234.176:6630',
	'dmfudori:ycoetjksk903@173.211.0.148:6641',
	'dmfudori:ycoetjksk903@161.123.152.115:6360',
	'dmfudori:ycoetjksk903@216.10.27.159:6837',
	'dmfudori:ycoetjksk903@154.36.110.199:6853',
	'dmfudori:ycoetjksk903@45.151.162.198:6600',
	'dmfudori:ycoetjksk903@185.199.229.156:7492',
	'dmfudori:ycoetjksk903@185.199.228.220:7300',


	'http://halusngj:iqii2z5mv1ke@38.154.227.167:5868',
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
						//shouldLoop = false;
						maxRetriesAttempt = 0;
						throw new Error("Error api exceed usage limits");
						//throw new Error("Error api exceed usage limits");
					}
					
					if(resp['Error Message'] && resp['Error Message'].includes('Invalid API call')){
						shouldLoop = false;
						throw new Error("Skipping " + ticker);
					}
					
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
