var hours1 = document.querySelector(".hours1");
var min1 = document.querySelector(".min1");
var sec1 = document.querySelector(".sec1");
var hours2 = document.querySelector(".hours2");
var min2 = document.querySelector(".min2");
var sec2 = document.querySelector(".sec2");

var cancel = document.querySelector(".cancel");
var start = document.querySelector(".start");
var control = document.querySelector(".control");

let interval = null;

// add the time to container2
function showContainer2() {
    hours2.textContent = hours1.value;
    min2.textContent = min1.value;
    sec2.textContent = sec1.value;
}

function updateControl() {
    if (interval === null) {
        control.innerHTML = `Resume`;
    } else {
        control.innerHTML = `Pause`;
    }
}

function timer() {
    if (hours2.textContent == 0 && min2.textContent == 0 && sec2.textContent == 0) {
        hours2.textContent = 0;
        min2.textContent = 0;
        sec2.textContent = 0;
    } else if (sec2.textContent != 00) {
        sec2.textContent--;   
    } else if (min2.textContent != 0 && sec2.textContent == 0 ) {
        sec2.textContent = 59;
        min2.textContent--;
    } else if (hours2.textContent != 0 && min2.textContent == 0 && sec2.textContent == 0) {
        min2.textContent = 59;
        sec2.textContent = 59;
        hours2.textContent--;
    }
    return;
}

function startTimer() {
    clearInterval(interval);
    interval = null;
    // don't use let or var at here!!   
    interval = setInterval(() => {    
        timer();
        }, 1000);
    updateControl();
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    updateControl();
}

start.addEventListener('click', () => {
    
    showContainer2();
    startTimer();
    
})

control.addEventListener('click', () => {
    if (interval === null) {
        startTimer();
      } else {
        stopTimer();
      }
})

cancel.addEventListener('click', () => {
    hours2.textContent = 0;
    min2.textContent = 0;
    sec2.textContent = 0;
})
