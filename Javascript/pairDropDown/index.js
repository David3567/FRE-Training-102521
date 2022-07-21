// const View = (() => {
//     const domElements = {
//         keys: document.querySelector('#keys'),
//         values: document.querySelector('#values')
//     }
//     const render = (element, tmp) => {
//         element.innerHTML = tmp;
//     }
//     return {
//         domElements,
//         render
//     }
// })();

// const Model = (() => {
//     const state = {
//         a: "apple",
//         b: "banana",
//         c: "city",
//         d: "dom",
//         e: "end",
//         f: "forEach",
//         g: 'gesdrwesf'
//     };

//     return {
//         state
//     }
// })();

// const Controler = ((view, model) => {
//     const createList = () => {
//         let keystmp = '';
//         let valuestmp = '';
//         Object.keys(model.state).forEach(key => {
//             keystmp += `<option value="${key}">${key}</option>`;
//             valuestmp += `<option value="${key}">${model.state[key]}</option>`;
//         });
//         view.render(view.domElements.keys, keystmp);
//         view.render(view.domElements.values, valuestmp);
//     }
//     const setUpEvent = () => {
//         document.addEventListener('change', event => {
//             view.domElements.values.value = event.target.value;
//             view.domElements.keys.value = event.target.value;
//         });
//     }

//     const init = () => {
//         createList();
//         setUpEvent();
//     }
//     return { init };
// })(View, Model);

// Controler.init();

// window.onload = () => {
// 	const select1 = document.getElementById("first");
// 	const select2 = document.getElementById("second");
// 	const Options = {
// 		a: "apple",
// 		b: "banana",
// 		c: "city",
// 		d: "dom",
// 		e: "end",
// 		f: "forEach",
// 		g: "gesdrwesf",
// 	};
// 	for (Option in Options) {
// 		var option = document.createElement("option");
// 		var option2 = document.createElement("option");
// 		option.value = Option;
// 		option2.value = Options[Option];
// 		option.text = Option;
// 		option2.text = Options[Option];
// 		select1.append(option);
// 		select2.append(option2);
// 	}
// 	select1.onchange = (event) => {
// 		select2.value = Options[event.target.value];
// 	};
// };


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));