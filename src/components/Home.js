import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => setTodo(res.data));
  }, []);

  const handleAddNowButton = () => {
    navigate("/add");
  };
  return (
    <div>
      <h2 className="text-center uppercase text-4xl font-semibold text-[#38BDF8]">Available todo's</h2>
      <div>
        <div className="flex justify-around items-center flex-row mt-7 py-4 border border-[#1d4065] rounded">
          <h2>Need to Add more todo's ?</h2>
          <button onClick={handleAddNowButton} class="btn btn-secondary">
            Add now
          </button>
        </div>
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
                      <div class="card-actions justify-around">
                        <button class="btn bg-transparent text-red-700">Delete</button>
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
