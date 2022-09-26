import "../App.css";
import { Navbar } from "./comps/Navbar";
import { TodoList } from "./comps/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoDetails } from "./comps/TodoDetails";


function AxiosTodo() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />} >
    <Route index element={<TodoList />} />

    <Route path="/todos/:id" element={<TodoDetails/>} />
        </Route>

    </Routes>
     
   
    </BrowserRouter>
  );
}

export default AxiosTodo;