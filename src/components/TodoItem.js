import React, { useState } from "react";

function ToDoItem (props) {

    const [stroke, setStroke] = useState(false);

    function handleStroke() {
        setStroke((prevValue) => {
            return !prevValue;
        });
    }
    return (
        <li 
            onClick={handleStroke}
            style={{textDecoration: stroke && "line-through"}}    
        >{props.text}</li>
    )
}

export default ToDoItem;