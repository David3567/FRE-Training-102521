import { TodoAPI } from './api.js';

// ~~~~~~~~~~~~~~~~~~~~~~~~~View~~~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        todolistContainer: '#todolist__container',
        deletebtns: '.delete_btn',
        todolistinput: '.todolist__input'
    };
    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }
    const createTheTmp = arr => {
        let tmp = '';
        arr.forEach(ele => {
            tmp += `<li>
                <span>
                    ${ele.title}
                </span>
                <button class="delete_btn" id="${ele.id}">
                    X
                </button>
            </li>`
        });
        return tmp;
    }

    return {
        render,
        createTheTmp,
        domstr
    }
})();
// ~~~~~~~~~~~~~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {

    class Todo {
        constructor(title) {
            this.userId = 22;
            this.title = title;
            this.completed = false;
        }
    }
    class State {
        #todolist = [];
        constructor() { }

        get todolist() {
            return this.#todolist;
        }
        set todolist(newarr) {
            this.#todolist = newarr;

            const tmp = view.createTheTmp(this.#todolist);
            const element = document.querySelector(view.domstr.todolistContainer);
            view.render(element, tmp);
        }
    }

    const getAllTodos = api.getAllTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    return {
        getAllTodos,
        deleteTodo,
        addTodo,
        State,
        Todo
    }
})(TodoAPI, View);
// ~~~~~~~~~~~~~~~~~~~~~~~~~Controler~~~~~~~~~~~~~~~~~~~~~~~~~
const Controler = ((view, model) => {
    const state = new model.State();

    const addTodo = () => {
        const input = document.querySelector(view.domstr.todolistinput);
        input.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                const newtodo = new model.Todo(event.target.value);
                model.addTodo(newtodo).then(todo => {
                    state.todolist = [todo, ...state.todolist];
                });
                event.target.value = '';
            }
        });
    }

    const deletTodo = () => {
        const todolistContainer = document.querySelector(view.domstr.todolistContainer);
        todolistContainer.addEventListener('click', event => {
            console.log(event.target.id);
            state.todolist = state.todolist.filter(ele => +ele.id !== +event.target.id);
            model.deleteTodo(event.target.id);
        });
    }

    const inittodolist = () => {
        model.getAllTodos().then(todolist => {
            state.todolist = todolist;
        });
    }

    const init = () => {
        inittodolist();
        deletTodo();
        addTodo();
    }

    return { init };
})(View, Model);

Controler.init();
