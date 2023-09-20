import React, { useState } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import "./forgotPassword.scss"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ForgotPassword = () => {
    const [email, setEmail] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .forgotPassword(email)
            .then(data => {
                if (data.detail === "E-mail envoyé.") {
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
                } else {
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
        </div>
    )
}

export default ForgotPassword
