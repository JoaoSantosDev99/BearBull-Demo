import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import PostFooter from "./components/PostFooter";
import Header from "./components/Header";
import Main from "./Main";
import Lend from "./Lend";
import Short from "./Short";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/short/:id"
            element={<Short />}
          />

          <Route
            path="/lend/:id"
            element={<Lend />}
          />
        </Routes>

        <Footer />
        <PostFooter />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
