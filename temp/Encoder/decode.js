
function getData(raw){
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
let str = '';
for(let loop = 0;loop< pixels_.length; loop+=4){

    let r = pixels_[loop]
    let g = pixels_[loop+1]
    let b = pixels_[loop+2]
    let value1 = getData((r & 0xF0) >> 4);
    let value2 = getData((r & 0x0F) >> 0);
    let value3 = getData((g & 0xF0) >> 4);
    let value4 = getData((g & 0x0F) >> 0);
    let value5 = getData((b & 0xF0) >> 4);
    let value6 = getData((b & 0x0F) >> 0);
    //console.log(r,g,b);
    //console.log(value1 + value2 + value3 + value4 + value5 + value6);
    str += value1 + value2 + value3 + value4 + value5 + value6;
    //console.log(str);break;
}
