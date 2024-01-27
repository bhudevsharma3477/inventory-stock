import './App.css';
import React from 'react';
import { useContext } from "react";
import Inventory from './components/Inventory';
import MyModal from "./components/MyModal";
import { Context } from "./Appcontext";
import Updatemodal from './components/Updatemodal';

var App = () => {
  var {updatemodalshow, modalshow, modalclosefn, updatemodalclosefn } = useContext(Context);

  console.log("hello");

  return (
    <>
      <Inventory />
      <Updatemodal show={updatemodalshow} onHide={updatemodalclosefn} />
      <MyModal show={modalshow} onHide={modalclosefn} />
    </>
  );
}

export default App;
