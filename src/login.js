import React, { useState, useEffect, useContext } from "react"
import Input from "./components/others/input/input"
import Button from "./components/others/button/button"
import userService from "./services/user.service"
import { useNavigate } from "react-router-dom"
import AuthContext from "./context/AuthContext"

const Login = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const { setUserContext } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .login(user)
            .then(data => {
                console.log(data)
                setUserContext({
                    token: data.token,
                    admin: data.admin,
                })
                navigate("/event")
                // if (data.auth === true) {
                //     setError(false)
                //     // localStorage.setItem("token", data.token)
                //     setUserContext({
                //         token: data.token,
                //         username: data.username,
                //         id: data.id,
                //         image: data.image,
                //     })
                //     router.push("/")
                // } else {
                //     setError(true)
                //     setErrorMessage("Erreur d'email ou de mot de passe")
                // }
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
        </div>
    )
}

export default Login
