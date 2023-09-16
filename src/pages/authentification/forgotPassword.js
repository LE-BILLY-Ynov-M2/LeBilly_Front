import React, { useState } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import "./forgotPassword.scss"

const ForgotPassword = () => {
    const [email, setEmail] = useState({})
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [valid, setValid] = useState(false)
    const [validMessage, setValidMessage] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .forgotPassword(email)
            .then(data => {
                if (data.detail === "E-mail envoyé.") {
                    setValid(true)
                    setError(false)
                    setValidMessage(data.detail)
                } else {
                    setValid(false)
                    setError(true)
                    setErrorMessage(data.detail)
                }

                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="bloc-fgt">
            <div className="container-fgt">
                <div className="text-fgt">
                    Mot de passe oublié ?
                    <br />
                    Saisir votre e-mail pour recevoir votre code de sécurité
                </div>
                <br />
                <br />
                <div className="label-fgt">E-mail</div>
                <Input
                    label=""
                    className="input-form"
                    onChange={e => {
                        setEmail({ ...email, email: e.target.value })
                    }}
                />

                <div className="col-fgt">
                    <Button
                        className="btn-fgt"
                        title="Envoyer"
                        onClick={e => {
                            handleSubmit(e)
                        }}
                    />
                </div>
            </div>
            {valid ? (
                <div>
                    <p>{validMessage}</p>
                </div>
            ) : (
                ""
            )}
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

export default ForgotPassword
