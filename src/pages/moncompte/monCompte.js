import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Login from "../authentification/login"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"
import userService from "../../services/user.service"
import AuthContext from "../../context/AuthContext"
import { AiOutlineEdit, AiOutlineRollback } from "react-icons/ai"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./monCompte.scss"

const MonCompte = () => {
    const [user, setUser] = useState({})
    const [visible, setVisible] = useState(true)
    const { userContext } = useContext(AuthContext)

    useEffect(() => {
        userService
            .getUser(userContext.id)
            .then(data => {
                setUser(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const updateCompte = () => {
        userService
            .updateUser(userContext.id, user)
            .then(data => {
                console.log(data)
                setVisible(true)
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
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="bloc">
            <div className="container">
                <div className="flex-title">
                    <h1 className="title-compte">Mon compte</h1>

                    {visible ? (
                        <AiOutlineEdit
                            size={30}
                            color="#2e3192"
                            onClick={() => {
                                setVisible(false)
                            }}
                        />
                    ) : (
                        <AiOutlineRollback
                            size={30}
                            color="#2e3192"
                            onClick={() => setVisible(true)}
                        />
                    )}
                </div>
                {visible ? (
                    <div>
                        {user ? (
                            <div>
                                <div className="moncompte-info">
                                    <p>Prénom : {user.prenom}</p>
                                    <br />
                                    <p className="p-alignright">Nom de famille : {user.name}</p>
                                    <br />
                                </div>
                                <div className="moncompte-info">
                                    <p>Nom d'utilisateur : {user.username}</p>
                                    <br />
                                    <p className="p-alignright">
                                        Sexe :{" "}
                                        {user.sexe === "O"
                                            ? "Autre"
                                            : user.sexe === "F"
                                            ? "Femme"
                                            : user.sexe === "M"
                                            ? "Homme"
                                            : ""}
                                    </p>
                                    <br />
                                </div>
                                <div className="moncompte-info">
                                    <p>Adresse : {user.adresse}</p>
                                    <br />
                                    <p className="p-alignright">Code postal : {user.code_postal}</p>
                                    <br />
                                </div>
                            </div>
                        ) : (
                            <div>Pas d'informations</div>
                        )}
                        <div id="ct">
                            <a id="a1"></a>
                            <a id="a2"></a>
                            <a href="#a1" id="l1">
                                Mes billets
                            </a>{" "}
                            <a href="#a2" id="l2">
                                Historique
                            </a>{" "}
                            <p class="p1">Mes billets...</p>
                            <p class="p2">Historique</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="label">Prénom</div>
                        <Input
                            label=""
                            className="input"
                            value={user.prenom || ""}
                            onChange={e => {
                                setUser({ ...user, prenom: e.target.value })
                            }}
                        />
                        <div className="label">Nom</div>
                        <Input
                            label=""
                            className="input"
                            value={user.name || ""}
                            onChange={e => {
                                setUser({ ...user, name: e.target.value })
                            }}
                        />
                        <div className="label">Nom d'utilisateur</div>
                        <Input
                            label=""
                            className="input"
                            value={user.username || ""}
                            onChange={e => {
                                setUser({ ...user, username: e.target.value })
                            }}
                        />
                        <label className="label">Sexe</label>
                        <br />
                        <select
                            onClick={e => {
                                setUser({ ...user, sexe: e.target.value })
                            }}
                            name="pets"
                            id="pet-select"
                        >
                            <option value="O">O</option>
                            <option value="F">F</option>
                            <option value="M">M</option>
                        </select>
                        <div className="label">Adresse</div>
                        <Input
                            label=""
                            className="input"
                            value={user.adresse || ""}
                            onChange={e => {
                                setUser({ ...user, adresse: e.target.value })
                            }}
                        />
                        <div className="col">
                            <Button
                                title="Enregistrez les modifications"
                                onClick={() => updateCompte()}
                                className="btn"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MonCompte
