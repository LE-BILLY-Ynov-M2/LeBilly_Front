import React, { useState, useEffect } from "react"
import Input from "./components/others/input/input"
import Button from "./components/others/button/button"
import userService from "./services/user.service"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [user, setUser] = useState({})
    const [code, setCode] = useState({})
    const [isVisible, setIsVisible] = useState(true)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [errorCode, setErrorCode] = useState(false)
    const [errorCodeMessage, setErrorCodeMessage] = useState("")
    const navigate = useNavigate()

    const handlesubmit = e => {
        e.preventDefault()
        userService
            .register(user)
            .then(data => {
                console.log("data, register")
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {isVisible ? (
                <div>
                    <Input
                        label="Nom"
                        onChange={e => {
                            setUser({ ...user, name: e.target.value })
                        }}
                    />
                    <br />
                    <Input
                        label="Prénom"
                        onChange={e => {
                            setUser({ ...user, prenom: e.target.value })
                        }}
                    />
                    <br />
                    <Input
                        label="Pseudo"
                        onChange={e => {
                            setUser({ ...user, username: e.target.value })
                        }}
                    />
                    <br />
                    <Input
                        label="Sexe"
                        onChange={e => {
                            setUser({ ...user, sexe: e.target.value })
                        }}
                    />
                    <br />
                    <Input
                        label="Code postal"
                        onChange={e => {
                            setUser({ ...user, code_postal: e.target.value })
                        }}
                    />
                    <br />
                    <Input
                        label="Adresse"
                        onChange={e => {
                            setUser({ ...user, adresse: e.target.value })
                        }}
                    />
                    <br />
                    <Input
                        label="Email"
                        onChange={e => {
                            setUser({ ...user, email: e.target.value })
                        }}
                    />
                    <br />
                    <Input
                        label="Mot de passe"
                        type="password"
                        onChange={e => {
                            setUser({ ...user, password: e.target.value })
                        }}
                    />
                    {/* <Input
                    label="Confirmer mot de passe"
                    type="password"
                    onChange={e => {
                        setUser({ ...user, confirmPassword: e.target.value })
                    }}
                /> */}
                    <br />
                    <Button title="S'inscrire" onClick={e => handlesubmit(e)} />
                    {error ? (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                <div>
                    <p>Un code vous a été envoyé par mail.</p>
                </div>
            )}
        </div>
    )
}

export default Register
