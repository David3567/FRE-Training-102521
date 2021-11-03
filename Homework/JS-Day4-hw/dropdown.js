const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

const array = Object.values(state);

const letterElement = document.querySelector("select[name='letters']");
letterElement.addEventListener('change', changeWordHandler);

const wordElement = document.querySelector("select[name='words']");
wordElement.addEventListener('change', changeLetterHandler);


function changeWordHandler(e) {
    let word = state[e.target.value];
    let index = array.indexOf(word);
    wordElement.selectedIndex = index;
}

function changeLetterHandler(e) {
    let word = e.target.value;
    let index = array.indexOf(word);
    letterElement.selectedIndex = index;
}