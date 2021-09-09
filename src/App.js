import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setToggle((prev) => (prev = !prev))}>
          Toggle Me
        </button>
        {toggle ? (
          <p style={{ margin: "0" }}>Yes</p>
        ) : (
          <p style={{ margin: "0" }}>No</p>
        )}
      </header>
    </div>
  );
}

export default App;
