// ~~~~~~~~~~~~~~~~~~~~~~~~~API~~~~~~~~~~~~~~~~~~~~~~~~~
export const TodoAPI = (() => {
    const basurl = "https://jsonplaceholder.typicode.com";
    const todoPath = "todos";

    const getAllTodos = () =>
        fetch([basurl, todoPath].join("/")).then((response) => response.json());

    const deleteTodo = (id) =>
        fetch([basurl, todoPath, id].join("/"), {
            method: "DETELE",
        });

    const addTodo = newtodo =>
        fetch([basurl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(newtodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })          
            .then((response) => response.json());                                                                                                                                                                                                         

    return {
        getAllTodos,
        deleteTodo,
        addTodo,
    };
})();