import React, { useState, useEffect } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { FiCheck } from "react-icons/fi"
import styles from "./register.module.scss"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Register = () => {
    const [user, setUser] = useState({})
    const [eightcaracmin, setEightcaracmin] = useState(false)
    const [oneNumberMin, setOneNumberMin] = useState(false)
    const [oneCaracSpeMin, setOneCaracSpeMin] = useState(false)

    const handlesubmit = e => {
        e.preventDefault()
        userService
            .register(user)
            .then(data => {
                console.log("data, register")
                console.log(data)
                if (data.message) {
                    toast.success("Un mail vous a été envoyé par mail", {
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
                    if (data.email[0] === "Un objet account avec ce champ Email existe déjà.") {
                        toast.error(data.email[0], {
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
                        toast.error("Tous les champs sont obligatoires", {
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
                }
            })
            .catch(err =>
                toast.error("Tous les champs sont obligatoires", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }),
            )
    }

    useEffect(() => {
        if (user.password !== undefined) {
            var onenumber = /[0-9]+/
            var onecaracspe = /[^A-Za-z0-9_]/
            //var onenumber = /[a-z]+[0-9]+[a-z]+/
            if (user.password.length >= 8) {
                setEightcaracmin(true)
            } else {
                setEightcaracmin(false)
            }
            if (user.password.match(onenumber)) {
                setOneNumberMin(true)
            } else {
                setOneNumberMin(false)
            }
            if (user.password.match(onecaracspe)) {
                setOneCaracSpeMin(true)
            } else {
                setOneCaracSpeMin(false)
            }
        }
    }, [user.password])

    return (
        <div>
            <Input
                label="Nom"
                required
                onChange={e => {
                    setUser({ ...user, name: e.target.value })
                }}
            />
            <br />
            <Input
                label="Prénom"
                required
                onChange={e => {
                    setUser({ ...user, prenom: e.target.value })
                }}
            />
            <br />
            <Input
                label="Pseudo"
                required
                onChange={e => {
                    setUser({ ...user, username: e.target.value })
                }}
            />
            <br />
            <label>Sexe</label>
            <br />
            <select
                onClick={e => {
                    setUser({ ...user, sexe: e.target.value })
                }}
                name="pets"
                id="pet-select"
            >
                <option value=""> </option>
                <option value="O">O</option>
                <option value="F">F</option>
                <option value="M">M</option>
            </select>
            <br />
            <br />
            <Input
                label="Code postal"
                required
                onChange={e => {
                    setUser({ ...user, code_postal: e.target.value })
                }}
            />
            <br />
            <Input
                label="Adresse"
                required
                onChange={e => {
                    setUser({ ...user, adresse: e.target.value })
                }}
            />
            <br />
            <Input
                label="Email"
                required
                onChange={e => {
                    setUser({ ...user, email: e.target.value })
                }}
            />
            <br />
            <Input
                label="Mot de passe"
                type="password"
                required={true}
                onChange={e => {
                    setUser({ ...user, password: e.target.value })
                }}
            />
            {/* <Input
                    label="Confirmer mot de passe"
                    type="password"
                    onChange={e => {
                        setUser({ ...user, confirmPassword: e.target.value })
                    }}
                /> */}
            <br />
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
                    title="S'inscrire"
                    className={styles.buttonblue}
                    onClick={e => handlesubmit(e)}
                />
            ) : (
                <>
                    <Button title="S'inscrire" className={styles.buttongrey} />
                </>
            )}
        </div>
    )
}

export default Register
