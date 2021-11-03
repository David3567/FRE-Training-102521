// JS Day4 HW
const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
};

console.log("Object contains: ", state);

// match function to match the targeted event to the selectedIndex
const match = (e, id) => {
  const i = e.target.selectedIndex;
  document.getElementById(id).selectedIndex = i;
};

// On Change of selected index/id, match the index/id to corresponding element
window.onload = () => {
  document.getElementById("letters").addEventListener("change", (e) => {
    match(e, "words");
  });
  document.getElementById("words").addEventListener("change", (e) => {
    match(e, "letters");
  });
};
