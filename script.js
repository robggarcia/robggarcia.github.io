/*
This script will return the exact time in milliseconds from when I 
first started coding to this exact moment in time.
*/

// I started preparing to teach Engineering on this date.
const startCoding = new Date('August 1, 2021 03:00:00 GMT+00:00');
let time = 0;
// define a function to claculate the time difference to this exact moment
const timer = () => {
    time = Math.floor(Date.now()-startCoding);
    document.getElementById("time-container").innerHTML = time;
    setTimeout(timer, 300);
}
timer();
