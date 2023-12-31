import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-row-line navbar navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <span>
            <Link to="/">Home</Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/characters-list">Characters</Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/about-us">About</Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/login">Login</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
