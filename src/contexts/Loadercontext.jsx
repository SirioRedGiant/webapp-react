import { useState } from "react";
import { createContext, useContext } from "react";

const LoaderContext = createContext();

const LoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = { isLoading, setIsLoading };
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

const useLoaderContext = () => {
  return useContext(LoaderContext);
};

export { useLoaderContext, LoaderContextProvider };

/* chiedere al venerabile Maestro Stefano
 
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

//
export const useGlobalContext = () => useContext(GlobalContext);
*/
