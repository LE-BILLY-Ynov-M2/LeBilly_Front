import React, { useState, useEffect } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const VerifCode = () => {
    const [code, setCode] = useState({})
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()

    const url = window.location.search
    const paramUrl = url.split("?")[1].split(".")[0]
    const sendCode = e => {
        e.preventDefault()
        userService
            .sendCode(paramUrl, code)
            .then(data => {
                console.log("data, sendCode")
                console.log(data)
                if (data.message) {
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
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                    toast.error("Le code d'activation est incorrect", {
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
            .catch(err => console.log(err))
    }

    return (
        <div>
            {!isVisible ? (
                <div>
                    <p>Un code vous a été envoyé par mail. Veuillez le saisir</p>
                    <Input
                        onChange={e => {
                            setCode({ ...code, activation_code: e.target.value })
                        }}
                    />
                    <Button title="Envoyer" onClick={e => sendCode(e)} />
                </div>
            ) : (
                <div>
                    <Button
                        title="Se connecter"
                        onClick={() => {
                            navigate("/login")
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default VerifCode
