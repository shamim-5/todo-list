import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => setTodo(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-center uppercase text-4xl font-semibold text-[#38BDF8]">Available todos</h2>
      <div>
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-4 py-12">
          {todo &&
            todo.map((item) => {
              const { _id, heading, description, completed, comments } = item;
              return (
                <>
                  <div class="card shadow-xl bg-[#162030]">
                    <div class="card-body">
                      <h2 class="card-title">{heading}</h2>
                      <p>{description}</p>
                      <small>{comments}</small>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Mark as complete</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default Home;
