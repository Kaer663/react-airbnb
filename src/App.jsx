import { useRoutes } from "react-router-dom";

import routes from "./router";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>header</h2>
      </header>
      <div className="page">{useRoutes(routes)}</div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
