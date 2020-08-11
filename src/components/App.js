import React from 'react';
import G01Header from "./G01Header";
import G02SearchBar from "./G02SearchBar";
import G03 from "./G03";
import G04 from "./G04";
import G05 from "./G05";
import G06 from "./G06";
import G07 from "./G07";
import G08 from "./G08";
import G09 from "./G09";
import G10 from "./G10";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <G01Header/>
      <G02SearchBar/>
      <G03/>
      <G04/>
      <G05/>
      <G06/>
      <G07/>
      <G08/>
      <G09/>
      <G10/>

      <div className="h-screen"/>
    </div>
  );
};

export default App;
