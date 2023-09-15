import React, { useState } from "react"
import Input from "../../../../components/others/input/input"
import Button from "../../../../components/others/button/button"
import userService from "../../../../services/user.service"
import { useNavigate } from "react-router-dom"

const AjoutClient = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [valid, setValid] = useState(false)
    const [validMessage, setValidMessage] = useState("")

    const valAjoutUser = () => {
        userService
            .register(user)
            .then(data => {
                console.log(data)
                if (data.message) {
                    setValid(true)
                    setError(false)
                    setValidMessage(data.message)
                    navigate("listeClients")
                } else {
                    setError(true)
                    setValid(false)
                    if (data.email[0] === "Un objet account avec ce champ Email existe déjà.") {
                        console.log("ffffff")
                        setErrorMessage(data.email[0])
                    } else {
                        console.log("rrrrrrrr")
                        setErrorMessage("Tous les champs sont obligatoires")
                    }
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Ajouter client</h1>
            <br />
            <Input
                label="Nom"
                required
                onChange={e => {
                    setUser({ ...user, name: e.target.value })
                }}
            />
            <br />
            <Input
                label="Prénom"
                required
                onChange={e => {
                    setUser({ ...user, prenom: e.target.value })
                }}
            />
            <br />
            <Input
                label="Pseudo"
                required
                onChange={e => {
                    setUser({ ...user, username: e.target.value })
                }}
            />
            <br />
            <label>Sexe</label>
            <br />
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
            <br />
            <br />
            <Input
                label="Code postal"
                required
                onChange={e => {
                    setUser({ ...user, code_postal: e.target.value })
                }}
            />
            <br />
            <Input
                label="Adresse"
                required
                onChange={e => {
                    setUser({ ...user, adresse: e.target.value })
                }}
            />
            <br />
            <Input
                label="Email"
                required
                onChange={e => {
                    setUser({ ...user, email: e.target.value })
                }}
            />
            <br />
            <Input
                label="Mot de passe"
                type="password"
                required={true}
                onChange={e => {
                    setUser({ ...user, password: e.target.value })
                }}
            />
            <br />
            <Button
                title="Ajouter"
                onClick={() => {
                    valAjoutUser()
                }}
            />
            <Button title="Retour" onClick={() => navigate("/listeClients")} />
        </div>
    )
}

export default AjoutClient
