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



fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo').then(d => d.json()).then(resp => {
    if(!resp['Time Series (Daily)']) {
        console.log(resp)
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
    link.href = canvas.toDataURL('image/png'); // Get PNG data URL of the canvas
    link.download = 'encoded_image.png'; // Set the download file name
    link.click(); // Trigger the download

    console.log(string)
})
