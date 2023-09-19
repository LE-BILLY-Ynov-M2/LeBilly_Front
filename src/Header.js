import React, { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "./context/AuthContext"

const Header = () => {
    const { userContext } = useContext(AuthContext)

    return (
        <header>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>Programmation</li>

                    <li>
                        <Link to="/infosPratique">Infos pratiques (Accès)</Link>
                    </li>

                    <li>
                        <Link to="/presentation">Qui sommes-nous ?</Link>
                    </li>
                    <li>
                        <Link to="/photos">Photos</Link>
                    </li>
                    {/* <li>
                        <Link to="/event">Event</Link>
                    </li> */}
                    {userContext && userContext.token ? (
                        <li className="account">
                            <Link to="/monCompte">Mon compte</Link>
                        </li>
                    ) : (
                        <li className="account">
                            <Link to="/login">Se connecter</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
