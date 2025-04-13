import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><h1>ARISE</h1></div>
      <ul className="nav-links">
        <li className='li1'><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Free Plan</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/register">Login</Link></li>
        
      </ul>
    </nav>
  )
}