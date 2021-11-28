const data = [
    {
        id:1,
        title: 'title 1',
      
    },
    {
        id:2,
        title: 'title 2',
      
    },
    {
        id:3,
        title: 'title 3',
       
    },
    {
        id:4,
        title: 'title 4',
       
    }

];

const getTitles = (data) => {
   let arr = [];
   for (let i = 0; i < data.length; i++) {
   	arr.push(data[i].title);
   }
   let uniqueChars = [...new Set(arr)];
   return uniqueChars;
}
// console.log(getTitles(data));

const createRows = (data) => {
   let tmp = '';
     tmp += ` 
    <input type="checkbox" name="CheckAll" onclick="SelectAll()" />Select all checkbox <br><br>
`;
   // const row = document.querySelector("#rows");
   let movieList = getTitles(data);
   movieList.forEach((ele) => {
      tmp += ` 
    <input type="checkbox" name="CheckBox" value="checkbox2" />${ele}<br>
`;
   });
   return tmp;
};

const rows = document.getElementById('rows');
let html = createRows(data);
console.log(html);
rows.innerHTML = html;


function SelectAll() {
	const form = document.form;
	const checkAll = form.elements['CheckAll']; // element with the name
	const selector = form.elements['CheckBox'];
	for (let i = 0; i < selector.length; i++) {
		if (checkAll.checked == true) {
			selector[i].checked = true; 
		} else {
			selector[i].checked = false; 
		}
	}
}


document.getElementById("btn").onclick = function() {
	ClearAll()
};

function ClearAll() {
	const form = document.form;
	const selector = form.elements['CheckBox'];
	const checkAll = form.elements['CheckAll'];

	for (let i = 0; i < selector.length; i++) {
		selector[i].checked = false;
	}
	checkAll.checked = false;
}







