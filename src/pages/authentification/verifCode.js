import React, { useState, useEffect } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./verifCode.scss"

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
        <div className="bloc-vrf">
            <div className="container-vrf">
                <h1>Un code vous a été envoyé par mail. Veuillez le saisir</h1>
                <br />
                <br />

                <br />
                {!isVisible ? (
                    <div>
                        <Input
                            className="input-vrf"
                            onChange={e => {
                                setCode({ ...code, activation_code: e.target.value })
                            }}
                        />
                        <div className="col-vrf">
                            <Button title="Envoyer" onClick={e => sendCode(e)} />
                        </div>
                    </div>
                ) : (
                    <div className="col-vrf">
                        <Button
                            title="Se connecter"
                            onClick={() => {
                                navigate("/login")
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerifCode
