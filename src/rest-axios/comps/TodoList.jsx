import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../services/todo";
import axios from "axios";


const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
    const history = useNavigate();

    useEffect(() => {

        //  axios.get(`https://jsonplaceholder.typicode.com/todos`).then(({data})=>{
        //         setTodos(transformTodos(data));
        //     });

        //-------------------------------

        // fetch("https://jsonplaceholder.typicode.com/todos")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setTodos(transformTodos(data));
        //     })

        //-------------------------------
        //service/todo.js
        getTodos().then((todos) => {
          setTodos(transformTodos(todos));
        });

    }, []);

    const transformTodos = (todos) =>
        todos.map((todo) => {
            return {
                ...todo,
                completed: todo.completed ? "✅" : "⌛",
            };
        });

    const handleClick = (todo) => {
        history(`/todos/${todo.id}`);
    };

    if (!todos.length) {
        return <p className="alert alert-info">Loading...</p>;
    }

    return (
        <div>
            <hr />
            <div className=" mx-auto">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Todo Id</th>
                            <th>Title</th>
                            <th>User</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr onClick={() => handleClick(todo)} key={todo.id}>
                                <td>{todo.id}</td>
                                <td className="hand">{todo.title}</td>
                                <td>{todo.userId}</td>
                                <td>{todo.completed + ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { TodoList };