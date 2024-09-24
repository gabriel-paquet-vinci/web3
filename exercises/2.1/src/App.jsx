import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const ClickCounter = ({ titre, message1, message2 }) => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false)
  return (
    <button onClick={() => setCount((count) => count + 1)} onMouseEnter={() => setDisplay(!display)} onMouseLeave={() => setDisplay(!display)}>
      {display ? message2 : count >= 10 ? message1 : `${titre} (${count})` }
    </button>
  );
};

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ClickCounter titre="Click here !" message1="You are a master in the art of clicking !" message2="Please click on me now !"/>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
