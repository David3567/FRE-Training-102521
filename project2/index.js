
class ListItem {
    constructor(id, title, isTask, isOverdue, counter) {
      this.id = id;
      this.title = title;
      this.isTask = isTask;
      this.isOverdue = isOverdue;
      this.counter = counter;
    }
  }
  
  const itemArr = [
    new ListItem(1, "Campaign Tasks", true, true, 1),
    new ListItem(2, "Learning", false, false, 14),
    new ListItem(3, "Stories", false, false, 2),
    new ListItem(4, "Sc Task", true, true, 1),
    new ListItem(5, "Portal Surveys", false, false, 2),
    new ListItem(6, "Sport", false, false, 4),
    new ListItem(7, "Sport", true, false, 7),
  ];

// create all task list
function createAllListHTMLTemp(arr) {
    let htmlTmp = "";
    arr.forEach((ele) => {
      htmlTmp += ` <li>
      <input type="checkbox" id="check" name="check" />
      <label for="list1"> ${ele.title}</label>
      <button class="overdue-indicator"><span> ${ele.counter} Overdue</span></button>
      <button class="duesoon-indicator"><span> ${ele.counter} Due Soon</span></button>
      </li>`;
    });
    return htmlTmp;
  }


// create finished list
function createPartListHTMLTemp(arr) {
    let htmlTmp = "";
    arr.forEach((ele) => {
      if (ele.isTask !== true) {
        htmlTmp += ` <li>
        <input type="checkbox" id="check" name="check" />
        <label for="list1"> ${ele.title}</label>
        <button class="overdue-indicator"><span> ${ele.counter} Overdue</span></button>
        <button class="duesoon-indicator"><span> ${ele.counter} Due Soon</span></button>
        </li>`;
      }
    });
    return htmlTmp;
  }

// toggle button
function changeButton(arr) {
    const buttonDueSoon = document.querySelectorAll(".duesoon-indicator");
    const buttonOverdue = document.querySelectorAll(".overdue-indicator");
    buttonDueSoon.forEach((ele, i) => {
      if (arr[i].isOverdue === true) {
        //   console.log("yes");
        buttonOverdue[i].classList.add("display-overdue");
        buttonDueSoon[i].classList.add("hidden");
      } else {
        buttonOverdue[i].classList.add("hidden");
        buttonDueSoon[i].classList.add("display-duesoon");
      }
    });
  }

// make toggle work
let htmlListTmp;
const bottomEle = document.querySelector(".bottom");

const checkbox = document.getElementById("myonoffswitch");
htmlListTmp = createPartListHTMLTemp(itemArr);
bottomEle.innerHTML = htmlListTmp;

function render(checkbox) {
  if (checkbox.checked === true) {
    htmlListTmp = createAllListHTMLTemp(itemArr);
    bottomEle.innerHTML = htmlListTmp;
    changeButton(itemArr);
  } else {
    htmlListTmp = createPartListHTMLTemp(itemArr);
    bottomEle.innerHTML = htmlListTmp;
    changeButton(itemArr);
  }
}

changeButton(itemArr);


// counter part

function createCounterHTMLTmp(arr) {
  let overdueCounter = 0,
   dueSoonCounter = 0,
    all = 0;
  let htmlCounterTmp = "";
  all = arr.length;

  const duesoon = arr
    .filter((item) => item.isOverdue === false)
    .reduce((acc, cur) => (acc += cur.counter), 0);

  console.log(duesoon);
  htmlCounterTmp += `<div class="overdue">
                    <p>${overdueCounter}</p>
  <a class="hover">Overdue</a>
</div>
<div class="due-soon">
  <p>${duesoon}</p>
  <a class="hover">Due Soon</a>
</div>
<div class="all">
  <p>${all}</p>
  <a class="hover">All</a>
</div>`;

  return htmlCounterTmp;
}

//render conter part
let htmlCounterTmp;
const secondEle = document.querySelector(".second");
htmlCounterTmp = createCounterHTMLTmp(itemArr);
secondEle.innerHTML = htmlCounterTmp;
