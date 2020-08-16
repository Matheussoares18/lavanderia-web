import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import Routes from "./Routes";
import store, { persistor } from "./store";
import { AppProvider } from "./provider";

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Routes></Routes>
      </AppProvider>
    </Provider>
  );
}

export default App;
