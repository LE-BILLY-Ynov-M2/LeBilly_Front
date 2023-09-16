import React, { useState, useEffect, useContext } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import "./login.scss"

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
                    setUserContext({
                        token: data.token,
                        admin: data.admin,
                        id: data.user_id,
                    })
                    navigate("/")
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
        <div className="bloc">
            <div className="container">
                <div className="text">Veuillez saisir vos identifiants</div>
                <br />
                <br />
                <div className="label">E-mail</div>
                <Input
                    label=""
                    className="input"
                    onChange={e => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />
                <br />
                <div className="label">Mot de passe</div>
                <Input
                    label=""
                    type="password"
                    className="input"
                    onChange={e => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />

                <div className="col">
                    <Button
                        className="btn btn-purple"
                        title="Mot de passe oublié"
                        onClick={() => navigate("/forgotPassword")}
                    />
                    <Button
                        title="Se connecter"
                        className="btn btn-blue"
                        onClick={e => handleSubmit(e)}
                    />
                    <Button
                        className="btn btn-purple"
                        title="S'inscrire"
                        onClick={() => {
                            navigate("/register")
                        }}
                    />
                </div>
            </div>
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
