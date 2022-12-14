import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components"
import { ConfigProvider } from "antd"
import "normalize.css";
import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';

import "@/assets/css/index.scss";
import "./index.css";
import { theme } from "@/assets/theme"
import store from "@/store";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Suspense fallback="loading">
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </Suspense>
      </Provider>
    </ConfigProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
