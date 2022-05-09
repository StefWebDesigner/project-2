import React from "react";
import "./Music.css";
import Music from "./Music";
import ExperimentalNav from "../navbar/ExperimentalNav";

const MusicChannel = () => {
  return (
    <div className="Music">
        <ExperimentalNav />
      <h1>Music Channel</h1>
      <Music embedId="8kP_HgwOxoA" />
    </div>
  );
};

export default MusicChannel;