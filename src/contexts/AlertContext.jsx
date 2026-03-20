import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

const AlertInitialState = {
  visible: false,
  message: "",
  type: "info",
};

const acceptedTypes = ["info", "warning", "success", "danger", "primary"];

const AlertContextProvider = ({ children }) => {
  const [Alert, setAlert] = useState(AlertInitialState);

  const showAlert = (message, type = "info") => {
    if (!message) {
      message = "Unknow error";
      type = "danger";
    } else if (!acceptedTypes.includes(type)) {
      type = "primary";
    }

    setAlert({
      visible: true,
      message,
      type,
    });
  };

  const hideAlert = () => {
    setAlert(AlertInitialState);
  };

  const value = { Alert, showAlert, hideAlert };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};
const useAlertContext = () => {
  return useContext(AlertContext);
};

export { AlertContextProvider, useAlertContext };
