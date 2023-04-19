import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  // const []
  return (
    <div id="form">
      <form>
        <label>
          Enter your name:
          <input type="text" placeholder="name"></input>
          Enter your location:
          <input type="text" placeholder="location"></input>
        </label>
        <h1>The city is:</h1>
      </form>
    </div>
  );
}

export default App;
