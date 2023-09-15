import React, { useState } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"

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
        <div>
            <Input
                label="E-mail"
                className="input input-form"
                onChange={e => {
                    setEmail({ ...email, email: e.target.value })
                }}
            />

            <Button
                title="Envoyer"
                onClick={e => {
                    handleSubmit(e)
                }}
            />
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
