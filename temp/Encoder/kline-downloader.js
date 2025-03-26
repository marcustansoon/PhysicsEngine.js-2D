for(let loop = 0; loop < tickers.length; loop++){
    let ticker = tickers[loop]
//tickers.forEach(async ticker => {
     await delay(1000)
    await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=HXJYZL1RNR8YHY6K`).then(d => d.json()).then(async resp => {
        if(!resp['Time Series (Daily)']) {
            console.log(resp)
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
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
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
        let link = document.createElement('a');
        let base64Image = canvas.toDataURL('image/png');
        
        // link.href = canvas.toDataURL('image/png'); // Get PNG data URL of the canvas
        // link.download = ticker + '.png'; // Set the download file name
        // link.click(); // Trigger the download
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
            console.log(`Image uploaded ${ticker} successfully. ID: ${imageId}`)
            let albumR = await addImageToImgurAlbum(imageId, albumId, accessToken);

            if(albumR['success']){
                console.log(`Image Album Added successfully`)
                jsonTickers[ticker] = {
                    "imgur-id": imageId,
                    "ticker": ticker,
                    "type": "daily",
                    "from":arr[arr.length-1]['d'],
                    "to":arr[0]['d'],
                };
            }else{
                console.log(`Added album failed`)
            }
        }else{
            console.log(`Image uploaded failed`)
        }
    })
// })
}
