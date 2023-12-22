// Sidebar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your sidebar styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        {isOpen ? (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/add">Add</Link></li>
                    <li><Link to="/edit">Edit</Link></li>
                </ul>
            ) : null
        }
        
        {/* { isOpen ? (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/add">Add</Link></li>
                    <li><Link to="/edit">Edit</Link></li>
                </ul>
            );
        }; */}
    </div>
  );
};

export default Sidebar;
