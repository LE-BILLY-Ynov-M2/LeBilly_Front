import React, { useState } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"

const ForgotPassword = () => {
    const [email, setEmail] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .forgotPassword(email)
            .then(data => {
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
        </div>
    )
}

export default ForgotPassword
