import React, { useState, useEffect, useContext } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthContext"

const Login = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState(false)
    const [valid, setValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [validMessage, setValidMessage] = useState("")
    const navigate = useNavigate()
    const { setUserContext } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .login(user)
            .then(data => {
                if (data.detail) {
                    setValid(false)
                    setError(true)
                    setErrorMessage(data.detail)
                }
                if (data.message) {
                    setError(false)
                    setValid(true)
                    setValidMessage(data.message)
                    console.log(data)
                }
                // console.log(data)
                // setUserContext({
                //     token: data.token,
                //     admin: data.admin,
                //     id: data.id,
                // })
                // navigate("/event")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Input
                label="E-mail"
                className=""
                onChange={e => {
                    setUser({ ...user, email: e.target.value })
                }}
            />
            <br />
            <Input
                label="Mot de passe"
                type="password"
                className=""
                onChange={e => {
                    setUser({ ...user, password: e.target.value })
                }}
            />
            <Button title="Mot de passe oublié" onClick={() => navigate("/forgotPassword")} />
            <Button title="Se connecter" className="btn btn-blue" onClick={e => handleSubmit(e)} />
            <Button
                title="S'inscrire"
                onClick={() => {
                    navigate("/register")
                }}
            />
            {error ? (
                <div>
                    <p>{errorMessage}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default Login
