import React, { useState, useEffect } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import { FiCheck } from "react-icons/fi"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Resetpassword = () => {
    const [password, setPassword] = useState({})
    const navigate = useNavigate()
    const [eightcaracmin, setEightcaracmin] = useState(false)
    const [oneNumberMin, setOneNumberMin] = useState(false)
    const [oneCaracSpeMin, setOneCaracSpeMin] = useState(false)

    useEffect(() => {
        if (password.new_password !== undefined) {
            var onenumber = /[0-9]+/
            var onecaracspe = /[^A-Za-z0-9_]/
            //var onenumber = /[a-z]+[0-9]+[a-z]+/
            if (password.new_password.length >= 8) {
                setEightcaracmin(true)
            } else {
                setEightcaracmin(false)
            }
            if (password.new_password.match(onenumber)) {
                setOneNumberMin(true)
            } else {
                setOneNumberMin(false)
            }
            if (password.new_password.match(onecaracspe)) {
                setOneCaracSpeMin(true)
            } else {
                setOneCaracSpeMin(false)
            }
        }
    }, [password.new_password])

    const modifPassword = e => {
        e.preventDefault()
        const url = window.location.pathname
        const paramUrl = url.split("/")
        const token = paramUrl[2]
        userService
            .formResetPassword(token, password)
            .then(data => {
                console.log(data)
                if (data.detail) {
                    toast.success(data.detail, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    navigate("/login")
                } else {
                    toast.error("error", {
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
            })
            .catch(err => {
                navigate("/login")
                console.log(err)
            })
    }

    return (
        <div>
            <p>Mettez à jour votre mot de passe</p>
            <Input
                label="Mot de passe"
                type="password"
                onChange={e => {
                    setPassword({ ...password, new_password: e.target.value })
                }}
            />
            {eightcaracmin ? (
                <div>
                    <FiCheck color="green" /> 8 caractères minimum
                </div>
            ) : (
                <div>
                    <FiCheck color="grey" /> 8 caractères minimum
                </div>
            )}
            {oneNumberMin ? (
                <div>
                    <FiCheck color="green" /> 1 chiffre minimum
                </div>
            ) : (
                <div>
                    <FiCheck color="grey" /> 1 chiffre minimum
                </div>
            )}
            {oneCaracSpeMin ? (
                <div>
                    <FiCheck color="green" /> 1 caractère spécial
                </div>
            ) : (
                <div>
                    <FiCheck color="grey" /> 1 caractère spécial
                </div>
            )}
            {eightcaracmin && oneNumberMin && oneCaracSpeMin ? (
                <Button
                    title="Envoyer"
                    onClick={e => {
                        modifPassword(e)
                    }}
                />
            ) : (
                <>
                    <Button title="Envoyer" />
                </>
            )}
        </div>
    )
}

export default Resetpassword
