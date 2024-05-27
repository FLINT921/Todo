import React, { useState } from "react";

import "./new-task-form.css";

export const NewTaskForm = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleClick = () => {
        onAdd(inputValue);
        setInputValue("");
    };
    return <input className="new-todo" placeholder="What needs to be done?" value={inputValue} onChange={handleChange} onClick={handleClick} autoFocus />;
};
