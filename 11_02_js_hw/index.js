const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach"
};

const keys = document.querySelector('#keys');
const values = document.querySelector('#values');

console.log(keys, values);

const render = (element, tmp) => {
  element.innerHTML = tmp;
}
const createKeyList = () => {
  let tmp = '';
  Object.keys(state).forEach(key => {
      tmp += `<option value="${key}">${key}</option>`;
  });
  render(keys, tmp);
}
const createValueList = () => {
  let tmp = '';
  Object.keys(state).forEach(key => {
      tmp += `<option value="${key}">${state[key]}</option>`;
  });
  render(values, tmp);
}

createKeyList();
createValueList();

keys.addEventListener('change', event => {
  values.value = event.target.value;
});
values.addEventListener('change', event => {
  keys.value = event.target.value;
});