import axios from "axios";
import { useEffect, useState } from "react";

const useToDo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => setTodo(res.data));
  }, [todo]);
  return [todo, setTodo];
};

export default useToDo;
