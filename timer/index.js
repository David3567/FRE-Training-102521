const timerBar = document.getElementById("timeBar");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countDownOutput = document.getElementById("demo");
const count = document.getElementById("count");

const View = (() => {
  const domElements = {
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
  };

  const render = (element, template) => {
    element.innerHTML = template;
  };
  return {
    domElements,
    render,
  };
})();



const Controller = ((view, model) => {
  const createHourList = () => {
    let tmp = `<option value="" class="scroll-page">  </option>`;
    for (let i = 0; i < 24; i++) {
      tmp += `<option value="${i}" class="scroll-page">${i}</option>`;
    }
    view.render(hours, tmp);
  };

  const createMinutesList = () => {
    let tmp = `<option value="" class="scroll-page">  </option>`;
    for (let i = 0; i < 60; i++) {
      tmp += `<option value="${i}" class="scroll-page">${i}</option>`;
    }
    view.render(minutes, tmp);
  };
  const createSecondsList = () => {
    let tmp = `<option value="" class="scroll-page">  </option>`;
    for (let i = 0; i < 60; i++) {
      tmp += `<option value="${i}" class="scroll-page">${i}</option>`;
    }
    view.render(seconds, tmp);
  };

  hours.addEventListener("change", (event) => {
    hours.value = event.target.value;
    console.log("selected hours" + hours.value);
  });
  minutes.addEventListener("change", (event) => {
    minutes.value = event.target.value;
    console.log("selected minutes" + minutes.value);
  });
  seconds.addEventListener("change", (event) => {
    seconds.value = event.target.value;
    console.log("selected seconds" + seconds.value);
  });

  const init = () => {
    createHourList();
    createMinutesList();
    createSecondsList();
  };
  return {
    init,
  };
})(View);

Controller.init();


const start = document.getElementById("start");
const cancel = document.getElementById("cancel");

let tick;
let hour = 0;
let minute = 0;
let second = 0;
let settedTime = 0;
const clickStart = (e) => {
  let starting;
  if (start.innerHTML === "Start" || start.innerHTML === "Resume") {
    console.log("hour" + hour);
    console.log("minute" + minute);
    console.log("second" + second);
    
    if (hour === 0 && minute === 0 && second === 0) {
      starting = true;
      settedTime =
        parseInt(hours.value * 3600) +
        parseInt(minutes.value * 60) +
        parseInt(seconds.value);
        if(isNaN(settedTime)){
          return;
        }
      start.innerHTML = "Pause";
      startTimer(settedTime);
    } else {
      settedTime =
        parseInt(hour * 3600) + parseInt(minute * 60) + parseInt(second);
        if(isNaN(settedTime)){
          return;
        }
        start.innerHTML = "Pause";
        startTimer(settedTime);
    }
  } else {
    starting = false;
    start.innerHTML = "Resume";
    clearInterval(tick);
  }
};

function startTimer(duration) {
  let timer = duration;
  tick = setInterval(() => {
    hour = parseInt(timer / 3600, 10);
    minute = parseInt(hour === 0 ? timer / 60 : (timer - hour * 3600) / 60, 10);
    second = parseInt(timer % 60, 10);

    hour = hour < 1 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    countDownOutput.style.display="block";
    count.innerHTML = hour + " h " + minute + " m " + second + " s ";

    console.log("duration " + duration);
    if (--timer < 0) {
      timer = duration;
      start.innerHTML = "Start";
      clearInterval(tick);
    }
  }, 1000);
}
const clickCancel = (e) => {
  clearInterval(tick);
  countDownOutput.style.display="none";
  hour = 0;
  minute = 0;
  second = 0;
  if ((start.innerHTML = "Pause")) {
    start.innerHTML = "Start";
  }

  count.innerHTML = "00" + " h " + "00" + " m " + "00" + " s ";
};
