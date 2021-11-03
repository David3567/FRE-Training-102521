const state = {
   a: "apple",
   b: "banana",
   c: "city",
   d: "dom",
   e: "end",
   f: "forEach"
};
let values = document.getElementById("values")
values.onchange = valuesOnChange;
let letters = document.getElementById("letters")
letters.onchange = lettersOnChange;
function valuesOnChange() {
   letters.value = this.value.charAt(0);
}

function lettersOnChange() {
   values.value = state[this.value];
}
// console.log(document.getElementById("values"))