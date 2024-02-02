import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/recipes/:slug" element={<Recipe />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
