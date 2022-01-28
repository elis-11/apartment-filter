import { Routes, Route, NavLink as Link } from "react-router-dom";
// import Nav from "./components/Nav";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
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
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

// export default App;
