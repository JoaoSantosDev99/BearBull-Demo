import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const contAdd = "0x7De42c335Be09f899efa8d7760F70809bFa60b22";
  const contractABI = "";

  return (
    <AppContext.Provider
      value={{
        contAdd,
        contractABI,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
