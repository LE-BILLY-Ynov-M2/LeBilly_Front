import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer>
        <ul>
          <li>Contact</li>
          <li>Mentions légales</li>
          <li><Link to="/plan-du-site">Plan du site</Link></li>
        </ul>
      </footer>
    );
};

export default Footer;
