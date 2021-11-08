export const TodoAPI = (() => {
  const baseURL = "http://localhost:3000";
  //const baseURL = "https://jsonplaceholder.typicode.com";
  const todoPath = "todos";

  const getAllTodos = () =>
    fetch([baseURL, todoPath].join("/")).then((response) => response.json());
  //.then((json) => console.log(json))

  const deleteTodo = (id) =>
    fetch([baseURL, todoPath, id].join("/"), {
      method: "DELETE",
    });

  const addTodo = (newTodo) =>
    fetch([baseURL, todoPath].join("/"), {
      method: "POST",
      body: JSON.stringify({
        newTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  //.then((json) => console.log(json));

  return {
    getAllTodos,
    deleteTodo,
    addTodo,
  };
})();
