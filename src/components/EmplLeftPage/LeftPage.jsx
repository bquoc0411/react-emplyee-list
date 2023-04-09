import React from "react";
import Header from "../Header";
import List from "./List";

const LeftPage = () => {
  return (
    <div className="col-lg-6 col-md-6">
      <Header icon="" title="Employee Directory" />
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control search-name"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <List />
    </div>
  );
};

export default LeftPage;
