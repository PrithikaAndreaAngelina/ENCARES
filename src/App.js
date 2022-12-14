import React from "react";
import Home from './Home';
import Login from './Login';
import Speech from "./Speech";
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
      <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/speech" element={<Speech/>}/>
                </Routes>
  )
}
export default App;