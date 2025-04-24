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
    "2004-01",
    "2004-02",
    "2004-03",
    "2004-04",
    "2004-05",
    "2004-06",
    "2004-07",
    "2004-08",
    "2004-09",
    "2004-10",
    "2004-11",
    "2004-12",
]



let jsonTickers = {};
let jsonImages = {};

const albumId = 'G0DQ6Hk'; // Imgur album ID
const accessToken = 'ffc8fd46eb1f0d2bf28d099af47f421eb574bfa3'; // Imgur access token

//tickers = ["IBM"]



// Proxy list
const proxyList = [


  "http://49.51.200.62:13001",
  "http://43.153.16.91:13001",
  "http://27.189.133.19:8089",
  "http://188.68.52.244:80",
  "http://49.70.190.131:2324",
  "http://43.135.78.162:30004",
  "http://43.153.99.158:13001",
  "http://180.105.184.48:8089",
  "http://43.152.72.76:13001",
  "http://115.231.181.40:8128",
  "http://49.70.172.209:8089",
  "http://170.106.192.56:13001",
  "http://117.5.22.92:5104",
  "http://43.159.152.237:13001",
  "http://119.3.113.151:9094",
  "http://50.116.30.54:80",
  "http://66.201.7.151:3128",
  "http://27.189.133.122:8089",
  "http://180.113.178.17:8089",
  "http://45.236.107.120:999",
  "http://43.153.35.252:13001",
  "http://119.3.113.150:9094",
  "http://27.189.135.12:8089",
  "http://222.189.120.102:8089",
  "http://170.106.150.81:13001",
  "http://183.132.70.47:8085",
  "http://43.153.112.28:13001",
  "http://49.67.129.43:8089",
  "http://40.76.69.94:8080",
  "http://47.236.163.74:8080",
  "http://43.153.88.167:13001",
  "http://95.216.148.196:80",
  "http://38.183.194.132:999",
  "http://49.150.48.207:8082",
  "http://117.81.238.76:8089",
  "http://51.91.109.83:80",
  "http://190.61.45.92:999",
  "http://114.223.91.8:8089",
  "http://222.92.76.4:8083",
  "http://177.234.217.82:999",
  "http://43.153.88.171:13001",
  "http://103.124.137.60:8755",
  "http://72.10.160.171:8559",
  "http://103.67.163.101:10101",
  "http://134.209.29.120:80",
  "http://14.164.129.214:8080",
  "http://43.153.94.8:13001",
  "http://94.23.171.143:50001",
  "http://36.66.130.147:8080",
  "http://103.229.185.154:8080",
  "http://103.157.79.18:3125",
  "http://180.105.128.240:8089",
  "http://185.235.16.12:80",
  "http://170.106.153.160:13001",
  "http://38.65.172.3:999",
  "http://139.59.1.14:80",
  "http://149.28.83.131:8118",
  "http://103.189.197.83:8181",
  "http://72.10.160.170:21143",
  "http://38.7.16.81:999",
  "http://221.227.69.120:8089",
  "http://112.198.128.35:8084",
  "http://198.145.118.51:8080",
  "http://64.227.130.38:3128",
  "http://170.106.197.21:13001",
  "http://103.67.163.43:10144",
  "http://34.126.82.21:8080",
  "http://223.205.126.118:8888",
  "http://103.195.252.2:82",
  "http://180.114.125.40:8089",
  "http://206.189.146.117:3128",
  "http://103.67.163.103:10228",
  "http://168.181.87.26:8080",
  "http://188.166.154.164:8118",
  "http://102.0.10.54:8080",
  "http://113.172.154.115:10089",
  "http://103.173.140.151:1111",
  "http://1.4.201.10:8080",
  "http://103.67.163.109:10148",
  "http://14.225.210.186:3129",
  "http://194.164.49.167:3128",
  "http://181.119.107.110:999",
  "http://27.189.129.129:8089",
  "http://92.255.196.39:8080",
  "http://172.167.161.8:8080",
  "http://170.106.173.107:13001",
  "http://103.217.224.201:8080",
  "http://104.129.194.46:8800",
  "http://36.91.62.47:52978",
  "http://103.75.117.85:80",
  "http://27.189.128.134:8089",
  "http://200.98.200.116:25000",
  "http://103.220.23.213:7777",
  "http://121.230.8.155:1080",
  "http://221.231.13.198:1080",
  "http://103.166.158.33:8080",
  "http://103.213.218.79:12591",
  "http://123.25.234.143:8090",
  "http://170.83.77.9:8080",
  "http://149.86.151.166:8080",
  "http://217.69.201.247:8181",
  "http://103.162.62.125:8090",
  "http://43.135.186.62:13001",
  "http://45.224.150.138:999",
  "http://114.7.162.94:8080",
  "http://103.75.96.70:8080",
  "http://188.166.144.212:8118",
  "http://101.51.130.138:8080",
  "http://180.126.189.121:8089",
  "http://49.70.172.141:8089",
  "http://103.247.13.203:8090",
  "http://179.60.53.28:999",
  "http://49.51.195.196:13001",
  "http://36.37.180.40:8080",
  "http://45.58.240.98:3128",
  "http://103.213.218.9:24926",
  "http://180.127.223.138:8089",
  "http://43.153.101.244:13001",
  "http://176.9.239.181:80",
  "http://103.10.55.137:8664",
  "http://122.54.193.69:8082",
  "http://204.157.250.16:999",
  "http://72.10.160.170:12795",
  "http://222.189.120.59:8089",
  "http://157.15.93.14:8080",
  "http://124.83.121.23:8082",
  "http://8.209.255.13:3128",
  "http://34.48.171.130:33080",
  "http://43.153.34.75:13001",
  "http://43.224.116.125:8080",
  "http://200.174.198.86:8888",
  "http://114.224.205.93:8089",
  "http://185.225.204.5:3128",
  "http://124.83.105.51:8082",
  "http://103.67.163.109:10165",
  "http://103.215.187.66:3127",
  "http://27.124.20.41:3128",
  "http://170.106.84.125:13001",
  "http://27.189.133.212:8089",
  "http://120.28.212.240:5050",
  "http://103.176.96.136:8080",
  "http://193.188.21.69:8118",
  "http://46.47.197.210:3128",
  "http://62.33.53.248:3128",
  "http://189.22.234.34:80",
  "http://103.193.144.107:8080",
  "http://113.172.154.115:10074",
  "http://190.110.34.253:999",
  "http://219.93.111.125:9412",
  "http://170.239.205.185:999",
  "http://119.95.227.135:8082",
  "http://188.132.150.242:8080",
  "http://38.159.63.8:999",
  "http://222.189.120.78:8089",
  "http://160.19.178.45:8080",
  "http://51.91.109.113:8118",
  "http://104.244.78.150:5555",
  "http://185.191.236.162:3128",
  "http://49.71.105.215:3712",
  "http://34.81.72.31:80",
  "http://122.224.124.26:12080",
  "http://117.5.21.34:5109",
  "http://103.165.155.45:8080",
  "http://103.133.27.42:8181",
  "http://181.225.96.137:999",
  "http://79.23.92.18:8081",
  "http://103.178.88.102:8080",
  "http://180.191.51.58:8082",
  "http://103.226.232.164:8099",
  "http://110.171.40.132:8080",
  "http://217.182.150.43:50013",
  "http://202.154.18.172:8085",
  "http://117.81.127.215:8089",
  "http://116.203.7.46:8080",
  "http://104.129.194.43:8800",
  "http://114.223.62.212:2324",
  "http://117.5.21.34:5115",
  "http://47.88.59.79:82",
  "http://45.55.123.126:8080",
  "http://27.189.130.110:8089",
  "http://36.253.18.38:8181",
  "http://180.105.247.148:8089",
  "http://117.81.238.75:8089",
  "http://37.183.102.12:8080",
  "http://43.135.147.140:13001",
  "http://189.22.234.40:80",
  "http://43.135.164.4:13001",
  "http://103.83.97.11:8090",
  "http://188.127.231.248:49160",
  "http://114.231.72.216:8089",
  "http://221.202.27.194:10809",
  "http://67.43.228.253:25555",
  "http://170.106.136.235:13001",
  "http://178.124.197.141:8080",
  "http://59.53.80.122:10024",
  "http://43.153.36.97:13001",
  "http://147.50.230.244:3128",
  "http://45.93.95.123:3002",
  "http://43.153.115.164:13001",
  "http://143.42.66.91:80",
  "http://121.230.9.205:1080",
  "http://3.35.87.209:8888",
  "http://113.160.37.152:53281",
  "http://103.156.248.74:3127",
  "http://43.159.132.166:13001",
  "http://178.153.2.69:8080",
  "http://103.154.226.154:7788",
  "http://72.10.160.170:21939",
  "http://178.251.111.24:8080",
  "http://104.223.103.220:3428",
  "http://67.43.228.251:12137",
  "http://177.234.192.15:999",
  "http://182.253.217.42:8008",
  "http://43.135.162.60:13001",
  "http://49.48.42.2:8080",
  "http://72.10.160.173:8559",
  "http://103.3.246.84:12945",
  "http://189.22.234.44:80",
  "http://193.33.144.87:8080",
  "http://162.223.90.150:80",
  "http://103.156.74.154:8080",
  "http://202.96.46.200:8010",
  "http://49.51.242.247:13001",
  "http://218.98.160.110:12798",
  "http://109.62.213.32:8080",
  "http://103.111.39.85:8080",
  "http://45.225.89.145:999",
  "http://218.77.183.214:5224",
  "http://189.22.234.43:80",
  "http://180.105.103.180:8089",
  "http://13.42.40.94:7777",
  "http://200.41.170.212:11201",
  "http://202.61.204.51:80",
  "http://195.114.209.50:80",
  "http://27.189.128.36:8089",
  "http://202.58.77.170:8081",
  "http://170.106.168.100:13001",
  "http://218.23.15.154:9002",
  "http://157.66.221.222:39218",
  "http://170.106.136.15:13001",
  "http://23.82.137.157:80",
  "http://168.227.40.126:9192",
  "http://34.143.143.61:7777",
  "http://103.82.38.194:8888",
  "http://43.130.12.39:13001",
  "http://189.22.234.37:80",
  "http://180.254.147.89:8080",
  "http://158.101.112.45:8080",
  "http://212.51.157.178:8080",
  "http://118.173.88.101:8080",
  "http://103.56.205.84:8080",
  "http://103.167.170.186:1212",
  "http://221.219.99.76:9000",
  "http://180.126.136.127:8089",
  "http://154.16.146.44:80",
  "http://43.153.62.242:13001",
  "http://165.232.129.150:80",
  "http://85.117.56.41:8080",
  "http://161.35.70.249:80",
  "http://170.106.104.171:13001",
  "http://202.176.1.77:5555",
  "http://117.5.22.92:5114",
  "http://222.213.85.99:9002",
  "http://120.28.195.91:8082",
  "http://27.189.129.202:8089",
  "http://123.154.21.15:8085",
  "http://143.198.42.182:31280",
  "http://180.127.42.43:8089",
  "http://27.189.131.208:8089",
  "http://221.225.66.57:8089",
  "http://121.232.181.171:8089",
  "http://116.105.227.221:8080",
  "http://135.181.154.225:80",
  "http://170.106.114.25:13001",
  "http://190.119.160.29:59842",
  "http://49.51.193.111:13001",
  "http://60.188.102.225:18080",
  "http://103.175.228.142:8080",
  "http://182.253.179.188:3128",
  "http://208.43.38.57:3128",
  "http://38.52.220.171:999",
  "http://83.54.162.141:3128",
  "http://103.133.27.247:8181",
  "http://58.11.14.250:8080",
  "http://45.87.68.18:15321",
  "http://103.67.163.92:10166",
  "http://64.227.134.69:3128",
  "http://217.26.67.57:3180",
  "http://84.36.35.196:1981",
  "http://116.102.104.112:10001",
  "http://186.96.74.140:999",
  "http://59.36.239.108:21133",
  "http://72.10.160.171:4839",
  "http://114.223.42.173:8089",
  "http://103.156.141.218:9090",
  "http://27.189.134.1:8089",
  "http://67.43.236.18:20005",
  "http://180.105.114.2:8089",
  "http://119.3.113.152:9094",
  "http://190.94.213.5:999",
  "http://45.224.149.99:999",
  "http://43.130.44.212:13001",
  "http://77.235.31.24:8080",
  "http://170.106.153.115:13001",
  "http://112.201.191.192:8081",
  "http://42.118.10.48:8080",
  "http://38.156.74.164:8080",
  "http://67.43.228.251:7221",
  "http://45.64.11.105:8080",
  
  
  
  "http://143.42.66.91:80",
  "http://51.15.228.52:8080",
  "http://43.153.45.169:13001",
  "http://139.59.1.14:80",
  "http://170.106.199.158:13001",
  "http://89.213.106.70:999",
  "http://128.140.113.110:8080",
  "http://43.159.142.191:13001",
  "http://113.172.154.115:10085",
  "http://40.76.69.94:8080",
  "http://119.3.113.151:9094",
  "http://38.242.202.236:8080",
  "http://109.93.59.194:8888",
  "http://183.132.70.47:8085",
  "http://154.16.146.47:80",
  "http://118.173.88.101:8080",
  "http://111.1.61.47:3128",
  "http://65.108.203.36:18080",
  "http://83.236.130.215:3128",
  "http://80.249.112.166:80",
  "http://185.255.4.172:2152",
  "http://113.172.154.115:10064",
  "http://89.213.106.253:999",
  "http://103.67.163.43:10199",
  "http://103.180.123.227:3127",
  "http://140.82.8.62:33128",
  "http://189.22.234.33:80",
  "http://123.154.21.15:8085",
  "http://81.169.213.169:8888",
  "http://119.3.113.150:9094",
  "http://92.246.142.20:3128",
  "http://103.36.10.200:3125",
  "http://143.208.57.165:999",
  "http://121.230.8.44:1080",
  "http://47.83.192.255:8888",
  "http://157.66.16.43:8070",
  "http://186.179.103.249:999",
  "http://49.51.191.97:13001",
  "http://49.67.131.206:8089",
  "http://158.255.77.168:80",
  "http://170.106.173.107:13001",
  "http://47.90.205.231:33333",
  "http://103.169.187.75:3125",
  "http://27.124.20.25:3128",
  "http://13.69.159.45:3128",
  "http://113.172.154.115:10080",
  "http://179.1.128.57:999",
  "http://47.236.163.74:8080",
  "http://218.236.166.96:8888",
  "http://38.171.255.28:8080",
  "http://103.152.101.135:8080",
  "http://14.164.129.214:8080",
  "http://20.8.106.178:3128",
  "http://200.6.176.58:9992",
  "http://36.91.166.98:8080",
  "http://103.184.54.70:8080",
  "http://160.20.165.231:8587",
  "http://43.153.1.164:13001",
  "http://103.187.86.24:8183",
  "http://27.124.20.31:3128",
  "http://64.176.5.214:3002",
  "http://202.58.77.77:1111",
  "http://170.106.172.59:13001",
  "http://110.34.8.110:8080",
  "http://39.129.25.66:8060",
  "http://43.153.23.65:13001",
  "http://43.153.22.138:13001",
  "http://102.212.45.41:12354",
  "http://23.82.137.161:80",
  "http://47.56.110.204:8990",
  "http://154.16.146.42:80",
  "http://78.108.41.124:9110",
  "http://8.213.156.191:10000",
  "http://189.22.234.38:80",
  "http://115.231.181.40:8128",
  "http://103.155.196.110:8080",
  "http://182.149.82.103:2324",
  "http://41.33.203.238:1981",
  "http://160.19.18.99:8080",
  "http://221.225.66.57:8089",
  "http://200.98.200.116:25000",
  "http://183.132.62.95:8085",
  "http://103.156.74.157:8080",
  "http://80.85.241.194:3128",
  "http://203.190.44.121:2202",
  "http://138.0.143.120:8080",
  "http://121.101.131.142:8181",
  "http://103.186.204.42:8085",
  "http://202.154.19.63:8083",
  "http://178.63.237.156:80",
  "http://223.204.198.42:8080",
  "http://154.16.146.43:80",
  "http://8.213.156.191:8888",
  "http://103.199.214.48:1009",
  "http://200.24.153.7:999",
  "http://202.65.227.62:8080",
  "http://221.231.13.198:1080",
  "http://77.238.241.245:8118",
  "http://95.31.215.177:8900",
  "http://171.7.136.28:8080",
  "http://183.132.60.136:8085",
  "http://134.90.243.153:8080",
  "http://8.209.255.13:3128",
  "http://147.50.230.244:3128",
  "http://27.189.131.212:8089",
  "http://103.157.64.22:8080",
  "http://170.106.170.3:13001",
  "http://103.48.71.18:83",
  "http://181.233.62.9:999",
  "http://38.7.16.81:999",
  "http://38.191.90.80:999",
  "http://3.111.29.210:3128",
  "http://172.167.161.8:8080",
  "http://150.109.37.211:3128",
  "http://213.97.158.42:3128",
  "http://103.82.134.199:8888",
  "http://103.188.252.162:8080",
  "http://206.189.86.252:22682",
  "http://103.76.91.157:8080",
  "http://49.88.254.143:3328",
  "http://97.74.87.226:80",
  "http://103.67.163.43:10217",
  "http://103.13.204.52:8080",
  "http://83.236.130.212:3128",
  "http://134.35.11.109:8080",
  "http://84.38.185.139:3128",
  "http://168.121.242.66:999",
  "http://113.172.154.115:10037",
  "http://42.200.124.211:8080",
  "http://41.128.183.11:1976",
  "http://65.21.52.41:8888",
  "http://23.82.137.156:80",
  "http://103.146.185.141:1212",
  "http://47.251.122.81:8888",
  "http://46.47.197.210:3128",
  "http://14.225.210.186:3129",
  "http://183.88.231.188:34599",
  "http://185.166.25.206:8080",
  "http://38.147.171.14:80",
  "http://8.242.184.213:999",
  "http://159.89.239.166:18099",
  "http://170.106.81.199:13001",
  "http://114.80.37.90:3081",
  "http://165.232.129.150:80",
  "http://204.199.140.14:999",
  "http://95.84.156.71:1111",
  "http://59.53.80.122:10024",
  "http://103.160.182.103:8080",
  "http://196.251.241.54:8080",
  "http://12.165.234.254:16096",
  "http://164.163.134.226:999",
  "http://92.51.122.174:8080",
  "http://185.255.4.41:8888",
  "http://122.224.124.26:12080",
  "http://103.175.46.55:3125",
  "http://43.135.181.48:13001",
  "http://181.65.191.202:999",
  "http://180.105.247.145:8089",
  "http://103.215.187.67:3127",
  "http://103.254.106.6:6071",
  "http://41.45.242.144:8080",
  "http://27.189.133.53:8089",
  "http://189.22.234.40:80",
  "http://123.186.146.68:8088",
  "http://103.85.157.10:8080",
  "http://20.13.148.109:8080",
  "http://89.40.143.28:7788",
  "http://36.93.10.82:8080",
  "http://190.61.45.71:999",
  "http://154.85.58.149:80",
  "http://221.227.69.120:8089",
  "http://178.251.111.22:8080",
  "http://103.234.124.133:8181",
  "http://38.7.16.83:999",
  "http://219.65.73.81:80",
  "http://103.67.163.111:10228",
  "http://45.5.94.178:3128",
  "http://8.220.205.172:80",
  "http://27.189.132.218:8089",
  "http://113.172.154.115:10029",
  "http://188.132.150.66:8080",
  "http://43.130.15.200:666",
  "http://116.132.0.134:8060",
  "http://113.172.154.115:10016",
  "http://101.231.178.155:7228",
  "http://122.114.8.163:8111",
  "http://8.220.205.172:11",
  "http://195.234.62.100:80",
  "http://208.87.243.199:7878",
  "http://187.172.219.132:999",
  "http://114.115.154.100:6125",
  "http://113.45.194.88:2022",
  "http://8.211.195.173:8008",
  "http://103.184.21.102:8080",
  "http://37.99.155.226:3128",
  "http://8.220.205.172:8080",
  "http://113.172.154.115:10102",
  "http://212.175.61.20:8080",
  "http://207.248.3.61:999",
  "http://103.24.215.170:8081",
  "http://8.211.195.173:8080",
  "http://47.56.110.204:8989",
  "http://182.149.82.3:2324",
  "http://23.82.137.157:80",
  "http://171.5.130.26:8080",
  "http://114.223.91.183:8089",
  "http://186.190.231.196:999",
  "http://154.16.146.45:80",
  "http://185.235.16.12:80",
  "http://138.117.231.133:999",
  "http://193.124.225.217:3128",
  "http://157.20.244.163:1111",
  "http://223.206.184.71:8080",
  "http://51.91.109.83:80",
  "http://20.172.26.251:3128",
  "http://106.12.156.26:80",
  "http://38.54.71.67:80",
  "http://185.191.236.162:3128",
  "http://176.9.239.181:80",
  "http://43.130.57.214:13001",
  "http://124.107.200.213:8081",
  "http://125.27.240.130:8080",
  "http://103.131.19.134:8099",
  "http://198.145.118.52:8080",
  "http://103.67.163.109:10165",
  "http://202.96.46.200:8010",
  "http://54.95.25.15:8080",
  "http://200.106.63.218:999",
  "http://38.194.233.172:1010",
  "http://103.147.77.204:8080",
  "http://27.189.135.119:8089",
  "http://103.191.254.2:8080",
  "http://182.52.159.164:8080",
  "http://43.135.147.75:13001",
  "http://190.97.231.206:999",
  "http://203.19.38.114:1080",
  "http://67.43.236.18:26183",
  "http://34.143.143.61:7777",
  "http://218.98.160.110:12798",
  "http://45.168.237.194:999",
  "http://31.57.228.216:3128",
  "http://47.254.28.155:8081",
  "http://103.1.50.19:3125",
  "http://120.28.195.57:8082",
  "http://218.255.90.106:8002",
  "http://121.232.181.147:8089",
  "http://154.16.146.44:80",
  "http://47.91.65.23:3128",
  "http://143.198.75.24:8888",
  "http://157.66.16.40:8787",
  "http://164.163.134.227:999",
  "http://143.198.42.182:31280",
  "http://132.255.23.183:999",
  "http://117.92.234.189:1080",
  "http://123.154.75.18:8085",
  "http://211.145.45.17:80",
  "http://114.231.72.218:8089",
  "http://85.117.63.37:8080",
  "http://122.185.198.242:7999",
  "http://47.243.113.74:4128",
  "http://27.189.131.93:8089",
  "http://103.9.188.20:8080",
  "http://27.189.130.244:8089",
  "http://43.153.43.120:13001",
  "http://103.180.118.107:7100",
  "http://43.135.186.62:13001",
  "http://168.227.40.76:8084",
  "http://113.172.154.115:10023",
  "http://113.223.214.73:8089",
  "http://190.103.177.131:80",
  "http://189.22.234.43:80",
  "http://45.140.143.77:18080",
  "http://27.54.117.222:4444",
  "http://91.65.103.3:80",
  "http://171.41.129.251:2324",
  "http://103.67.163.98:10103",
  "http://74.226.178.103:3128",
  "http://167.99.236.14:80",
  "http://103.67.163.43:10119",
  "http://222.213.85.99:9002",
  "http://67.43.228.250:29991",
  "http://139.135.189.175:8081",
  "http://163.172.235.236:3131",
  "http://110.16.77.99:8082",
  "http://61.145.250.170:3128",
  "http://45.87.68.7:15321",
  "http://204.157.185.4:999",
  "http://72.10.160.174:8581",
  "http://72.10.160.94:6805",
  "http://200.174.198.86:8888",
  "http://129.226.155.235:8080",
  "http://103.67.163.106:10194",
  "http://114.231.63.98:8888",
  "http://51.254.78.223:80",
  "http://45.224.149.99:999",
  "http://195.154.113.159:3128",
  "http://103.213.218.68:22916",
  "http://212.83.146.39:3128",
  "http://72.10.160.90:20295",
  "http://170.239.18.106:1830",
  "http://47.88.18.204:8023",
  "http://67.43.228.254:19133",
  "http://43.153.113.65:13001",
  "http://78.100.215.158:8080",
  "http://83.212.82.176:3128",
  "http://43.135.154.71:13001",
  "http://162.19.49.131:80",
  "http://49.51.253.252:13001",
  "http://192.145.206.160:8080",
  "http://123.30.154.171:7777",
  "http://37.156.46.209:8080",
  "http://103.148.39.50:82",
  "http://43.135.144.61:13001",
  "http://117.5.22.92:5104",
  "http://113.192.6.190:80",
  "http://43.163.223.20:3128",
  "http://181.119.94.16:999",
  "http://149.34.215.173:3333",
  "http://81.30.196.146:8080",
  "http://198.74.51.79:8888",
  "http://72.10.160.92:27487",
  "http://61.164.204.130:4999",
  "http://200.114.81.219:8080",
  "http://222.189.120.78:8089",
  "http://103.67.163.43:10133",
  "http://103.124.173.101:82",
  "http://14.226.148.194:8080",
  "http://78.187.53.60:8080",
  "http://72.10.160.92:17533",
  "http://194.164.49.167:3128",
  "http://34.94.151.116:3128",
  "http://103.152.239.29:1080",
  "http://162.223.90.150:80",
  "http://103.138.53.30:8080",
  "http://179.43.8.15:8084",
  "http://119.3.113.152:9094",
  "http://67.43.228.250:19193",
  "http://103.67.163.43:10122",
  "http://27.124.20.41:3128",
  "http://112.78.128.169:80",
  "http://135.181.154.225:80",
  "http://91.107.154.214:80",
  "http://167.249.29.218:999",
  "http://47.88.59.79:82",
  "http://45.71.83.217:9191",
  "http://180.105.247.174:8089",
  "http://103.191.196.34:8080",
  "http://186.96.96.132:999",
  "http://147.93.145.197:3128",
  "http://36.94.232.177:3113",
  "http://95.216.148.196:80",
  "http://43.153.4.121:13001",
  "http://110.43.221.121:7088",
  "http://212.129.4.58:3128",
  "http://36.136.27.2:4999",
  "http://222.189.120.117:8089",
  "http://51.159.110.214:3128",
  "http://36.95.39.18:8080",
  "http://103.162.37.125:8080",
  "http://210.77.23.146:7890",
  "http://191.252.204.220:8080",
  "http://178.124.197.141:8080",
  "http://157.66.221.222:39218",
  "http://117.86.6.195:8089",
  "http://103.156.248.240:8085",
  "http://49.67.131.211:1080",
  "http://45.167.95.182:999",
  "http://49.67.128.134:8089",
  "http://36.90.25.188:8080",
  "http://103.82.37.125:8888",
  "http://103.213.218.6:36694",
  "http://103.122.64.150:8080",
  "http://103.233.152.18:8080",
  "http://157.15.51.14:8080",
  "http://154.73.28.79:8080",
  "http://190.103.205.253:9097",
  "http://68.225.17.237:4228",
  "http://111.111.108.141:3128",
  "http://103.189.254.78:2222",
  "http://103.156.16.190:8818",
  "http://185.141.227.216:3128",
  "http://185.215.160.120:65056",
  "http://49.67.128.182:8089",
  "http://103.156.86.131:1080",
  "http://111.132.16.17:3389",
  "http://103.161.69.217:8469",
  "http://176.33.13.54:3310",
  "http://141.98.206.21:1453",
  "http://118.70.16.27:6868",
  "http://78.46.212.196:2033",
  "http://189.124.91.145:7171",
  "http://164.90.242.76:3128",
  "http://46.60.15.62:8080",
  "http://170.245.158.76:8080",
  "http://36.255.86.113:83",
  "http://38.188.100.17:999",
  "http://171.41.128.167:2324",
  "http://36.50.112.145:8080",
  "http://45.191.7.249:8080",
  "http://36.90.24.2:8080",
  "http://5.35.99.100:3128",
  "http://202.10.40.207:8080",
  "http://164.70.95.127:3128",
  "http://111.132.17.123:3389",
  "http://111.72.198.105:2324",
  "http://111.132.16.11:3389",
  "http://103.195.65.139:6000",
  "http://175.158.40.224:2020",
  "http://118.68.114.73:10003",
  "http://177.129.249.170:8080",
  "http://103.159.96.121:8080",
  "http://79.106.231.17:8080",

];


app.get('/image-json', async (req, res) => {
	res.write(JSON.stringify(jsonImages));
	res.end();
});


app.get('/json', async (req, res) => {
	res.write(JSON.stringify(jsonTickers));
	res.end();
});

app.get('/arr', async (req, res) => {
	res.write(JSON.stringify(arr));
	res.end();
});

	let arr = [];

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
