const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
};
let myList = document.getElementById("myList");
let myList2 = document.getElementById("myList2");

for (let obj in state) {
  let option = document.createElement("option");
  let option2 = document.createElement("option");
  option.value = state[obj];
  option.text = obj;

  option2.value = state[obj];
  option2.text = state[obj];

  myList.appendChild(option);
  myList2.appendChild(option2);
}

function selectItem() {
  let selectedItemLeft = myList.value;

  Object.entries(state).forEach(([key, value], index) => {
    if (value === selectedItemLeft) {
      document.getElementById("myList2").selectedIndex = index;
    }
  });
}

function selectItem2() {
  let selectedItemRight = myList2.value;

  Object.entries(state).forEach(([key, value], index) => {
    if (value === selectedItemRight) {
      document.getElementById("myList").selectedIndex = index;
    }
  });
}

// for (let obj2 in state) {
//   let option2 = document.createElement("option2");
//   option2.value = obj2;
//   option2.text = state[obj2];

//   myList2.appendChild(option2);
// }

// Object.keys(state).forEach((key) => {
//   console.log(key);s
// });
// Object.keys(state).forEach((value, key, index) => {
//   console.log(`${value}`);
// });

// Object.keys(state).forEach(([key, value], index) => {
//   // console.log(`${key}, ${value}, ${index}`);
//   console.log(`${index}: ${key} ,${value}`);
// });

// Object.entries(state).forEach(([key, value], index) => {
//   console.log(`${index}: ${key} = ${value}`);
// });
