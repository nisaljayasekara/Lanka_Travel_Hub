// src/components/Header.tsx
import { Link } from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <header>
      <h1>Lanka Travel Hub</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/aboutus">Aboutus</Link></li>
          <li><Link to="/exprience">Exprience</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
