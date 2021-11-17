export default class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();
    this.ele = {
      hours: root.querySelector(".timer__part--hours"),
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control "),
      reset: root.querySelector(".timer__btn--reset"),
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.ele.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });
    this.ele.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      this.stop();
      this.remainingSeconds = inputMinutes * 60;
      this.updateInterfaceTime();
    });
  }

  updateInterfaceTime() {
    const hours = Math.floor(this.remainingSeconds / 3600);
    const minutes = Math.floor((this.remainingSeconds % 3600) / 60);
    const seconds = (this.remainingSeconds % 3600) % 60;
    this.ele.hours.textContent = hours.toString().padStart(2, "0");
    this.ele.minutes.textContent = minutes.toString().padStart(2, "0");
    this.ele.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterControls() {
    if (this.interval == null) {
      this.ele.control.innerHTML = `<span class="material-icons">
      play_arrow
      </span>`;
      this.ele.control.classList.add("timer__btn--start");
      this.ele.control.classList.remove("timer__btn--stop");
    } else {
      this.ele.control.innerHTML = `<span class="material-icons">
      pause
      </span>`;
      this.ele.control.classList.add("timer__btn--stop");
      this.ele.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) {
      return;
    }
    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterControls();
  }

  stop() {
    clearInterval(this.interval);
    //console.log(this.interval);
    this.interval = null;
    this.updateInterControls();
  }

  static getHTML() {
    return `
      <span class="timer__part timer__part--hours">00</span>
      <span class="timer__part">:</span>
      <span class="timer__part timer__part--minutes">00</span>
      <span class="timer__part">:</span>
      <span class="timer__part timer__part--seconds">00</span>
      <button tyle="button" class="timer__btn timer__btn--control timer__btn--start">
        <span class="material-icons">
          play_arrow
          </span>
      </button>
      <button tyle="button" class="timer__btn timer__btn--reset">
        <span class="material-icons-outlined">
          timer
          </span>
      </button>
    `;
  }
}
