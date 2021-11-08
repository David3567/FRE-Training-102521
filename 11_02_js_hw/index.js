const View = (() => {
  const domElements = {
    keys: document.querySelector("#keys"),
    values: document.querySelector("#values"),
  };
  const render = (element, tmp) => {
    element.innerHTML = tmp;
  };
  return {
    domElements,
    render,
  };
})();

const Model = (() => {
  const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
  };
  return {
    state,
  };
})();

const Controller = ((view, model) => {
  const createKeyList = () => {
    let tmp = "";
    Object.keys(model.state).forEach((key) => {
      tmp += `<option value="${key}">${key}</option>`;
    });
    view.render(keys, tmp);
  };
  const createValueList = () => {
    let tmp = "";
    Object.keys(model.state).forEach((key) => {
      tmp += `<option value="${key}">${model.state[key]}</option>`;
    });
    view.render(values, tmp);
  };
  const setUpEvent = () => {
    view.domElements.keys.addEventListener("change", (event) => {
      view.domElements.values.value = event.target.value;
    });
    view.domElements.values.addEventListener("change", (event) => {
      view.domElements.keys.value = event.target.value;
    });
  };
  const init = () => {
    createKeyList();
    createValueList();
    setUpEvent();
  };
  return { init };
})(View, Model);

Controller.init();
