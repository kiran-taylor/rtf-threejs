import "./App.css";
import Taunt from "./components/Taunt";
import Walk from "./components/Walk";
import Scoop from "./components/Scoop";
import Flair from "./components/Flair";
const App = () => {
  return (
    <>
      <div className="mainapp">
        <div className="app">
          <Taunt />
          <Walk />
        </div>
        <div className="app">
          <Scoop />
          <Flair />
        </div>
      </div>
    </>
  );
};

export default App;
