const data = [
    { region: 'US', model: 'A', sales: 150 },
    { region: 'US', model: 'B', sales: 120 },
    { region: 'US', model: 'C', sales: 350 },
    { region: 'EU', model: 'A', sales: 200 },
    { region: 'EU', model: 'B', sales: 100 },
    { region: 'EU', model: 'C', sales: 250 },
    { region: 'CA', model: 'A', sales: 200 },
    { region: 'CA', model: 'B', sales: 100 },
    { region: 'CA', model: 'C', sales: 230 },
    { region: 'CA', model: 'D', sales: 400 },
];

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);

let row1 = document.createElement("tr");
let heading1 = document.createElement("th");
heading1.innerHTML = "region";
let heading2 = document.createElement("th");
heading2.innerHTML = "model";
let heading3 = document.createElement("th");
heading3.innerHTML = "sales";

row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
thead.appendChild(row1);

// Calculate and store the total sales of each region
const map = new Map();
data.forEach(obj => {
    let region = obj["region"];
    let sales = obj["sales"];
    map.set(region, (map.has(region) ? map.get(region) + sales : sales))
});

// Creating and adding data to rows of the table
let visited = new Set();
data.forEach(obj => {
    // Adding the row of sum
    if (!visited.has(obj["region"])) {
        visited.add(obj["region"]);

        let newRow = document.createElement("tr");
        let newCol1 = document.createElement("td");
        newCol1.innerHTML = obj["region"];
        let newCol2 = document.createElement("td");
        newCol2.innerHTML = "sum";
        let newCol3 = document.createElement("td");
        newCol3.innerHTML = map.get(obj["region"]);

        newRow.appendChild(newCol1);
        newRow.appendChild(newCol2);
        newRow.appendChild(newCol3);
        tbody.appendChild(newRow);
    }

    let newRow = document.createElement("tr");
    let newCol1 = document.createElement("td");
    newCol1.innerHTML = obj["region"];
    let newCol2 = document.createElement("td");
    newCol2.innerHTML = obj["model"];
    let newCol3 = document.createElement("td");
    newCol3.innerHTML = obj["sales"];

    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    tbody.appendChild(newRow);
});
