import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Login from "../authentification/login"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import AuthContext from "../../context/AuthContext"
import { AiOutlineEdit, AiOutlineLeft } from "react-icons/ai"

const MonCompte = () => {
    const [user, setUser] = useState({})
    const [visible, setVisible] = useState(true)
    const navigate = useNavigate()
    const { userContext } = useContext(AuthContext)

    useEffect(() => {
        //faire le verif token
        //si pas verifier
        //navigate("/login")
        //sinon
        console.log(userContext)
        console.log(userContext.id)
        userService
            .getUser(userContext.id)
            .then(data => {
                setUser(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const updateCompte = () => {
        userService
            .updateUser(userContext.id, user)
            .then(data => {
                console.log(data)
                setVisible(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }

    return (
        <div>
            <h1>Mon compte</h1>
            {visible ? (
                <div>
                    <p>Mes infos</p>
                    <AiOutlineEdit
                        onClick={() => {
                            setVisible(false)
                        }}
                    />
                    {user ? (
                        <div>
                            <p>Prénom</p>
                            <p>{user.prenom}</p>
                            <br />
                            <p>Name</p>
                            <p>{user.name}</p>
                            <br />
                            <p>Nom d'utilisateur</p>
                            <p>{user.username}</p>
                            <br />
                            <p>Sexe</p>
                            <p>{user.sexe}</p>
                            <br />
                            <p>Adresse</p>
                            <p>{user.adresse}</p>
                            <br />
                            <p>Code postal</p>
                            <p>{user.code_postal}</p>
                            <br />
                            <Button title="Se déconnecter" onClick={() => logout()} />
                        </div>
                    ) : (
                        <div>pas d'information</div>
                    )}
                </div>
            ) : (
                <div>
                    <p>Modifiées mes infos</p>
                    <AiOutlineLeft onClick={() => setVisible(true)} />
                    <Input
                        label="Prenom"
                        className=""
                        value={user.prenom || ""}
                        onChange={e => {
                            setUser({ ...user, prenom: e.target.value })
                        }}
                    />
                    <Input
                        label="Nom"
                        className=""
                        value={user.name || ""}
                        onChange={e => {
                            setUser({ ...user, name: e.target.value })
                        }}
                    />
                    <Input
                        label="Nom d'utilisateur"
                        className=""
                        value={user.username || ""}
                        onChange={e => {
                            setUser({ ...user, username: e.target.value })
                        }}
                    />
                    <select
                        onClick={e => {
                            setUser({ ...user, sexe: e.target.value })
                        }}
                        name="pets"
                        id="pet-select"
                    >
                        <option value="O">O</option>
                        <option value="F">F</option>
                        <option value="M">M</option>
                    </select>
                    <Input
                        label="Adresse"
                        className=""
                        value={user.adresse || ""}
                        onChange={e => {
                            setUser({ ...user, adresse: e.target.value })
                        }}
                    />
                    <Button title="Enregistrez les modifications" onClick={() => updateCompte()} />
                </div>
            )}
        </div>
    )
}

export default MonCompte
