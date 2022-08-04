import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AllCompleted from "./AllCompleted";
import AllPending from "./AllPending";

const Home = () => {
  const navigate = useNavigate();

  const handleAddNowButton = () => {
    navigate("/add");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => toast.warn("To-Do Deleted"));
  };

  const handleUpdateButton = (id) => {
    navigate(`/update/${id}`);
  };

  const handleCompletedRadio = (id) => {
    navigate(`completed/${id}`);
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
        <section className="py-6">
          <AllPending
            handleUpdateButton={handleUpdateButton}
            handleDelete={handleDelete}
            handleCompletedRadio={handleCompletedRadio}
          ></AllPending>
          <AllCompleted
            handleUpdateButton={handleUpdateButton}
            handleDelete={handleDelete}
            handleCompletedRadio={handleCompletedRadio}
          ></AllCompleted>
        </section>
      </div>
    </div>
  );
};

export default Home;
