const loadtext = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
//step 1 set a variable to reflect the loading from 0  to 100
let load = 0;
//step 2 set the interval for the blurring function
let int = setInterval(blurring, 30);
//step 3 call blurring function
function blurring() {
    load++;

    if(load > 99){
        clearInterval(int);
    }

    //step 5 manuiplate the style using DOM
    loadtext.innerHTML = `${load}%`;
    loadtext.style.opacity = scale(load, 0, 100, 1 , 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    //console.log(load);
}

//step 4 mapping a range of number to another range of number
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}