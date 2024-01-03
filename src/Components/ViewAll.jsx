import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [data, changeData] = useState({
    todos: [],
    total: 150,
    skip: 0,
    limit: 30,
  });


  const fetchDta=()=>{
    axios.get("https://dummyjson.com/todos").then(
      (response)=>{
        changeData(response.data)
      }
    )

  }
  useEffect(()=>{fetchDta()},[])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Todo</th>
                      <th scope="col">Completed</th>
                      <th scope="col">UserID</th>
                    </tr>
                  </thead>
                  <tbody>
{
    data.todos.map(
        (value,index)=>{
            return (
              <tr>
                <th scope="row">{value.id}</th>
                <td>{value.todo}</td>
                <td>{value.completed}</td>
                <td>{value.userId}</td>
              </tr>
            );
        }
    )
}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
