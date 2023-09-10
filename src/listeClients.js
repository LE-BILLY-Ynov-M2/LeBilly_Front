import React, { useEffect, useState } from "react"
import clientsService from "./services/clients.service"
import Button from "./components/others/button/button"

const ListeClients = () => {
    const [client, setClient] = useState({})

    useEffect(() => {
        clientsService.getAllClients
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    })

    const modifClient = () => {
        clientsService
            .updateClients(client)
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    const addClient = () => {}

    const deleteClient = () => {}

    return (
        <div>
            <Button
                title="Ajouter"
                onClick={() => {
                    addClient()
                }}
            />
            {client ? (
                client.map(element => (
                    <div key={element.id}>
                        <p>{element.id}</p>
                        <p>{element.name}</p>
                        <p>{element.prenom}</p>
                        <p>{element.username}</p>
                        <p>{element.email}</p>
                        <p>{element.code_postal}</p>
                        <p>{element.adresse}</p>
                        <p>{element.sexe}</p>
                        <p>{element.password}</p>
                        <p>{element.admin}</p>
                    </div>
                ))
            ) : (
                <div>
                    <p>Il n'y as pas de clients</p>
                </div>
            )}
            <Button
                title="Modifier"
                onClick={() => {
                    modifClient()
                }}
            />
            <Button
                title="Supprimer"
                onClick={() => {
                    deleteClient()
                }}
            />
        </div>
    )
}

export default ListeClients
