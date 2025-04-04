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
    "WWW",
    "WY",
    "WYHG",
    "WYNN",
    "X",
    "XAIR",
    "XBIO",
    "XBIT",
    "XBP",
    "XCH",
    "XCUR",
    "XEL",
    "XELA",
    "XELB",
    "XENE",
    "XERS",
    "XFOR",
    "XGN",
    "XHG",
    "XHR",
    "XIFR",
    "XIN",
    "XLO",
    "XMTR",
    "XNCR",
    "XNET",
    "XOM",
    "XOMA",
    "XOS",
    "XP",
    "XPEL",
    "XPER",
    "XPEV",
    "XPO",
    "XPOF",
    "XPON",
    "XPRO",
    "XRAY",
    "XRTX",
    "XRX",
    "XTIA",
    "XTKG",
    "XTLB",
    "XWEL",
    "XXII",
    "XYF",
    "XYL",
    "XYLO",
    "XYZ",
    "YAAS",
    "YALA",
    "YELLQ",
    "YELP",
    "YETI",
    "YEXT",
    "YGFGF",
    "YGMZ",
    "YHC",
    "YHGJ",
    "YHNA",
    "YI",
    "YIBO",
    "YJ",
    "YMAB",
    "YMM",
    "YORW",
    "YOSH",
    "YOTA",
    "YOU",
    "YPF",
    "YQ",
    "YRD",
    "YSG",
    "YSXT",
    "YTRA",
    "YUM",
    "YUMC",
    "YVRLF",
    "YXT",
    "YY",
    "YYAI",
    "YYGH",
    "Z",
    "ZAPP",
    "ZBAI",
    "ZBAO",
    "ZBH",
    "ZBIO",
    "ZBRA",
    "ZCAR",
    "ZCMD",
    "ZD",
    "ZENA",
    "ZENV",
    "ZEO",
    "ZEPP",
    "ZETA",
    "ZEUS",
    "ZEVY",
    "ZG",
    "ZGN",
    "ZH",
    "ZI",
    "ZIM",
    "ZIMV",
    "ZION",
    "ZIP",
    "ZIVO",
    "ZJK",
    "ZJYL",
    "ZK",
    "ZKH",
    "ZKIN",
    "ZLAB",
    "ZLSSF",
    "ZM",
    "ZME",
    "ZNH",
    "ZNTL",
    "ZOOZ",
    "ZPTA",
    "ZS",
    "ZSPC",
    "ZTEK",
    "ZTO",
    "ZTS",
    "ZUMZ",
    "ZURA",
    "ZVIA",
    "ZVRA",
    "ZVSA",
    "ZWS",
    "ZYBT",
    "ZYME",
    "ZYXI"
]



let jsonTickers = {};
let jsonImages = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

//tickers = ["IBM"]



// Proxy list
const proxyList = [

  "49.51.253.252:13001",
  "51.158.105.94:31826",
  "43.153.61.52:13001",
  "43.153.107.246:13001",
  "43.153.27.172:13001",
  "14.29.236.128:7897",
  "114.219.174.24:8089",
  "114.219.102.7:8089",
  "170.106.84.182:13001",
  "170.106.113.58:13001",
  "113.121.251.165:8118",
  "170.106.75.98:13001",
  "27.189.128.140:8089",
  "170.106.199.158:13001",
  "65.49.14.6:3128",
  "114.216.224.158:8089",
  "218.24.16.198:36180",
  "27.66.25.157:10013",
  "43.130.33.67:13001",
  "98.181.137.80:4145",
  "141.11.103.136:8080",
  "170.106.186.103:13001",
  "170.106.195.109:13001",
  "14.204.106.3:8085",
  "49.51.204.163:13001",
  "170.106.158.82:13001",
  "45.140.143.77:18080",
  "43.153.27.33:13001",
  "43.153.33.238:13001",
  "27.189.132.163:8089",
  "43.153.95.171:13001",
  "15.235.10.43:28003",
  "117.74.65.207:80",
  "101.47.43.146:8080",
  "43.130.9.63:13001",
  "117.74.65.207:80",
  "172.167.161.8:8080",
  "8.221.141.88:6443",
  "134.209.29.120:80",
  "170.106.183.233:13001",
  "43.153.45.169:13001",
  "114.224.142.209:8089",
  "43.130.35.202:13001",
  "36.111.205.239:6666",
  "174.77.111.196:4145",
  "113.173.161.245:10068",
  "58.209.137.139:8089",
  "118.99.74.8:8080",
  "1.192.63.168:1644",
  "193.95.53.131:7788",
  "27.189.128.57:8089",
  "67.43.236.18:16997",
  "43.153.69.199:13001",
  "115.72.8.215:10003",
  "114.219.102.5:8089",
  "43.153.98.125:13001",
  "189.22.234.37:80",
  "43.153.88.167:13001",
  "43.135.177.135:13001",
  "123.154.251.157:8085",
  "47.90.167.27:8081",
  "47.90.167.27:6379",
  "43.135.181.48:13001",
  "188.117.108.71:3128",
  "115.72.162.58:10030",
  "49.51.73.96:13001",
  "116.108.21.141:10029",
  "43.153.36.171:13001",
  "170.106.76.17:13001",
  "191.252.204.220:8080",
  "115.72.162.58:10006",
  "188.117.108.71:80",
  "115.72.162.58:10015",
  "4.145.89.88:8080",
  "115.72.8.215:10027",
  "140.227.124.106:3128",
  "200.250.131.218:80",
  "103.165.155.243:2016",
  "115.72.162.58:10027",
  "114.219.174.60:8089",
  "181.188.238.144:999",
  "43.153.99.175:13001",
  "43.135.147.75:13001",
  "27.66.25.157:10043",
  "43.130.35.14:13001",
  "114.219.174.31:8089",
  "67.43.236.19:31261",
  "62.33.53.248:3128",
  "43.153.16.91:13001",
  "185.76.11.211:10597",
  "67.213.212.56:49823",
  "14.247.183.236:8080",
  "43.135.136.212:13001",
  "114.219.102.28:8089",
  "166.141.39.19:11579",
  "122.3.139.85:1080",
  "74.82.60.199:3128",
  "115.76.200.20:30374",
  "171.6.111.12:8080",
  "43.153.91.13:13001",
  "95.37.158.87:7788",
  "47.251.122.81:8888",
  "103.87.81.86:5678",
  "38.152.72.212:2335",
  "121.235.143.252:8089",
  "49.88.62.98:1080",
  "8.212.165.164:41890",
  "188.117.108.67:443",
  "115.72.162.58:10005",
  "43.153.4.125:13001",
  "27.189.131.19:8089",
  "8.217.43.245:8888",
  "222.92.76.4:8083",
  "103.175.202.178:8090",
  "43.153.18.46:13001",
  "49.48.82.28:8080",
  "8.221.141.88:2582",
  "170.246.176.221:3182",
  "43.130.109.92:13001",
  "103.38.104.163:7777",
  "135.148.9.18:25064",
  "170.106.173.107:13001",
  "27.66.25.157:10006",
  "103.227.187.19:6080",
  "114.9.27.246:8080",
  "123.231.230.58:31196",
  "188.117.108.73:3128",
  "114.224.221.58:8089",
  "118.113.246.106:2324",
  "43.135.132.101:13001",
  "170.106.104.64:13001",
  "103.227.187.193:6080",
  "43.153.121.25:13001",
  "170.106.84.6:13001",
  "72.10.160.171:16635",
  "170.106.153.115:13001",
  "188.117.108.67:9401",
  "115.72.162.58:10013",
  "201.174.165.211:999",
  "36.92.44.82:8080",
  "43.153.92.57:13001",
  "170.106.104.171:13001",
  "80.249.112.162:80",
  "114.223.78.121:8089",
  "122.52.185.72:8080",
  "103.165.156.186:8090",
  "43.153.109.164:13001",
  "123.112.240.180:7893",
  "211.234.125.5:443",
  "115.187.31.92:8080",
  "180.114.169.201:8089",
  "103.121.22.192:8080",
  "186.207.148.71:8787",
  "8.211.51.115:8008",
  "170.106.108.142:13001",

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
	
	
    
    
    "43.135.131.121:13001", "15.165.53.36:3128", "170.106.140.154:13001", "43.153.16.149:13001",
    "15.235.10.43:28003", "37.156.46.209:8080", "85.31.54.32:3128", "80.249.112.166:80",
    "5.228.144.64:8081", "27.189.134.81:8089", "91.107.186.37:80", "72.10.160.170:20341",
    "43.135.148.218:13001", "43.153.98.125:13001", "49.51.70.77:13001", "49.51.38.113:13001",
    "97.74.87.226:80", "67.43.227.227:7271", "49.88.62.79:1080", "47.245.117.43:80",
    "61.29.96.146:80", "45.140.143.77:18080", "154.113.172.58:5678", "170.106.117.36:13001",
    "43.153.98.220:13001", "146.56.142.114:1080", "170.106.173.254:13001", "67.43.236.18:17469",
    "219.65.73.81:80", "27.189.131.216:8089", "114.219.174.2:8089", "123.154.104.203:8085",
    "173.212.237.43:58810", "108.181.132.117:43642", "49.88.62.76:1080", "15.235.10.31:28003",
    "72.52.87.199:3128", "43.153.32.146:13001", "120.55.49.231:1337", "103.249.86.48:3128",
    "58.209.137.139:8089", "8.134.139.219:1337", "46.47.197.210:3128", "56.124.116.111:5050",
    "186.113.232.105:8080", "219.135.229.196:7890", "43.153.28.45:13001", "117.80.188.27:8089",
    "89.46.249.252:5080", "49.51.197.116:13001", "91.227.77.207:8080", "49.51.33.115:13001",
    "43.130.2.135:13001", "183.162.197.197:8060", "43.153.94.60:13001", "72.10.160.172:26121",
    "209.126.9.164:36972", "43.153.26.163:13001", "49.51.249.217:13001", "59.37.95.35:8072",
    "197.232.47.122:5678", "91.217.72.126:6855", "89.110.78.230:80", "58.209.137.165:8089",
    "43.135.185.22:13001", "188.117.108.76:80", "31.43.52.216:41890", "126.209.9.30:8080",
    "43.153.45.169:13001", "47.251.43.115:33333", "170.106.74.95:13001", "183.240.46.42:443",
    "177.93.49.203:999", "38.180.2.107:3128", "103.87.81.86:5678", "43.135.130.198:13001",
    "170.106.194.126:13001", "23.28.246.152:8080", "103.165.156.186:8090", "43.130.17.84:13001",
    "197.164.101.14:1976", "43.153.46.52:13001", "63.143.57.115:80", "45.115.113.182:4334",
    "103.38.104.163:7777", "49.51.248.107:13001", "38.152.72.164:2335", "58.243.224.244:8085",
    "98.181.137.80:4145", "123.154.104.204:8085", "142.93.202.130:3128", "190.103.177.131:80",
    "113.223.215.113:8089", "47.250.155.254:9080", "47.243.113.74:5555", "43.153.77.83:13001",
    "177.234.217.83:999", "218.75.224.4:3309", "47.251.87.199:1036", "196.130.0.90:1981",
    "203.19.38.114:1080", "46.161.194.74:8085", "9.163.145.93:3129", "47.251.54.0:6698",
    "103.163.171.201:3265", "47.251.87.199:80", "103.105.57.64:2022", "86.106.132.106:3128",
    "61.186.243.6:9002", "186.96.160.204:999", "103.134.223.144:1111", "209.159.153.22:26513",
    "17.236.170.232:1080", "181.41.218.47:5633", "14.204.56.21:8085", "86.154.204.161:81",
    "182.253.217.42:8008", "49.51.41.61:13001", "202.179.69.216:58080", "121.232.178.138:8089",
    "154.16.214.14:3128", "152.228.154.20:80", "181.209.122.75:999", "47.91.65.23:3128",
    "103.179.246.30:8080", "85.102.10.94:4153", "117.74.65.207:443", "67.43.236.18:14443",
    "103.217.224.49:3125", "154.90.48.76:80", "38.43.150.76:999", "80.249.112.162:80",
    "106.38.26.22:2080", "43.153.103.42:13001", "117.74.65.207:80", "170.106.153.126:13001",
    "43.153.116.85:13001", "181.174.231.30:9992", "92.247.12.136:9510", "202.40.185.145:100",
    "212.31.100.138:4153", "65.49.14.150:3128", "149.34.215.174:3333", "90.52.80.102:8888",
    "85.245.95.58:33333", "124.83.102.56:8082", "167.99.124.118:80", "181.45.78.113:8080",
    "20.27.14.220:8561", "27.189.130.187:8089", "43.135.132.181:13001", "170.106.192.157:13001",
    "180.106.180.217:8089", "188.117.108.76:3128", "212.83.143.211:58399", "103.175.46.218:3125",
    "84.39.112.144:3128", "212.100.65.12:3129", "119.148.55.89:1419", "212.175.61.20:8080",
    "170.106.137.158:13001", "213.131.85.30:1976", "38.152.72.149:2335", "77.83.241.93:55555",
    "39.112.232.27:8080", "36.50.224.27:7777", "170.80.234.145:8080", "143.42.66.91:80",
    "77.243.15.85:3246", "36.93.73.154:8080", "38.156.238.222:999", "43.159.136.60:13001",
    "46.98.184.203:5678", "115.75.99.65:8080", "189.22.234.47:80", "103.46.5.43:3125",
    "103.133.24.11:8080", "94.68.130.242:8080", "38.183.145.61:3125", "49.51.232.89:13001",
    "43.159.138.46:13001", "51.158.105.94:31826", "78.155.218.75:3128", "37.220.83.160:37895",
    "165.16.58.124:8080", "180.191.59.109:8082", "221.231.13.198:1080", "38.183.146.153:8787",
    "200.24.153.7:999", "202.96.46.200:8010", "78.100.212.14:8080", "170.106.100.130:13001",
    "111.72.194.162:2324", "103.160.148.94:8082", "45.64.11.45:8080", "128.199.202.122:8080",
    "213.32.30.21:8080", "202.62.75.17:83", "171.247.151.196:10007", "109.238.12.156:16557",
    "45.224.153.139:999", "38.152.72.249:2335", "188.117.108.72:3128", "117.92.234.164:1080",
    "103.247.13.131:8080", "43.130.32.94:13001", "177.253.227.22:999", "38.45.44.109:999",
    "91.132.56.14:1080", "93.177.126.79:8088", "141.95.238.126:8080", "54.37.214.253:80",
    "115.231.181.40:8128", "182.253.70.2:8080", "13.228.125.72:8888", "82.149.196.90:2080",
    "188.117.108.66:9480", "49.51.203.51:13001", "191.17.60.173:8081", "188.117.108.73:9401",
    "217.76.245.80:999", "47.242.198.40:8080", "43.135.177.23:13001", "23.82.137.157:80",
    "158.101.175.124:5566", "45.129.141.143:3128", "119.15.86.30:8080", "147.78.169.80:8443",
    "189.22.234.37:80", "72.10.160.170:9945", "103.228.243.29:8080", "184.178.172.17:4145",
    "183.214.203.219:8060", "103.19.79.245:999", "132.145.80.120:8080", "188.117.108.67:9480",
    "38.45.32.131:999", "20.222.242.186:3128", "188.117.108.68:9480", "45.71.114.146:999",
    "45.70.202.161:999", "34.76.73.21:80", "120.28.168.238:5050", "95.154.20.113:34248",
    "65.49.2.99:3128", "213.239.221.24:8888", "110.43.221.121:7088", "170.106.73.178:13001",
    "45.87.68.8:15321", "202.62.84.210:53281", "45.3.52.30:9090", "199.116.62.148:9999",
    "110.76.145.22:92", "27.74.192.243:10228", "45.233.169.9:999", "43.153.42.39:13001",
    "177.136.44.193:54443", "113.192.31.69:8080", "181.215.253.112:5001", "189.85.42.52:999",
    "38.152.72.152:2335", "45.188.76.107:999", "49.51.73.74:13001", "101.66.194.144:8085",
    "45.126.124.172:8080", "141.94.195.25:22563", "1.94.31.35:8888", "8.219.97.248:80",
    "103.191.129.245:8020", "103.155.65.1:8181", "43.153.50.230:13001", "120.28.168.177:5050",
    "38.194.246.34:999", "67.43.228.252:24451", "160.30.83.10:83", "47.90.205.231:33333",
    "103.97.140.177:8080", "201.163.219.196:8080", "103.102.153.215:33128", "5.189.190.187:8090",
    "43.129.201.43:443", "49.67.128.138:8089", "38.253.95.57:999", "167.71.250.32:43965",
    "38.162.28.94:3128", "38.156.14.198:999", "170.106.67.179:13001", "172.188.122.92:80",
    "88.200.246.42:7788", "188.117.108.71:9480", "188.117.108.66:80", "74.82.60.99:3128",
    "31.44.91.218:8080", "103.156.233.63:8080", "43.135.164.4:13001", "170.239.18.106:1830",
    "141.11.103.136:8080", "212.252.73.23:8080", "43.153.88.171:13001", "38.172.129.160:999",
    "103.247.23.73:8081",
  
  
  

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
