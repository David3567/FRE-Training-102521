window.onload = () => {
    document.getElementById("box1").addEventListener("change", (event) => {sync(event, "box2");});
    document.getElementById("box2").addEventListener("change", (event) => {sync(event, "box1");});
}

const sync = (event, id) => {
    let index = event.target.selectedIndex;
    document.getElementById(id).selectedIndex = index;
} 