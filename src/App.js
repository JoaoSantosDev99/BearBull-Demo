import React from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import PostFooter from "./components/PostFooter";
import Header from "./components/Header";
import Main from "./Main";
import Lend from "./Lend";
import Short from "./Short";

const queryClient = new QueryClient();

const fetchPrise = async () => {
  const res = await axios.get(
    "https://deep-index.moralis.io/api/v2/erc20/0x4F0F2fA439C6454B4664f3C4432514Ec07c1bC28/price?chain=bsc",
    {
      headers: {
        "X-API-Key":
          "wm1Kyx8NIcK2PYt5cjea4ID9Wu8ozm3TYppH9IiwlieUu0VBeV2zk7q4vdkxpIzP",
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

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
