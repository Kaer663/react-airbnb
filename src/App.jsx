import { useRoutes } from "react-router-dom";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import routes from "./router";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <AppHeader />
      </header>
      <div className="page">{useRoutes(routes)}</div>
      <footer className="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
