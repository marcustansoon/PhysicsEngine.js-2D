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
    "J",
    "JACK",
    "JACS",
    "JAGX",
    "JAKK",
    "JAMF",
    "JANX",
    "JAZZ",
    "JBDI",
    "JBGS",
    "JBHT",
    "JBI",
    "JBL",
    "JBLU",
    "JBSS",
    "JBTM",
    "JCI",
    "JCSE",
    "JCTC",
    "JD",
    "JDZG",
    "JEF",
    "JELD",
    "JEWL",
    "JFBR",
    "JFIN",
    "JFU",
    "JG",
    "JHG",
    "JHX",
    "JILL",
    "JJSF",
    "JKHY",
    "JKS",
    "JL",
    "JLL",
    "JMIA",
    "JMSB",
    "JNJ",
    "JNPR",
    "JNVR",
    "JOBY",
    "JOE",
    "JONE",
    "JOUT",
    "JP",
    "JPM",
    "JRJC",
    "JRSH",
    "JRVR"
]

let jsonTickers = {};
let jsonImages = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

//tickers = ["IBM"]



// Proxy list
const proxyList = [

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
	
"38.180.2.107:3128",
    "195.219.98.27:5678",
    "49.51.245.200:13001",
    "219.65.73.81:80",
    "49.51.202.75:13001",
    "178.79.165.164:35502",
    "43.153.69.199:13001",
    "159.203.61.169:3128",
    "43.135.139.239:13001",
    "43.153.118.161:13001",
    "85.25.93.136:5566",
    "192.252.208.67:14287",
    "43.130.57.165:13001",
    "49.51.75.54:13001",
    "43.153.14.2:13001",
    "36.67.147.222:4153",
    "129.226.155.235:8080",
    "119.3.113.152:9094",
    "38.54.71.67:80",
    "185.229.241.132:8880",
    "142.54.239.1:4145",
    "43.153.50.230:13001",
    "199.58.184.97:4145",
    "184.178.172.14:4145",
    "43.153.100.6:13001",
    "79.127.158.225:8080",
    "220.197.166.216:10801",
    "184.178.172.18:15280",
    "15.235.10.31:28003",
    "67.43.228.251:26539",
    "158.69.118.135:38080",
    "67.43.228.252:4361",
    "170.106.140.154:13001",
    "170.106.64.187:13001",
    "170.106.194.126:13001",
    "8.211.194.78:443",
    "49.51.203.88:13001",
    "47.251.43.115:33333",
    "43.135.154.71:13001",
    "43.135.183.46:13001",
    "184.181.217.210:4145",
    "197.96.157.93:8080",
    "43.130.58.21:13001",
    "170.106.183.91:13001",
    "104.207.39.233:3128",
    "123.18.4.2:10009",
    "43.135.137.152:13001",
    "5.160.224.146:3128",
    "200.174.198.86:8888",
    "43.159.139.58:13001",
    "34.143.143.61:7777",
    "170.106.106.9:13001",
    "67.43.228.250:31695",
    "43.130.9.70:13001",
    "49.67.131.201:1080",
    "185.233.119.116:8080",
    "103.171.255.60:8080",
    "103.156.74.154:8080",
    "158.255.77.169:80",
    "8.211.194.78:6379",
    "49.156.44.130:55443",
    "200.35.148.202:999",
    "202.154.37.162:8080",
    "43.153.79.15:13001",
    "181.49.177.198:8080",
    "221.231.13.198:1080",
    "43.153.79.9:13001",
    "114.231.73.90:1080",
    "82.149.196.90:2080",
    "195.66.189.58:81",
    "46.47.197.210:3128",
    "43.153.27.172:13001",
    "9.163.145.93:3128",
    "103.40.121.88:8189",
    "60.248.77.86:555",
    "43.153.28.45:13001",
    "188.132.222.46:8080",
    "49.51.34.18:13001",
    "190.8.164.25:8086",
    "4.145.89.88:8080",
    "9.223.187.19:3128",
    "103.163.103.64:8080",
    "43.130.61.237:13001",
    "27.79.82.62:15166",
    "190.0.50.38:8080",
    "38.162.25.64:3128",
    "185.208.102.182:8080",
    "43.135.179.180:13001",
    "64.188.228.165:443",
    "171.100.182.11:80",
    "170.106.168.41:7654",
    "104.238.37.198:6755",
    "80.209.243.231:8443",
    "117.80.188.25:8089",
    "181.78.6.219:8080",
    "37.156.46.209:8080",
    "184.168.121.153:41243",
    "170.106.106.138:13001",
    "49.51.75.240:13001",
    "27.72.244.228:8080",
    "45.140.143.77:18080",
    "184.181.217.213:4145",
    "38.45.43.6:999",
    "43.153.23.65:13001",
    "115.245.46.173:8080",
    "103.134.246.102:3172",
    "142.93.202.130:3128",
    "177.101.0.199:8080",
    "101.66.194.93:8085",
    "43.135.130.124:13001",
    "170.106.169.110:13001",
    "103.48.71.162:84",
    "160.19.18.59:8910",
    "49.88.254.98:3328",
    "4.155.2.13:9443",
    "125.209.110.83:39617",
    "188.117.108.67:443",
    "179.60.53.28:999",
    "111.1.61.47:3128",
    "4.155.2.13:80",
    "43.153.23.64:13001",
    "38.52.158.76:999",
    "192.46.229.201:3310",
    "114.80.32.8:3081",
    "104.129.194.44:10865",
    "3.86.92.170:8080",
    "119.3.113.151:9094",
    "103.17.90.6:5678",
    "36.95.22.27:8080",
    "104.129.194.43:11263",
    "27.189.133.226:8089",
    "125.26.15.224:8080",
    "103.22.99.21:8883",
    "103.162.54.250:8066",
    "104.129.194.43:11728",
    "43.155.196.88:9090",
    "72.44.34.149:8080",
    "201.91.82.155:3128",
    "67.213.212.39:58116",
    "81.169.213.169:8888",
    "43.153.27.33:13001",
    "36.64.181.82:8080",
    "189.1.220.189:8080",
    "43.153.36.97:13001",
    "181.209.111.148:999",
    "36.95.78.156:8080",
    "207.55.243.54:64403",
    "155.54.239.64:80",
    "43.159.138.46:13001",
    "51.161.56.52:80",
    "43.248.186.56:8888",
    "58.69.143.223:41890",
    "118.173.230.149:1080",
    "15.235.10.43:28003",
    "79.127.158.225:8082",
    "77.221.141.36:53647",
    "80.249.112.166:80",
    "114.80.38.120:3081",
    "49.51.73.61:13001",
    "200.69.92.98:999",
    "203.76.98.21:45958",
    "181.174.228.96:999",
    "170.106.67.179:13001",
    "4.155.2.13:9401",
    "1.55.35.55:3128",
    "193.105.62.11:58973",
    "79.127.158.225:8081",
    "62.103.66.18:3128",
    "43.135.129.111:13001",
    "189.22.234.39:80",
    "160.191.180.159:7777",
    "119.93.145.82:3128",
    "122.52.185.72:8080",
    "128.199.202.122:8080",
    "170.106.64.217:13001",
    "104.129.194.43:11036",
    "113.108.13.120:8083",
    "181.78.211.95:999",
    "43.135.177.23:13001",
    "43.153.14.194:13001",
    "8.212.168.170:9098",
    "43.135.172.170:13001",
    "42.114.226.95:10036",
    "107.181.161.81:4145",
    "103.175.240.54:9191",
    "103.249.86.48:3128",
    "170.106.137.158:13001",
    "43.153.105.141:13001",
    "103.167.170.69:5758",
    "85.15.21.102:8080",
    "114.224.143.220:8089",
    "67.43.228.254:15471",
    "77.91.70.115:36748",
    "103.175.240.87:8080",
    "43.153.112.164:13001",
    "36.95.78.156:3128",
    "43.153.16.150:7654",
    "103.147.134.59:8080",
    "103.18.112.5:1111",
    "116.254.99.157:8097",
    "123.200.14.194:8080",
    "38.45.242.120:999",
    "118.179.151.57:5020",
    "113.160.133.32:8080",
    "79.106.170.126:4145",
    "43.153.78.185:13001",
    "8.212.168.170:3128",
    "117.74.65.207:443",
    "200.250.131.218:80",
    "61.160.236.62:8888",
    "43.130.39.127:13001",
    "49.51.193.30:13001",
    "103.247.13.131:8080",
    "49.51.242.102:13001",
    "103.154.92.74:8080",
    "49.51.249.217:13001",
    "36.88.111.250:8787",
    "143.42.66.91:80",
    "170.106.74.95:13001",
    "61.186.243.6:9002",
    "43.153.102.53:13001",
    "45.224.117.74:999",
    "72.10.160.170:20091",
    "38.152.65.77:2335",
    "190.97.228.46:465",
    "46.187.46.173:8080",
    "170.106.107.197:13001",
    "5.75.197.16:10602",
    "47.245.126.204:22",
    "45.128.135.1:1080",
    "185.189.100.94:8080",
    "43.130.16.92:13001",
    "141.95.238.126:8080",
    "43.135.130.198:13001",
    "168.121.242.66:999",
    "103.213.218.81:14152",
    "195.187.22.223:8080",
    "108.175.23.225:13135",
    "125.128.25.151:11011",
    "188.132.150.77:8080",
    "50.235.247.114:8085",
    "103.247.14.137:8285",
    "170.106.184.19:13001",
    "154.236.168.176:1976",
    "106.38.26.22:2080",
    "85.10.199.48:80",
    "162.245.239.110:63506",
    "42.114.226.95:10004",
    "49.51.182.56:13001",
    "4.216.195.194:3128",
    "43.135.132.181:13001",
    "8.213.195.191:80",
    "125.87.89.58:2324",
    "49.51.197.116:13001",
    "27.147.195.170:58080",
    "43.153.48.105:13001",
    "103.41.33.169:58080",
    "27.50.29.166:8085",
    "72.10.160.170:27273",
    "162.240.58.147:53343",
    "80.249.112.162:80",
    "103.229.83.106:6789",
    "187.251.130.156:8080",
    "195.87.136.2:5331",
    "43.135.178.216:13001",
    "170.106.140.86:13001",
    "67.43.227.226:12719",
    "103.167.68.90:8181",
    "68.183.184.35:3128",
    "0.113.168.69:1080",
    "71.14.218.2:8080",
    "116.99.59.102:8080",
    "49.51.232.89:13001",
    "190.128.248.134:999",
    "103.106.112.166:1234",
    "92.93.165.66:3128",
    "43.153.16.223:13001",
    "43.159.28.112:19538",
    "43.130.2.135:13001",
    "43.153.106.210:13001",
    "47.74.46.81:3128",
    "43.130.42.164:13001",
    "91.211.212.6:32650",
    "43.153.85.114:13001",
    "208.67.28.28:58090",
    "98.83.213.181:8888",
    "85.192.30.198:3128",
    "38.65.172.3:999",
    "65.108.203.36:28080",
    "162.223.90.130:80",
    "49.48.64.212:8080",
    "103.172.35.64:8080",
    "202.176.1.77:5555",
    "188.117.108.71:3128",
    "189.22.234.32:80",
    "45.92.177.60:8080",
    "170.80.234.145:8080",
    "103.180.123.217:8080",
    "201.91.248.67:20183",
    "188.117.108.76:3128",
    "189.222.163.175:999",
    "170.106.153.126:13001",
    "43.202.54.198:7188",
    "171.237.121.209:1009",
    "43.135.164.4:13001",
    "72.10.160.170:22393",
    "106.12.111.83:9103",
    "72.37.216.68:4145",
    "38.156.72.40:8080",
    "43.153.94.60:13001",
    "38.172.130.221:999",
    "103.175.202.182:8090",
    "212.252.71.9:8080",
    "43.130.47.163:13001",
    "216.229.112.25:8080",
    "188.117.108.66:80",
    "43.153.32.146:13001",
    "46.203.125.214:12345",
    "159.65.230.46:8888",
    "49.51.184.182:13001",
    "43.153.118.253:13001",
    "1.4.250.70:8080",
    "204.199.140.14:999",
    "96.9.74.91:8080",
    "79.100.2.191:3128",
    "42.114.226.95:10030",
    "49.51.179.77:13001",
    "201.71.137.90:5128",
    "103.174.145.46:82",
    "170.106.173.197:13001",
    "72.10.160.170:28947",
    "47.243.113.74:5555",
    "102.213.223.46:83",
    "43.153.99.175:13001",
    "43.135.185.22:13001",
    "103.187.164.66:8080",
    "49.51.203.51:13001",
    "43.159.129.136:13001",
    "117.74.65.207:80",
    "67.43.236.19:4263",
    "201.204.47.66:5678",
    "49.51.70.77:13001",
    "47.88.18.204:8023",
    "156.67.214.169:3128",
    "60.188.102.225:18080",
    "170.106.110.139:13001",
    "121.234.73.213:9002",
    "67.43.228.250:17399",
    "45.12.254.22:3128",
    "43.135.138.21:13001",
    "43.135.134.89:13001",
    "219.135.102.83:8893",
    "88.247.165.215:41165",
    "227.54.113.126:8080",
    "43.135.136.84:13001",
    "18.163.90.139:8001",
    "202.182.55.44:8080",
    "58.209.32.83:8089",
    "179.61.154.8:8050",
    "170.106.107.101:13001",
    "160.19.18.75:8080",
    "43.135.166.98:13001",
    "188.125.169.100:8080",
    "181.78.84.79:999",
    "104.129.194.43:11035",
    "14.29.236.128:7897",
    "160.19.18.223:7777",
    "189.85.82.38:3128",
    "106.75.226.193:8119",
    "85.117.63.91:8080",
    "43.159.149.150:13001",
    "122.53.43.11:8080",
    "183.240.46.42:80",
    "43.130.2.30:13001",
    "43.153.46.52:13001",
    "38.65.172.193:999",
    "47.90.205.231:33333",
    "45.123.142.100:8181",
    "198.74.51.79:8888",
    "43.130.32.94:13001",
    "218.75.224.4:3309",
    "72.10.164.178:31873",
    "45.61.159.42:3128",
    "45.87.68.8:15321",
    "146.59.202.70:80",
    "43.135.130.88:13001",
    "188.117.108.66:443",
    "182.160.103.220:8090",
    "117.74.65.207:443",
    "45.191.7.249:8080",
    "170.106.170.175:13001",






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
