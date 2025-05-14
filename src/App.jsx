import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Nav from "./Components/Nav";
import Context from "./utils/Context";

const App = () => {
  return (
    <div className="flex h-screen w-screen bg-zinc-200">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
         
    </div>
  );
};

export default App;
