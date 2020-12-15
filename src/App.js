import "./App.css";
import React from "react";
import Character from "./components/Character";
import skin1 from "./skin/skin1.glb";
import skin2 from "./skin/skin2.glb";
import skin3 from "./skin/skin3.glb";
import skin4 from "./skin/skin4.glb";

const App = () => {
  return (
    <>
      <div className="mainapp1">
        <div className="mainapp1__left">
          <span>
            rootObject - the object whose animations shall be played by this
            mixer.
          </span>
          <br />
          <span>=========@@@@@@@@@@@MMMMMMMM</span>
          <p>A|N|I|M|A|T|E</p>
          <div className="mainapp1__left__story">
            <p>
              I may not be the biggest fan of hip hop music, but what I am a fan
              of is the amazing artwork that hip hop has to offer. Here is my
              collec I may not be the biggest to offer. Here is my collecthat
              hip hop has to offer twork that hip hop has to offer I may not be
              the biggest fan of hip hop music, but what I am a fan of is the
              amazing artwork that hip hop has to offer. Here is my collec I may
              not be the biggest to offerHere
            </p>
            <div className="mainapp1__left__verticalLine"></div>
            <div className="mainapp1__left__verticalLine1"></div>
            <div className="mainapp1__left__verticalLine2"></div>
            <div className="mainapp1__left__verticalLine3"></div>
          </div>
        </div>
        <div className="mainapp1__right">
          <Character model={skin2} />
        </div>
      </div>
      <div className="mainapp2">
        <div className="mainapp2__left">
          <Character model={skin3} />
        </div>
        <div className="mainapp2__right">
          <p>REACT-THREE-FIBER</p>
          <div className="mainapp2__right__story">
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
      <div className="mainapp3">
        <div className="mainapp3__left">
          <div className="mainapp3__left__p">
            <p>MIXAMO</p>
          </div>
          <div className="mainapp3__left__para">
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
        <div className="mainapp3__right">
          <Character model={skin4} />

          <div className="mainapp3__right__vL"></div>
          <div className="mainapp3__right__vL1"></div>
          <div className="mainapp3__right__vL2"></div>
          <div className="mainapp3__right__vL3"></div>
        </div>
      </div>
      <div className="mainapp4">
        <div className="mainapp4__left">
          <Character model={skin1} />
        </div>
        <div className="mainapp4__right">
          <p>HTML||5 CSS|3 JAVASCRIPT</p>
          <span>Designed By KIRAN BALAMALYNR</span>

          <div className="mainapp4__right__story">
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
