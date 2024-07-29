const http = require('http');
const https = require('https');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const fs = require('fs');
const fetch = require('node-fetch');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello asdasdad\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

ffmpeg.setFfmpegPath(ffmpegPath);

const m3u8Url =
  'https://miaopartycdn-hangzhou.lezy.lol/MiaoParty-QQ-1032285-world-H/9c671b8da64850a7d2ebc216db458b5d.m3u8';

function downloadSegment(segmentUrl, index) {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(segmentUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    protocol.get(segmentUrl, (res) => {
      const filePath = `segment${index}.ts`;
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });

      fileStream.on('error', (err) => {
        fs.unlink(filePath);
        reject(err);
      });
    });
  });
}

function downloadM3U8(m3u8Url) {
  const protocol = m3u8Url.startsWith('https') ? https : http;

  protocol
    .get(m3u8Url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', async () => {
        const lines = data.split('\n');
        const segmentUrls = lines.filter(
          (line) => line && !line.startsWith('#')
        );

        for (let i = 0; i < segmentUrls.length; i++) {
          const segmentUrl = segmentUrls[i];
          console.log(`Downloading segment ${i + 1}/${segmentUrls.length}`);
          await downloadSegment(segmentUrl, i);
        }

        combineSegments(segmentUrls.length);
      });
    })
    .on('error', (err) => {
      console.error('Error:', err);
    });
}

function combineSegments(count) {
  const ffmpegCommand = ffmpeg();

  for (let i = 0; i < count; i++) {
    ffmpegCommand.input(`segment${i}.ts`);
  }

  ffmpegCommand
    .on('end', () => {
      console.log('Combining finished!');
      cleanup(count);
    })
    .on('error', (err) => {
      console.error('Error:', err);
    })
    .mergeToFile('output.mp4', './tempDir');
}

function cleanup(count) {
  for (let i = 0; i < count; i++) {
    fs.unlinkSync(`segment${i}.ts`);
  }
}

downloadM3U8(m3u8Url);
