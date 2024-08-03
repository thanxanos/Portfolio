import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import App from "./App";
import Seal from './Controllers/Seal'
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes>
      <Route exact path="/" component={App} />
      <Route exact path="/surprise" component={Seal}/>
    </Routes>
  </React.StrictMode>
);

reportWebVitals();
