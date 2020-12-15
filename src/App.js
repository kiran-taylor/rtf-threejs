import "./App.css";
import React from "react";
import Taunt from "./components/Taunt";
import Walk from "./components/Walk";
import Scoop from "./components/Scoop";
import Flair from "./components/Flair";
import duck from "./ship.glb";
import duckk from "./spin.glb";

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
              not be the biggest to offerHere
            </p>
            <div className="mainapp__left__verticalLine"></div>
            <div className="mainapp__left__verticalLine1"></div>
            <div className="mainapp__left__verticalLine2"></div>
            <div className="mainapp__left__verticalLine3"></div>
          </div>
        </div>
        <div className="mainapp__right">
          <Taunt model={duck} />
        </div>
      </div>
      <div className="flairapp">
        <div className="flairapp__left">
          <Flair />
        </div>
        <div className="flairapp__right">
          <p>REACT-THREE-FIBER</p>
          <div className="flairapp__right__story">
            <p>
              I may not be the biggest fan of hip hop music, but what I am a fan
              of is the amazing artwork that hip hop has to offer. Here is my
              collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offer. Here I may not be the biggest fan of
              hip hop music, but what I am a fan of is the amazing artwork that
              hip hop has to offer. Here is my collec I may not be the biggest
              to offer. Here is my collecthat hip hop has to offer twork that
              hip hop has to offer I may not be the biggest fan of hip hop
              music, but what I am a fan of is the amazing artwork that hip hop
              has to offer. Here is my collec I may not be the biggest to offer.
              HereI may not be the biggest fan of hip hop music, but what I am a
              fan of is the amazing artwork that hip hop has to offer. Here is
              my collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offer. Here
            </p>
          </div>
        </div>
      </div>
      <div className="scoopapp">
        <div className="scoopapp__left">
          <div className="scoopapp__left__p">
            <p>MIXAMO</p>
          </div>
          <div className="scoopapp__left__para">
            <p>
              I may not be the biggest fan of hip hop music, but what I am a fan
              of is the amazing artwork that hip hop has to offer. Here is my
              collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offer. Here I may not be the biggest fan of
              hip hop music, but what I am a fan of is the amazing artwork that
              hip hop has to offer. Here is my collec I may not be the biggest
              to offer. Here is my collecthat hip hop has to offer twork that
              hip hop has to offer I may not be the biggest fan of hip hop
              music, but what I am a fan of is the amazing artwork that hip hop
              has to offer. Here is my collec I may not be the biggest to offer.
              HereI may not be the biggest fan of hip hop music, but what I am a
              fan of is the amazing artwork that hip hop has to offer. Here is
              my collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offer. Here
            </p>
          </div>
        </div>
        <div className="scoopapp__right">
          <Scoop />
          <div className="scoopapp__right__vL"></div>
          <div className="scoopapp__right__vL1"></div>
          <div className="scoopapp__right__vL2"></div>
          <div className="scoopapp__right__vL3"></div>
        </div>
      </div>
      <div className="mainapp3">
        <div className="mainapp3__left">
          <Walk />
        </div>
        <div className="mainapp3__right">
          <p>HTML||5 CSS|3 JAVASCRIPT</p>
          <span>Designed By KIRAN BALAMALYNR</span>

          <div className="flairapp__right__story">
            <p>
              I may notX be the biggest fan of hip hop music, but what I am a
              fan of is the amazing artwork that hip hop has to offer. Here is
              my collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offer. Here I may not be the biggest fan of
              hip hop music, but what I am a fan of is the amazing artwork that
              hip hop has to offer. Here is my collec I may not be the biggest
              to offer. Here is my collecthat hip hop has to offer twork that
              hip hop has to offer I may not be the biggest fan of hip hop
              music, but what I am a fan of is the amazing artwork that hip hop
              has to offer. Here is my collec I may not be the biggest to offer.
              HereI may not be the biggest fan of hip hop music, but what I am a
              fan of is the amazing artwork that hip hop has to offer. Here is
              my collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offer. Here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
