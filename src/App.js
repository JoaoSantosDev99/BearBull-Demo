import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import { ethers } from "ethers";
import PostFooter from "./components/PostFooter";
import PreFooter from "./components/PreFooter";
import Header from "./components/Header";
import Hero from "./Hero";
import Main from "./Main";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Hero />
        <Main />

        {/* Footer */}
        <PreFooter />
        <Footer />
        <PostFooter />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
