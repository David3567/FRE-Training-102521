//import Timer from "./Timer.js";

//new Timer(document.querySelector(".timer"));
const Timer = document.querySelector("#timer");
const View = ((timer) => {
  const domElements = {
    hoursPicker: document.querySelector("#hoursPicker"),
    minutesPicker: document.querySelector("#minutesPicker"),
    secondsPicker: document.querySelector("#secondsPicker"),
    picker: document.querySelector("#picker"),
  };
  const ele = {
    hours: timer.querySelector(".timer__part--hours"),
    minutes: timer.querySelector(".timer__part--minutes"),
    seconds: timer.querySelector(".timer__part--seconds"),
    control: timer.querySelector(".timer__btn--control "),
    reset: timer.querySelector(".timer__btn--reset"),
  };
  const render = (element, tmp) => {
    element.innerHTML = tmp;
  };
  return {
    domElements,
    ele,
    render,
  };
})(Timer);

const Model = (() => {
  const MaxHours = 24;
  const MaxMinutes = 60;
  const MaxSeconds = 60;
  return {
    MaxHours,
    MaxMinutes,
    MaxSeconds,
  };
})();

const Controller = ((view, model) => {
  let interval;
  let remainingSeconds;
  const createList = (n) => {
    let df = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.appendChild(document.createTextNode(i));
      df.appendChild(option);
    }
    return df;
  };
  const createHoursList = () => {
    hoursPicker.appendChild(createList(model.MaxHours));
  };
  const createMinutesList = () => {
    minutesPicker.appendChild(createList(model.MaxMinutes));
  };
  const createSecondsList = () => {
    secondsPicker.appendChild(createList(model.MaxSeconds));
  };

  const updateInterfaceTime = () => {
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = (remainingSeconds % 3600) % 60;
    view.ele.hours.textContent = hours.toString().padStart(2, "0");
    view.ele.minutes.textContent = minutes.toString().padStart(2, "0");
    view.ele.seconds.textContent = seconds.toString().padStart(2, "0");
  };

  const updateInterControls = () => {
    if (interval == null) {
      view.render(
        view.ele.control,
        `<span class="material-icons">
      play_arrow
      </span>`
      );
      view.ele.control.innerHTML = `<span class="material-icons">
      play_arrow
      </span>`;
      view.ele.control.classList.add("timer__btn--start");
      view.ele.control.classList.remove("timer__btn--stop");
    } else {
      view.render(
        view.ele.control,
        `<span class="material-icons">
      pause
      </span>`
      );
      view.ele.control.classList.add("timer__btn--stop");
      view.ele.control.classList.remove("timer__btn--start");
    }
  };
  const start = () => {
    if (remainingSeconds === 0) {
      return;
    }
    interval = setInterval(() => {
      remainingSeconds--;
      updateInterfaceTime();
      if (remainingSeconds === 0) {
        stop();
      }
    }, 1000);
    updateInterControls();
  };

  const stop = () => {
    clearInterval(interval);
    interval = null;
    updateInterControls();
  };

  const setUpEvent = () => {
    view.ele.control.addEventListener("click", () => {
      if (interval === null) {
        start();
      } else {
        stop();
      }
    });
    view.ele.reset.addEventListener("click", () => {
      stop();
      remainingSeconds =
        hoursPicker.value * 3600 +
        minutesPicker.value * 60 +
        secondsPicker.value * 1;
      updateInterfaceTime();
    });
  };

  const init = () => {
    interval = null;
    remainingSeconds = 0;
    createHoursList();
    createMinutesList();
    createSecondsList();
    setUpEvent();
  };
  return { init };
})(View, Model);

Controller.init();
