// Get image pixel first
let pixels_;
(async function fetchAndReadPixels() {
    const imageUrl = "https://i.imgur.com/Ur1wEUi.png";  // Replace with your image URL

    try {
        // Fetch the image as a Blob
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error("Failed to fetch image");

        const blob = await response.blob();

        // Convert Blob to an Object URL
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        img.crossOrigin = "Anonymous"; // Prevent CORS issues

        img.onload = function () {
            // Create a temporary canvas
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Set canvas size to match the image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image onto the canvas
            ctx.drawImage(img, 0, 0);

            // Get pixel data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data; // Flat array of RGBA values
            pixels_ = pixels
            console.log(`Image Loaded: ${img.width}x${img.height} pixels`);

            // Log first 10 pixels
            for (let i = 0; i < 40; i += 4) {
                let r = pixels[i];
                let g = pixels[i + 1];
                let b = pixels[i + 2];
                let a = pixels[i + 3];

                console.log(`Pixel ${i / 4}: R=${r}, G=${g}, B=${b}, A=${a}`);
            }
        };
    } catch (error) {
        console.error("Error:", error);
    }
})();




function getDecodedData(raw){
    switch(raw){
        case 0:
            return '0';
        case 1:
            return '1';
        case 2:
            return '2';
        case 3:
            return '3';
        case 4:
            return '4';
        case 5:
            return '5';
        case 6:
            return '6';
        case 7:
            return '7';
        case 8:
            return '8';
        case 8:
            return '8';
        case 9:
            return '9';
        case 10:
            return '.';
        case 11:
            return '-';
        case 12:
            return ',';
        case 13:
            return ';';
        default:
            return ' ';
    }
}

// Start decode
let str = '';
for(let loop = 0;loop< pixels_.length; loop+=4){

    let r = pixels_[loop]
    let g = pixels_[loop+1]
    let b = pixels_[loop+2]
    let value1 = getDecodedData((r & 0xF0) >> 4);
    let value2 = getDecodedData((r & 0x0F) >> 0);
    let value3 = getDecodedData((g & 0xF0) >> 4);
    let value4 = getDecodedData((g & 0x0F) >> 0);
    let value5 = getDecodedData((b & 0xF0) >> 4);
    let value6 = getDecodedData((b & 0x0F) >> 0);
    //console.log(r,g,b);
    //console.log(value1 + value2 + value3 + value4 + value5 + value6);
    str += value1 + value2 + value3 + value4 + value5 + value6;
    //console.log(str);break;
}
