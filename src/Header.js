import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <nav className="menu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li>Programme</li>
            <li>Infos pratiques (Accès)</li>
            <li>Qui sommes-nous ?</li>
            <li>Photos</li>
            <li><Link to="/event">Event</Link></li>
            <li>F.A.Q</li>
            <li>Recherche</li>
            <li className="account">Mon compte</li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header;
