import React from "react";
import LeftPage from "./components/EmplLeftPage/LeftPage";
import RightPage from "./components/EmplRightPage/RightPage";

const App = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <LeftPage />
        <RightPage />
      </div>
    </div>
  );
};

export default App;
