import React, { useState, useEffect } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import { FiCheck } from "react-icons/fi"
import styles from "./register.scss"

const Register = () => {
    const [user, setUser] = useState({})
    const [code, setCode] = useState({})
    const [isVisible, setIsVisible] = useState(true)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [valid, setValid] = useState(false)
    const [validMessage, setValidMessage] = useState("")
    const [errorCode, setErrorCode] = useState(false)
    const [errorCodeMessage, setErrorCodeMessage] = useState("")
    const [eightcaracmin, setEightcaracmin] = useState(false)
    const [oneNumberMin, setOneNumberMin] = useState(false)
    const [oneCaracSpeMin, setOneCaracSpeMin] = useState(false)
    const navigate = useNavigate()

    const handlesubmit = e => {
        e.preventDefault()
        userService
            .register(user)
            .then(data => {
                console.log("data, register")
                console.log(data)
                if (data.message) {
                    setValid(true)
                    setError(false)
                    setValidMessage(data.message)
                } else {
                    setError(true)
                    setValid(false)
                    if (data.email[0] === "Un objet account avec ce champ Email existe déjà.") {
                        console.log("ffffff")
                        setErrorMessage(data.email[0])
                    } else {
                        console.log("rrrrrrrr")
                        setErrorMessage("Tous les champs sont obligatoires")
                    }
                }
            })
            .catch(err => setErrorMessage("Tous les champs sont obligatoires"))
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
        <div className="bloc-reg">
            {isVisible ? (
                <div className="container-reg">
                    <div className="text-reg">Veuillez renseigner vos informations</div>
                    <br />
                    <br />
                    <div className="label-reg">Nom</div>
                    <Input
                        label=""
                        className="input-reg"
                        required
                        onChange={e => {
                            setUser({ ...user, name: e.target.value })
                        }}
                    />
                    <br />
                    <div className="label-reg">Prénom</div>
                    <Input
                        label=""
                        className="input-reg"
                        required
                        onChange={e => {
                            setUser({ ...user, prenom: e.target.value })
                        }}
                    />
                    <br />
                    <div className="label-reg">Pseudo</div>
                    <Input
                        label=""
                        className="input-reg"
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
                        className="input-reg"
                        id="pet-select"
                    >
                        <option value=""> </option>
                        <option value="M">Homme</option>
                        <option value="F">Femme</option>
                        <option value="O">Ne se prenonce pas</option>
                    </select>
                    <br />
                    <br />
                    <div className="label-reg">Code postal</div>
                    <Input
                        label=""
                        className="input-reg"
                        required
                        onChange={e => {
                            setUser({ ...user, code_postal: e.target.value })
                        }}
                    />
                    <br />
                    <div className="label-reg">Adresse</div>
                    <Input
                        label=""
                        className="input-reg"
                        required
                        onChange={e => {
                            setUser({ ...user, adresse: e.target.value })
                        }}
                    />
                    <br />
                    <div className="label-reg">E-mail</div>
                    <Input
                        label=""
                        className="input-reg"
                        required
                        onChange={e => {
                            setUser({ ...user, email: e.target.value })
                        }}
                    />
                    <br />
                    <div className="label-reg">Mot de passe</div>
                    <Input
                        label=""
                        className="input-reg"
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
                    <br />

                    <div className="col-reg">
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

                    {error ? (
                        <div>
                            <p>error</p>
                            <p>{errorMessage}</p>
                        </div>
                    ) : (
                        ""
                    )}
                    {valid ? (
                        <div>
                            <p>{validMessage}</p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                <div>
                    <p>Un code vous a été envoyé par mail.</p>
                </div>
            )}
        </div>
    )
}

export default Register
