import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./components/landing";
import { useEffect } from "react";
import { WebContext } from "./conext/main.context";
function App() {
  // useEffect(() => {
  //   fetch("https://www.ipinfo.io/106.216.254.229?token=ca553a36187af5")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Use the location information
  //       const { city, region, country } = data;
  //       console.log(`User location: ${city}, ${region}, ${country}`);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
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
