import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>Programme</li>
                    <li>
                        <Link to="/infosPratique">Infos pratiques (Accès)</Link>
                    </li>
                    <li>
                        <Link to="/presentation">Qui sommes-nous ?</Link>
                    </li>
                    <li>
                        <Link to="/photos">Photos</Link>
                    </li>
                    <li>
                        <Link to="/event">Event</Link>
                    </li>
                    <li>
                        <Link to="/faq">F.A.Q</Link>
                    </li>
                    <li>Recherche</li>
                    <li className="account">
                        <Link to="/monCompte">Mon compte</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
