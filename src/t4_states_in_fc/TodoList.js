import React, { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState(["Learn React", "Build Projects"]);

    const addTask = () => {
        setTasks([...tasks, "New Task"]); // Adding new task
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TodoList;
