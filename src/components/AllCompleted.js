import React from "react";
import useToDo from "./hooks/useToDo";

const AllCompleted = ({ handleUpdateButton, handleDelete, handleCompletedRadio, _id }) => {
  const [todo] = useToDo();

  return (
    <div>
      <h2 className="md:text-end text-center uppercase text-4xl font-semibold text-[#38BDF8] pt-2">Completed todo's</h2>
      <section className="flex md:flex-row justify-start flex-col py-4">
        {todo &&
          todo.map((item) => {
            const { _id, heading, description, completed, comments } = item;
            return (
              <div key={_id}>
                {completed === "true" && (
                  <div className="card shadow-xl m-3 bg-[#162030]">
                    <div className="card-body">
                      <h2 className="card-title">Heading: {heading}</h2>
                      <p>Description: {description}</p>
                      <small>Comments: {comments}</small>
                      <h3>Completed: {completed}</h3>
                      <div className="card-actions justify-around">
                        <div onClick={() => handleCompletedRadio(_id)} className="cursor-pointer">
                          {completed === "false" ? (
                            <div className="flex justify-start items-center mt-3 mr-2 ">
                              <input type="radio" name="radio-4" className="radio  radio-accent mr-2" />
                              <h3>true</h3>
                            </div>
                          ) : (
                            <div className="flex justify-start items-center mt-3 mr-2  ">
                              <input type="radio" name="radio-4" className="radio  radio-secondary mr-2" />
                              <h3>false</h3>
                            </div>
                          )}
                        </div>
                        <button onClick={() => handleDelete(_id)} className="btn bg-transparent text-red-700">
                          Delete
                        </button>
                        <button onClick={() => handleUpdateButton(_id)} className="btn btn-info">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default AllCompleted;
