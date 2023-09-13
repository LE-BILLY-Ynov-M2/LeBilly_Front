import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Login from "../authentification/login"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import AuthContext from "../../context/AuthContext"

const MonCompte = () => {
    const [user, setUser] = useState({})
    const [visible, setVisible] = useState(true)
    const navigate = useNavigate()
    const { userContext } = useContext(AuthContext)

    useEffect(() => {
        // userService
        //     .getUser(userContext.id)
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        //si il n'y a pas de veriftoken
        navigate("/login")
    })

    const updateCompte = () => {
        userService
            .updateUser(userContext.id, user)
            .then(data => {
                console.log(data)
                setVisible(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Mon compte</h1>
            {visible ? (
                <div>
                    <p>Mes infos</p>
                    {user ? (
                        <div>
                            {user.prenom}
                            <br />
                            {user.name}
                            <br />
                            {user.username}
                            <br />
                            {user.sexe}
                            <br />
                            {user.adresse}
                            <br />
                            {user.code_postal}
                        </div>
                    ) : (
                        <div>pas d'information</div>
                    )}
                </div>
            ) : (
                <div>
                    <p>Modifiées mes infos</p>
                    <Input
                        label="Prenom"
                        className=""
                        onChange={e => {
                            setUser({ ...user, prenom: e.target.value })
                        }}
                    />
                    <Input
                        label="Nom"
                        className=""
                        onChange={e => {
                            setUser({ ...user, name: e.target.value })
                        }}
                    />
                    <Input
                        label="Nom d'utilisateur"
                        className=""
                        onChange={e => {
                            setUser({ ...user, username: e.target.value })
                        }}
                    />
                    <Input
                        label="Sexe"
                        className=""
                        onChange={e => {
                            setUser({ ...user, sexe: e.target.value })
                        }}
                    />
                    <Input
                        label="Adresse"
                        className=""
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
