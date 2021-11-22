const View = (() => {
    const elements = {
        hourElement: document.querySelector('.hour'),
        minElement: document.querySelector('.min'),
        secElement: document.querySelector('.sec'),

        hourlist: document.querySelector('.hour__list'),
        minlist: document.querySelector('.min__list'),
        seclist: document.querySelector('.sec__list'),

        cancelbtn: document.querySelector('#cancel_btn'),
        startbtn: document.querySelector('#start_btn'),
        resumebtn: document.querySelector('#resume_btn'),
        pausebtn: document.querySelector('#pause_btn'),

        timerSelector: document.querySelector('.timer__selector'),
        timerCountDown: document.querySelector('.timer__countdown'),
    }

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }
    const generateTmp = (arr) => {
        let tmp = '';
        arr.forEach(ele => {
            tmp += `<div style="height:15px">${ele}</div>`
        });
        return tmp;
    }
    return {
        render,
        generateTmp,
        elements
    }
})();

const Model = ((view) => {
    let [inithour, initsec] = [0, 0];
    const hourlist = (new Array(24).fill('')).map(_ =>
        inithour < 10 ? '0' + (inithour++) : '' + (inithour++));
    const minsedlist = (new Array(60).fill('')).map(_ =>
        initsec < 10 ? '0' + (initsec++) : '' + (initsec++));

    class Timer {
        #total = 0;
        set total(totaltime) {
            this.#total = totaltime;
        }
        get total() {
            return this.#total;
        }
        countdown() {
            if (this.#total > 0) {
                this.#total--;
                this.triggerRender();
            }
        }
        triggerRender() {
            const countdown = document.querySelector('#countdown');
            const sh = this.#formatTimer(Math.floor(this.#total / 60 / 60));
            const sm = this.#formatTimer(Math.floor(this.#total / 60) % 60);
            const ss = this.#formatTimer(this.#total % 60);

            countdown.innerHTML = `${sh} : ${sm} : ${ss}`;
        }
        getAndRenderExpectedTime() {
            console.log(new Date().getHours());
        }
        #formatTimer(num) {
            return num < 10 ? '0' + num : num;
        }
    }

    const checkTimer = (ele1, ele2, arr) => {
        let [d, tmp] = [0, view.generateTmp(arr)];

        ele1.addEventListener('wheel', (event) => {
            if (event.deltaY < 0 && d < 0)
                d += 1.5;
            else if (d > -(15 * arr.length) + 15)
                d -= 1.5;

            if (d % 15 === 0) {
                ele2.style.top = `${d}px`;
                event.preventDefault();
                audio.play();
                view.render(ele2, tmp);
            }
        });
    }
    return {
        hourlist,
        minsedlist,
        checkTimer,
        Timer
    }
})(View);

const Controler = ((view, model) => {
    const hourtmp = view.generateTmp(model.hourlist);
    const mintmp = view.generateTmp(model.minsedlist);
    const sectmp = view.generateTmp(model.minsedlist);

    view.render(view.elements.hourlist, hourtmp);
    view.render(view.elements.minlist, mintmp);
    view.render(view.elements.seclist, sectmp);

    const timer = new model.Timer();
    let intervalRef = '';

    const start = () => {
        view.elements.startbtn.addEventListener('click', () => {
            // count the selected time
            const h = view.elements.hourlist.style.top === ''
                ? 0 : Math.abs(Math.floor(parseInt(view.elements.hourlist.style.top) / 15));
            const m = view.elements.minlist.style.top === ''
                ? 0 : Math.abs(Math.floor(parseInt(view.elements.minlist.style.top) / 15));
            const s = view.elements.seclist.style.top === ''
                ? 0 : Math.abs(Math.floor(parseInt(view.elements.seclist.style.top) / 15));
            // count timer
            const total = h * 60 * 60 + m * 60 + s;
            timer.total = total;

            timer.getAndRenderExpectedTime();
            // timer render
            timer.triggerRender();
            intervalRef = setInterval(() => {
                timer.countdown();
            }, 1000);
            // buttons control
            view.elements.startbtn.style.display = 'none';
            view.elements.pausebtn.style.display = 'inline-block';
            view.elements.cancelbtn.disabled = false;
            // flip control
            view.elements.timerCountDown.style.transform = 'rotateY(0deg)';
            view.elements.timerSelector.style.transform = 'rotateY(180deg)';
        });
    }
    const cancel = () => {
        view.elements.cancelbtn.addEventListener('click', () => {
            view.elements.hourlist.style.top = '0';
            view.elements.minlist.style.top = '0';
            view.elements.seclist.style.top = '0';

            view.elements.startbtn.style.display = 'inline-block';
            view.elements.pausebtn.style.display = 'none';
            view.elements.resumebtn.style.display = 'none';
            view.elements.cancelbtn.disabled = true;

            view.elements.timerSelector.style.transform = 'rotateY(0deg)';
            view.elements.timerCountDown.style.transform = 'rotateY(180deg)';

            clearInterval(intervalRef);
            timer.total = 0;
            timer.triggerRender();
        });
    }
    const resume = () => {
        view.elements.resumebtn.addEventListener('click', () => {
            view.elements.pausebtn.style.display = 'inline-block';
            view.elements.resumebtn.style.display = 'none';

            intervalRef = setInterval(() => {
                timer.countdown();
            }, 1000);
        });
    }
    const pause = () => {
        view.elements.pausebtn.addEventListener('click', () => {
            view.elements.pausebtn.style.display = 'none';
            view.elements.resumebtn.style.display = 'inline-block';

            clearInterval(intervalRef);
        });
    }
    const init = () => {
        model.checkTimer(view.elements.hourElement, view.elements.hourlist, model.hourlist);
        model.checkTimer(view.elements.minElement, view.elements.minlist, model.minsedlist);
        model.checkTimer(view.elements.secElement, view.elements.seclist, model.minsedlist);

        start(); cancel(); resume(); pause();
    }
    return { init };
})(View, Model);

Controler.init();
