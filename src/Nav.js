import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reserve">Reserve a Table</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/booking">Book a Table</Link></li> {/* React Router link */}
      </ul>
    </nav>
  );
}

export default Nav;
