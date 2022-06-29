//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarcomp from "./components/NavBarcomp";
import React from "react";
import Cardsw from "./components/Cardsw";
import login from "./components/login";
import { FormLabel } from "react-bootstrap";
import carousel1 from "./components/carousel1";

function App() {
  return (
    <div>
      <NavBarcomp />
      <carousel1 />
      <Cardsw />
      <FormLabel />
      <login />
    </div>
  );
}

export default App;
