import axios from "axios";
import { useEffect, useState } from "react";

const useToDo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://young-plains-97381.herokuapp.com").then((res) => setTodo(res.data));
  }, [todo]);
  return [todo, setTodo];
};

export default useToDo;
