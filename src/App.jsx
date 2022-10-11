import { useRoutes } from "react-router-dom";

import { AppWrapper } from "./App.style";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import routes from "./router";
import "./App.scss";

function App() {
  return (
    <AppWrapper>
      <div className="app">
        <header className="app-header">
          <AppHeader />
        </header>
        <div className="page">{useRoutes(routes)}</div>
        <footer className="footer">
          <AppFooter />
        </footer>
      </div>
    </AppWrapper>
  );
}

export default App;
