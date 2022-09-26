import axios from "axios";

async function getTodos() {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return data;
}

async function getTodo(id) {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return data;
}

  export { getTodo, getTodos };