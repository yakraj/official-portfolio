import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./components/landing";
import { useEffect } from "react";
import { WebContext } from "./conext/main.context";
import { Server } from "./components/server";
function App() {
  useEffect(() => {
    fetch(Server)
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => console.error(error));
  }, []);
  return (
    <WebContext>
      <div className="App">
        <header className="App-header">
          <Landing />
        </header>
      </div>
    </WebContext>
  );
}

export default App;
