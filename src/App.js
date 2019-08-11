import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import WifiConnections from "./data/placeholders/data-connections.json";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap"
        rel="stylesheet"
      />
      <MainPage list={WifiConnections} />
    </div>
  );
}

export default App;
