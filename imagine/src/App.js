import React from "react";
// import "./App.css";
import Filter from "./filter";
import Gallery from "./gallery/Gallery";
import Preview from "./preview";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faArrowRight, faArrowLeft);

function App() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
