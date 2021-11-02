const data = { a: "apple", b: "banana", c: "cat", d: "dean" };
const charList = document.getElementById("charList");
const wordList = document.getElementById("wordList");

charList.addEventListener("change", function (e) {
  console.log(e.target.value);
  wordList.value = data[e.target.value];
});
