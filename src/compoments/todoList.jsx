import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function TodoList(props) {
  return props.todos.map((item) => {
    return (
      <div key={item.id} className={"todo-row " + item.classs}>
        <h3 onClick={() => props.HandleComplete(item)}>{item.text}</h3>

        <div className="icons">
          <TiEdit
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => props.HandleEdit(item)}
          />
          <RiCloseCircleLine
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => props.HandleRemove(item)}
          />
        </div>
      </div>
    );
  });
}

export default TodoList;
