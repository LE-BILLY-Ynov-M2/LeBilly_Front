import React, { useState, useEffect, useContext } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import "./login.scss"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const { setUserContext } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .login(user)
            .then(data => {
                if (data.detail) {
                    toast.error(data.detail, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
                if (data.message) {
                    setUserContext({
                        token: data.token,
                        admin: data.admin,
                        id: data.user_id,
                    })
                    toast.success(data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    navigate("/")

                    console.log(data)
                }
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
                <div className="inputPassword">
                    <Input
                        label=" "
                        type="password"
                        className="input"
                        onChange={e => {
                            setUser({ ...user, password: e.target.value })
                        }}
                    />
                </div>

                <div className="col-log">
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
        </div>
    )
}

export default Login
