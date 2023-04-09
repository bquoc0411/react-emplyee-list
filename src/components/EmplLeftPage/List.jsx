import React from "react";
import arr from "../../EmployeeData";

const List = () => {
  return arr ? (
    <ul className="list-group">
      {arr.map((item) => {
        return (
          <li className="list-group-item employee-group" key={item.id}>
            <div className="d-flex">
              <div className="p-2">
                <img className="employee-img" src={item.src} alt={item.alt} />
              </div>
              <div className="p-2">
                <h3 className="employee-name">{item.name}</h3>
                <p className="employee-job">{item.job}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default List
