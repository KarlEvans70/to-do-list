import "./App.css";
import React, { useState } from "react";
import ToDoLists from "./components/Todo";
import EnterItem from "./components/Input";

export default function App() {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const itemValue = (event) => {
    setItem(event.target.value.trim());
  };

  const ChangeValue = () => {
    if (item !== "") {
      setItemArr([...itemArr, item]);
      setItem("");
    }
  };

  const deleteItem = (id) => {
    console.log("delete");
    setItemArr((preValu) => {
      return preValu.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  const updateItem = (id, editValue) => {
    // console.log(id);
    // console.log(editValue);
    if (editValue !== "") {
      setItemArr((preValu) => {
        preValu[id] = editValue;
        return [...preValu];
      });
    }
  };

  return (
    <>
      <div id="main">
        <div className="center_div">
          <br />
          <h1>To - Do List</h1>
          <br />
          <EnterItem id="task" type="text"
            placeholder="Item to add"
            value={item}
            onChange={itemValue}
          />
          <button id="btn" onClick={ChangeValue}>
            +
          </button>
          <ol>
            {itemArr.map((itemCur, index) => {
              return (
                <ToDoLists
                  className="list"
                  classNameDelete="delete"
                  classNameEdit="edit"
                  key={index}
                  id={index}
                  text={itemCur}
                  onSelect={deleteItem}
                  onEdit={updateItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
      ;
    </>
  );
};