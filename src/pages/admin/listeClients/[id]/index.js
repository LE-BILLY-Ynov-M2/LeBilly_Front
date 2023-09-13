import React, { useState, useEffect } from "react"
import clientsService from "../../../../services/clients.service"
import Input from "../../../../components/others/input/input"
import Button from "../../../../components/others/button/button"
import { useNavigate } from "react-router-dom"

const Index = () => {
    const urlId = window.location.pathname.split("/")[2]
    const [client, setClient] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        clientsService
            .getClient(urlId)
            .then(data => {
                setClient(data)
            })
            .catch(err => console.log(err))
    }, [])

    const valModifClient = () => {
        console.log(client)
        clientsService
            .updateClients(urlId, client)
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Modifier client</h1>
            <Input
                label="Nom"
                className=""
                value={client.name || ""}
                onChange={e => {
                    setClient({ ...client, name: e.target.value })
                }}
            />
            <br />
            <Input
                label="Prenom"
                className=""
                value={client.prenom || ""}
                onChange={e => {
                    setClient({ ...client, prenom: e.target.value })
                }}
            />
            <br />
            <Input
                label="Pseudo"
                className=""
                value={client.username || ""}
                onChange={e => {
                    setClient({ ...client, username: e.target.value })
                }}
            />
            <br />
            <Input
                label="Email"
                className=""
                value={client.email || ""}
                onChange={e => {
                    setClient({ ...client, email: e.target.value })
                }}
            />
            <br />
            <Input
                label="Code Postal"
                className=""
                value={client.code_postal || ""}
                onChange={e => {
                    setClient({ ...client, code_postal: e.target.value })
                }}
            />
            <br />
            <Input
                label="Adresse"
                className=""
                value={client.adresse || ""}
                onChange={e => {
                    setClient({ ...client, adresse: e.target.value })
                }}
            />
            <br />
            <label>Sexe</label>
            <select
                value={client.sexe}
                onClick={e => {
                    setClient({ ...client, sexe: e.target.value })
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
                label="Mot de passe"
                className=""
                value={client.password || ""}
                onChange={e => {
                    setClient({ ...client, password: e.target.value })
                }}
            />
            <br />
            <Input
                type="checkbox"
                label="Admin"
                className=""
                value={client.isAdmin || false}
                onChange={e => {
                    setClient({ ...client, isAdmin: e.target.value })
                }}
            />
            <br />
            <Button
                title="Modifier"
                onClick={() => {
                    valModifClient()
                }}
            />
            <Button
                title="Retour"
                onClick={() => {
                    navigate("/listeClients")
                }}
            />
        </div>
    )
}

export default Index
