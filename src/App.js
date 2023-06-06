import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import PostFooter from "./components/PostFooter";
import Header from "./components/Header";
import Main from "./Main";
import Lend from "./Lend";
import Short from "./Short";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
