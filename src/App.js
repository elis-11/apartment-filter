import { Routes, Route, NavLink as Link } from "react-router-dom";
// import Nav from "./components/Nav";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
import "./App.scss";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>
              Home
              </Link>
          </li>
          <li>
            <Link to="projects" activeClassName="active">
              Projects
              </Link>
          </li>
          <li>
            <Link to="about" activeClassName="active">
              About
              </Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="active">
              Dashboard
              </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

// export default App;