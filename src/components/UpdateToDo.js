import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateToDo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedData = {
      heading: e.target.heading.value,
      description: e.target.description.value,
      completed: e.target.completed.value,
      comments: e.target.comments.value,
    };

    fetch(`https://young-plains-97381.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Updated success");
        navigate("/");
      });
  };

  const handleEscButton = () => {
    navigate("/");
  };
  return (
    <div>
      <h2 className="text-center uppercase text-4xl font-semibold text-[#38BDF8]">Update todo's</h2>
      <div className="border border-gray-700 bg-slate-300 p-6 rounded-lg shadow-lg mt-12 md:w-1/2 mx-auto text-slate-900">
        <form onSubmit={handleUpdate}>
          <label className="flex items-end justify-start">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 w-48 md:w-52">
              Heading
            </span>
            <input
              type="text"
              name="heading"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 w-full "
              placeholder="To-Do Heading"
              required
            />
          </label>
          <label className="flex items-end justify-start">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 w-48 md:w-52">
              Description
            </span>
            <input
              type="text"
              name="description"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 w-full "
              placeholder="To-Do Description"
              required
            />
          </label>
          <label className="flex items-end justify-start">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 w-48 md:w-52">
              Completed
            </span>
            <select
              name="completed"
              id="completed"
              className="mt-1 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 w-full"
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </label>

          <label className="flex items-end justify-start">
            <span className="text-sm font-medium text-slate-700 w-48 md:w-52">Comments</span>
            <input
              type="text"
              name="comments"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 w-full "
              placeholder="Enter Comments"
            />
          </label>
          <div className="flex justify-end py-9 md:w-4/5">
            <button
              onClick={handleEscButton}
              className="text-sm px-6 py-2 uppercase  text-center rounded-lg text-red-500 mr-12 border border-red-300"
            >
              <span>cancel</span>
              <span className="flex items-center">(esc)</span>
            </button>
            <button
              type="submit"
              className="text-sm bg-[#599636] px-6 py-2 uppercase  text-center font-semibold rounded-lg text-white"
            >
              <span>submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToDo;
