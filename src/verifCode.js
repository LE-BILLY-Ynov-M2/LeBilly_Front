import React, { useState, useEffect } from "react"
import Input from "./components/others/input/input"
import Button from "./components/others/button/button"
import userService from "./services/user.service"
import { useNavigate } from "react-router-dom"

const VerifCode = () => {
    const [code, setCode] = useState({})
    const [isVisible, setIsVisible] = useState(true)
    const navigate = useNavigate()

    const url = window.location.search
    const paramUrl = url.split("?")[1].split(".")[0]
    const sendCode = e => {
        e.preventDefault()
        userService
            .sendCode(paramUrl, code.activation_code)
            .then(data => {
                console.log("data, sendCode")
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {isVisible ? (
                <div>
                    verif code{" "}
                    <div>
                        <p>Un code vous a été envoyé par mail. Veuillez le saisir</p>
                        <Input
                            onChange={e => {
                                setCode({ ...code, activation_code: e.target.value })
                            }}
                        />
                        <Button title="Envoyer" onClick={e => sendCode(e)} />
                        {/* {errorCode ? (
                    <div>
                        <p>{errorCodeMessage}</p>
                    </div>
                ) : (
                    ""
                )} */}
                    </div>
                </div>
            ) : (
                <div>
                    <p>Email vérifié</p>
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
