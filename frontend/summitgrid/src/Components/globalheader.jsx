import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/globalheader.css';

function GlobalHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="global-header">
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Events Calendar</Link></li>
        <li><Link to="/signup" onClick={() => setIsOpen(false)}>Sign up</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
     </ul>
    </div>
  );
}

export default GlobalHeader;
