const TodoAPI = (() => {
    const basurl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos'
    
    const getAllTodos = () => 
        fetch([basurl, todoPath].join('/'))
            .then((response) => response.json());

    return {
        getAllTodos
    }
})();

const View = (() => {
    const elements = {
        todolistContainer: document.querySelector('#todolist__container')
    };
    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }
    const createTheTmp = arr => {
        let tmp = '';
        arr.forEach(ele => {
            tmp += `<li>${ele.title}</li>`
        });
        return tmp;
    }

    return {
        render,
        createTheTmp,
        elements
    }
})();

const Model = ((api) => {

    const getAllTodos = api.getAllTodos;

    return {
        getAllTodos
    }
})(TodoAPI);


const Controler = ((view, model) => {

    const init = () => {
        model.getAllTodos().then(data => {
            const tmp = view.createTheTmp(data);
            view.render(view.elements.todolistContainer, tmp);
        });
    }

    return { init };
})(View, Model);

Controler.init();