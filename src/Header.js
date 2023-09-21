import React, { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "./context/AuthContext"
import { AiOutlineLogout } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import "./App.scss"

const Header = () => {
    const { userContext } = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
        window.location.reload()
    }

    return (
        <header>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/programmation">Programmation</Link>
                    </li>

                    <li>
                        <Link to="/infosPratique">Infos pratiques (Accès)</Link>
                    </li>

                    <li>
                        <Link to="/presentation">Qui sommes-nous ?</Link>
                    </li>
                    <li>
                        <Link to="/photos">Photos</Link>
                    </li>
                    {userContext && userContext.token ? (
                        <li className="account">
                            <Link to="/monCompte">Mon compte</Link>
                        </li>
                    ) : (
                        <li className="account">
                            <Link to="/login" className="connect-link">Se connecter</Link>
                        </li>
                    )}
                    {userContext && userContext.token ? (
                        <AiOutlineLogout
                            size={30}
                            color="#61dafb"
                            onClick={() => {
                                logout()
                            }}
                            className="logout"
                        />
                    ) : (
                        ""
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
