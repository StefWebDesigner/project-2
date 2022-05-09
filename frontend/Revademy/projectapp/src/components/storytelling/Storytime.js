import React from "react";
import "./Storytime.css";
import Storytelling from "./Storytelling";
import ExperimentalNav from "../navbar/ExperimentalNav";

const Storytime = () => {
  return (
    <div className="Story">
        <ExperimentalNav />
      <h1>Storytime Channel</h1>
      <Storytelling embedId="-BbUqPuMyQ8" />
    </div>
  );
};

export default Storytime;