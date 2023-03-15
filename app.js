
// 2023-03-13 07:15:00: {1. open: '125.7100', 2. high: '125.7100', 3. low: '125.7100', 4. close: '125.7100', 5. volume: '335'}

const date = new Date();
const time = date.toUTCString().slice(-12, -4);
console.log(time);// outputs something like "09:35:00"
let minuteGmt = time.slice( 3,-3) 
console.log(minuteGmt);

let editedGMTmin
if(minuteGmt<=4) {editedGMTmin = 0}
if((minuteGmt%5)===0) {editedGMTmin = minuteGmt}
if((minuteGmt%5) != 0){editedGMTmin=minuteGmt-(minuteGmt%5)}


const timeSer = `${date.toUTCString().slice(-12,-10)}:${editedGMTmin}:00`
console.log(timeSer);
