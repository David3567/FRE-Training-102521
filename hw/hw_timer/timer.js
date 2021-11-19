const View = (() => {
    const domstr = {
        hour: '#hour',
        minute: '#minute',
        second: '#second',
        reset: '#reset',
        start: '#start'
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }

    const createBox = (arr) => {
        let tmp = ``;

        arr.forEach(ele => {
            tmp += `<option>
            ${ele}
            </option>`
        });

        return tmp;
    }

    return {
        domstr,
        render,
        createBox
    };

})();

const Model = (() => {
    const hInterval = [...Array(24).keys()];
    const mInterval = [...Array(60).keys()];
    const sInterval = [...Array(60).keys()];
    let startTimer = null;

    return {
        hInterval,
        mInterval,
        sInterval,
        startTimer
    }
})();

const Controller = ((view, model) => {
    let h = document.querySelector(view.domstr.hour);
    let m = document.querySelector(view.domstr.minute);
    let s = document.querySelector(view.domstr.second);
    let start = document.querySelector(view.domstr.start);
    let reset = document.querySelector(view.domstr.reset);
    view.render(h, view.createBox(model.hInterval));
    view.render(m, view.createBox(model.mInterval));
    view.render(s, view.createBox(model.sInterval));

    const initTimer = () => {
        const run = () => {
            start.innerText = "Pause";
            start.style.backgroundColor = "orange";
            h.disabled = true;
            m.disabled = true;
            s.disabled = true;
        }

        const pause = () => {
            clearInterval(model.startTimer);
            start.innerText = "Start";
            start.style.backgroundColor = "seagreen";
            h.disabled = false;
            m.disabled = false;
            s.disabled = false;
        }
        
        const timer = () => {
            if (s.selectedIndex === 0 && m.selectedIndex === 0 && h.selectedIndex === 0) {
                h.selectedIndex = 0;
                m.selectedIndex = 0;
                s.selectedIndex = 0;
                pause();
            } else if (s.selectedIndex === 0 && m.selectedIndex === 0 && h.selectedIndex !== 0) {
                h.selectedIndex--;
                m.selectedIndex = 59;
                s.selectedIndex = 59;
            } else if (s.selectedIndex === 0 && m.selectedIndex !== 0) {
                m.selectedIndex--;
                s.selectedIndex = 59;
            } else {
                s.selectedIndex--;
            }
        }

        start.addEventListener('click', () => {
            if (start.innerText === "Start") {
                (() => {
                    model.startTimer = setInterval(() => timer(), 1000);
                })();
                run();
            } else {
                pause();
            }
        });

        reset.addEventListener('click', () => {
            h.selectedIndex = 0;
            m.selectedIndex = 0;
            s.selectedIndex = 0;
            pause();
        })
    };

    const init = () => {
        initTimer();
    };

    return {
        init
    };

})(View, Model);

Controller.init();