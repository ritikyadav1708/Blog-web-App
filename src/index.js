import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./AppContext/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // AppContextProvider wraps other components to provides context Values or(and have access to  all child components to use function and states). 
  <AppContextProvider>
  <App/>
  </AppContextProvider>
    
  
);
// Summary
// Context Creation
// Context Provider
// Consume
