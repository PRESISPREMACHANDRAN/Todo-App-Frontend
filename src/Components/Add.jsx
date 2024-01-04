import React, { useState } from "react";
import Header from "./Header";

const Add = () => {
  const [input, changeInput] = useState({
    todo: "",
    completed: "",
    userId:"",
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }

  const submitValue=()=>{
    console.log(input)
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Todo
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="todo"
                  value={input.todo}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Completed
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="completed"
                  value={input.completed}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  User ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userId"
                  value={input.userId}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success"onClick={submitValue}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
