import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//slick carousel
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

// setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
