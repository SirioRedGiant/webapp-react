import { useState } from "react";
import { createContext, useContext } from "react";

const LoaderContext = createContext();

const LoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const activateLoading = () => setIsLoading(true);
  const deactivateLoading = () => setIsLoading(false);
  //
  const value = { isLoading, activateLoading, deactivateLoading };
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

const useLoaderContext = () => {
  return useContext(LoaderContext);
};

export { useLoaderContext, LoaderContextProvider };
