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
        <div className="mainapp__left">
          <span>
            rootObject - the object whose animations shall be played by this
            mixer.
          </span>
          <br />
          <span>=========@@@dalmsCKLMSCKLM@@]]]]]]\\</span>
          <p>A|N|I|M|A|T|E</p>
          {/* <div className="mainapp__left__column">
            <p>
              I may not be the biggest fan of hip hop music, but what I am a fan
              of is the amazing artwork that hip hop has to offer. Here is my
              collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer. Here
            </p>
          </div> */}
          <div className="mainapp__left__story">
            <p>
              I may not be the biggest fan of hip hop music, but what I am a fan
              of is the amazing artwork that hip hop has to offer. Here is my
              collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offer. Here
            </p>
            <div className="mainapp__left__verticalLine"></div>
            <div className="mainapp__left__verticalLine1"></div>
            <div className="mainapp__left__verticalLine2"></div>
            <div className="mainapp__left__verticalLine3"></div>
            <div className="mainapp__left__verticalLine4"></div>
            <div className="mainapp__left__verticalLine5"></div>
            <div className="mainapp__left__verticalLine6"></div>
          </div>
        </div>
        <div className="mainapp__right">
          <Taunt />
        </div>
      </div>
      <div className="mainapp1">
        <div className="mainapp1__left">
          <Flair />
        </div>
        <div className="mainapp1__right">
          <p>CODE</p>
        </div>
      </div>
      <div className="mainapp2">
        <div className="mainapp2__left">
          <p>TERMINATOR</p>
        </div>
        <div className="mainapp2__right">
          <Scoop />
        </div>
      </div>
      <div className="mainapp3">
        <div className="mainapp3__left">
          <Walk />
        </div>
        <div className="mainapp3__right">
          <p>EAT 'N SHIT</p>
        </div>
      </div>
    </>
  );
};

export default App;
