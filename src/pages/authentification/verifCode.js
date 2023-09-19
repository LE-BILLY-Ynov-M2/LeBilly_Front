import React, { useState, useEffect } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import "./verifCode.scss"

const VerifCode = () => {
    const [code, setCode] = useState({})
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [validMessage, setValidMessage] = useState("")

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
                    setIsVisible(true)
                    setIsError(false)
                    setIsValid(true)
                    setValidMessage(data.message)
                } else {
                    setIsValid(false)
                    setIsError(true)
                    setErrorMessage("Le code d'activation est incorrect")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="bloc-vrf">
            {!isVisible ? (
                <div className="container-vrf">
                    <h1>Un code vous a été envoyé par mail. Veuillez le saisir</h1>
                    <br />
                    <br />
                    <Input
                        className="input-vrf"
                        onChange={e => {
                            setCode({ ...code, activation_code: e.target.value })
                        }}
                    />
                    <br />
                    <div className="col-vrf">
                        <Button title="Envoyer" onClick={e => sendCode(e)} />
                        {isError ? (
                            <div>
                                <p>{errorMessage}</p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    {isValid ? (
                        <div>
                            <p>{validMessage}</p>
                        </div>
                    ) : (
                        ""
                    )}
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
