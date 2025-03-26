// server.js
const express = require('express');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

const app = express();
app.use(express.json());

//const proxy = 'http://halusngj:iqii2z5mv1ke@38.154.227.167:5868';

const agent = new HttpsProxyAgent(proxy);

app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  try {
    const response = await fetch(targetUrl, { agent });
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
