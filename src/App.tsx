import * as React from "react";
import { Scroller } from "./Scroller";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Infinite Scrolling</h1>
      <h4>
        Provide the component with an api endpoint and a config object on how
        you want the list to display and you have inifinite scrolling, voila!
      </h4>
      <Scroller/>
    </div>
  );
}
