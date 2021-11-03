// const state= {
//     a: "apple",
//     b: "banana",
//     c: "city",
//     d: "dom",
//     e: "end",
//     f: "forEach"
// };

// const array = Object.values(state);

// const letterElement = document.querySelector("#letters");
// letterElement.addEventListener('change', changeWordHandler);

// const wordElement = document.querySelector("select[name='words']");
// wordElement.addEventListener('change', changeLetterHandler);


// function changeWordHandler(e) {
//     let word = state[e.target.value];
//     let index = array.indexOf(word);
//     wordElement.selectedIndex = index;
// }

// function changeLetterHandler(e) {
//     let word = e.target.value;
//     let index = array.indexOf(word);
//     letterElement.selectedIndex = index;
// }

const data = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};
// get all the values from data
const arr = Object.values(data);

const letterElement = document.querySelector('#letter');
letterElement.addEventListener('change', matchWord);

const wordElement = document.querySelector('#word');
wordElement.addEventListener('change', matchLetter);

function matchWord(input) {
    // use letter find word
    let word = data[input.target.value];
    let index = arr.indexOf(word);
    wordElement.selectedIndex = index;
}
function matchLetter(e) {
    let word = e.target.value;
    let index = arr.indexOf(word);
    letterElement.selectedIndex = index;
}



