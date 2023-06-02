import { ethers } from "ethers";
import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const contAdd = "0x7De42c335Be09f899efa8d7760F70809bFa60b22";

  const statProv = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/bsc"
  );

  return (
    <AppContext.Provider
      value={{
        contAdd,
        statProv,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
