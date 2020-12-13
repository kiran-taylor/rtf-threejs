import "./App.css";
import React from "react";
import Taunt from "./components/Taunt";
import Walk from "./components/Walk";
import Scoop from "./components/Scoop";
import Flair from "./components/Flair";
const App = () => {
  return (
    <>
      <div className="mainapp">
        <div className="mainapp__left">{/* <p>ANIMATION</p> */}</div>
        <div className="mainapp__right">
          <Taunt />
        </div>
      </div>
      <div className="mainapp1">
        <div className="mainapp1__left">
          <Flair />
        </div>
        <div className="mainapp1__right">{/* <p>ANIMATION</p> */}</div>
      </div>
      <div className="mainapp2">
        <div className="mainapp2__left">{/* <p>ANIMATION</p> */}</div>
        <div className="mainapp2__right">
          <Scoop />
        </div>
      </div>
      <div className="mainapp3">
        <div className="mainapp3__left">
          <Walk />
        </div>
        <div className="mainapp3__right">{/* <p>ANIMATION</p> */}</div>
      </div>
    </>
  );
};

export default App;
