import React, { useEffect, useState } from "react"
import clientsService from "../../../services/clients.service"
import Button from "../../../components/others/button/button"
import { useNavigate } from "react-router-dom"
import userService from "../../../services/user.service"

const ListeClients = () => {
    const [clients, setClients] = useState([])
    const [isValid, setIsValid] = useState(false)
    const [isError, setIsError] = useState(false)
    const [validMessage, setValidMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        clientsService
            .getAllClients()
            .then(data => {
                setClients(data)
            })
            .catch(err => console.log(err))
    }, [])

    const modifClient = id => {
        navigate(`${id}`)
    }

    const addClient = () => {
        navigate("/ajoutClient")
    }

    const deleteClient = id => {
        console.log(id)
        clientsService
            .deleteClient(id)
            .then(data => {
                if (data.message) {
                    setIsError(false)
                    setIsValid(true)
                    setValidMessage(data.message)
                }
                if (data.detail) {
                    setIsError(true)
                    setIsValid(false)
                    setValidMessage(data.detail)
                }
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            {isValid ? (
                <div>
                    <p>{validMessage}</p>
                </div>
            ) : (
                ""
            )}
            <Button
                title="Ajouter"
                onClick={() => {
                    addClient()
                }}
            />
            {clients ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Identifiant</th>
                                <th>Email</th>
                                <th>Code Postal</th>
                                <th>Adresse</th>
                                <th>Sexe</th>
                                <th>Password</th>
                                <th>Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(element => (
                                <tr key={element.id}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.prenom}</td>
                                    <td>{element.username}</td>
                                    <td>{element.email}</td>
                                    <td>{element.code_postal}</td>
                                    <td>{element.adresse}</td>
                                    <td>{element.sexe}</td>
                                    <td>{element.password}</td>
                                    <td>{element.isAdmin}</td>
                                    <td>
                                        <Button
                                            title="Modifier"
                                            onClick={() => {
                                                modifClient(element.id)
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <Button
                                            title="Supprimer"
                                            onClick={() => {
                                                deleteClient(element.id)
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>
                    <p>Il n'y as pas de clients</p>
                </div>
            )}
        </div>
    )
}

export default ListeClients
