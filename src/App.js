import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./compoments/TodoForm";
import TodoList from "./compoments/todoList";

function App() {
  const [todos, settodos] = useState([]);
  const [Input, setInput] = useState("");
  const [EditId, setEditId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      settodos(storedList);
    }
  }, []);

  const GetInput = (e) => {
    setInput(e.target.value);
  };

  const AddTodo = (e) => {
    e.preventDefault();
    if (Input !== "" && EditId === "") {
      settodos([
        { id: Math.floor(Math.random() * 10000), text: Input, classs: "" },
        ...todos,
      ]);
      localStorage.setItem(
        "localTasks",
        JSON.stringify([
          { id: Math.floor(Math.random() * 10000), text: Input, classs: "" },
          ...todos,
        ])
      );
    } else {
      const newList = todos.map((todo) => {
        if (todo.id === EditId) {
          return { ...todo, text: Input };
        } else return todo;
      });
      localStorage.setItem("localTasks", JSON.stringify(newList));
      settodos(newList);
    }

    setInput("");
    setEditId("");
  };

  const HandleEdit = (item) => {
    setInput(item.text);
    setEditId(item.id);
  };

  const HandleRemove = (item) => {
    const newlist = todos.filter((l) => l.id !== item.id);
    localStorage.setItem("localTasks", JSON.stringify(newlist));
    settodos(newlist);
  };
  const HandleComplete = (item) => {
    const newList = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, classs: "complete" };
      } else return todo;
    });
    settodos(newList);
    localStorage.setItem("localTasks", JSON.stringify(newList));
  };
  const handleClear = () => {
    settodos([]);
    localStorage.removeItem("localTasks");
  };

  return (
    <div className="todo-app">
      <TodoForm InputValue={Input} GetInput={GetInput} SubmitInput={AddTodo} />
      <TodoList
        todos={todos}
        HandleRemove={HandleRemove}
        HandleEdit={HandleEdit}
        HandleComplete={HandleComplete}
      />
      <>
        {!todos.length ? null : (
          <div>
            <button className="clear" onClick={() => handleClear()}>
              Clear
            </button>
          </div>
        )}
      </>
    </div>
  );
}

export default App;

