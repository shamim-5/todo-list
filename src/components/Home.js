import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => setTodo(res.data));
  }, [todo]);

  const handleAddNowButton = () => {
    navigate("/add");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleUpdateButton = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <div>
      <h2 className="text-center uppercase text-4xl font-semibold text-[#38BDF8]">Available todo's</h2>
      <div>
        <div className="flex justify-around items-center flex-row mt-7 py-4 border border-[#1d4065] rounded">
          <h2>Need to Add more todo's ?</h2>
          <button onClick={handleAddNowButton} className="btn btn-secondary">
            Add now
          </button>
        </div>
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-4 py-12">
          {todo &&
            todo.map((item) => {
              const { _id, heading, description, completed, comments } = item;
              return (
                <div key={_id}>
                  <div className="card shadow-xl bg-[#162030]">
                    <div className="card-body">
                      <h2 className="card-title">Heading: {heading}</h2>
                      <p>Description: {description}</p>
                      <small>Comments: {comments}</small>
                      <h3>Completed: {completed}</h3>
                      <div className="card-actions justify-around">
                        <button onClick={() => handleDelete(_id)} className="btn bg-transparent text-red-700">
                          Delete
                        </button>
                        <button onClick={() => handleUpdateButton(_id)} className="btn btn-info">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default Home;
