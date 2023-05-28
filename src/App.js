import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import { ethers } from "ethers";
import PostFooter from "./components/PostFooter";
import PreFooter from "./components/PreFooter";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <PreFooter />
        <Footer />
        <PostFooter />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
