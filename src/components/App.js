import React, { useState } from "react";
import ToDoItem from "./TodoItem";

function App() {

  const [list, setList] = useState({item: ""});

  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const {name, value} = event.target;

    setList((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function addItem() {
    setListItems((prevValue) => {
      return [...prevValue, list.item];
    });
    setList({item: ""});
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="item" type="text" value={list.item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {listItems.map((item) => (
          <ToDoItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
