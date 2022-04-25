const View = (() => {
    const domElements = {
        keys: document.querySelector('#keys'),
        values: document.querySelector('#values')
    }
    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }
    return {
        domElements,
        render
    }
})();

const Model = (() => {
    const state = {
        a: "apple",
        b: "banana",
        c: "city",
        d: "dom",
        e: "end",
        f: "forEach"
    };

    return {
        state
    }
})();

const Controler = ((view, model) => {
    const createList = () => {
        let keystmp = '';
        let valuestmp = '';
        Object.keys(model.state).forEach(key => {
            keystmp += `<option value="${key}">${key}</option>`;
            valuestmp += `<option value="${key}">${model.state[key]}</option>`;
        });
        view.render(view.domElements.keys, keystmp);
        view.render(view.domElements.values, valuestmp);
    }
    const setUpEvent = () => {
        document.addEventListener('change', event => {
            view.domElements.values.value = event.target.value;
            view.domElements.keys.value = event.target.value;
        });
    }

    const init = () => {
        createList();
        setUpEvent();
    }
    return { init };
})(View, Model);

Controler.init();
