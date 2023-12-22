// Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/edit">Edit</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
