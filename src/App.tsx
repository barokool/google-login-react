import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { GoogleButton } from "./components/googleButton";

function App() {
  return (
    <div className="App">
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <GoogleButton />
      </div>
    </div>
  );
}

export default App;
