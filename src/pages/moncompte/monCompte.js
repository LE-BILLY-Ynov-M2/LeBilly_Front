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
    const [billets, setBillets] = useState([])
    const [billetsHistorique, setBilletsHistorique] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        userService
            .getUser(userContext.id)
            .then(data => {
                setUser(data)
                let dateToday = new Date()

                // for (let i = 0; i < data.evenements; i++) {
                //     if (
                //         Number(i.date_end.substr(0, 4)) >=
                //             Number(dateToday.getFullYear().toString()) &&
                //         Number(i.date_end.substr(5, 2)) >=
                //             Number(dateToday.getMonth().toString()) + 1 &&
                //         Number(i.date_end.substr(8, 2)) >= Number(dateToday.getDate().toString())
                //     ) {
                //         setBillets([...billets, i])
                //     } else {
                //         setBilletsHistorique([...billetsHistorique, i])
                //     }
                // }
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
                    <>
                        {user ? (
                            <>
                                <div>
                                    <div className="item-moncompte">
                                        <div className="moncompte-info">
                                            <p>Prénom : {user.prenom}</p>
                                        </div>

                                        <br />
                                        <div className="col-4">
                                            <p className="p-alignright">
                                                Nom de famille : {user.name}
                                            </p>

                                            <br />
                                        </div>
                                    </div>

                                    <div className="item-moncompte">
                                        <div className="moncompte-info">
                                            <p>Nom d'utilisateur : {user.username}</p>
                                        </div>
                                        <br />
                                        <div className="col-4">
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
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="col-4">
                                    <div className="moncompte-info">
                                        <p>Adresse : {user.adresse}</p>
                                        <br />
                                    </div>
                                    <br />
                                    <div className="col-4">
                                        <p className="p-alignright">
                                            Code postal : {user.code_postal}
                                        </p>
                                        <br />
                                    </div>
                                </div>
                            </>
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
                            {
                                // <p class="p1">Mes billets...</p> /*
                                // <p class="p2">Historique</p>
                            }
                            <div class="div1">
                                {billets ? (
                                    billets.map(element => (
                                        <div class="div2" key={element.id}>
                                            <Button
                                                onClick={() => {
                                                    navigate("/programmation/" + element.id)
                                                }}
                                            >
                                                <img
                                                    className="photoArtiste"
                                                    src={element.photo_artist}
                                                    alt="Photo artiste"
                                                />

                                                <p class="p1">oooooooooooo</p>
                                                <p>{element.name_artist}</p>
                                            </Button>
                                        </div>
                                    ))
                                ) : (
                                    <div class="div2">
                                        <p class="p1">Pas de billets</p>
                                        <h1>
                                            jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                                        </h1>
                                    </div>
                                )}
                            </div>
                            {billetsHistorique ? (
                                billetsHistorique.map(element => (
                                    <div class="p2" key={element.id}>
                                        <img
                                            className="photoArtiste"
                                            src={element.photo_artist}
                                            alt="Photo artiste"
                                        />
                                        <p>{element.name_artist}</p>
                                    </div>
                                ))
                            ) : (
                                <div class="p2">
                                    <p>Pas d'historique</p>
                                </div>
                            )}
                        </div>
                    </>
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
                        <br />
                        <div className="label">Nom</div>
                        <Input
                            label=""
                            className="input"
                            value={user.name || ""}
                            onChange={e => {
                                setUser({ ...user, name: e.target.value })
                            }}
                        />
                        <br />
                        <div className="label">Nom d'utilisateur</div>
                        <Input
                            label=""
                            className="input"
                            value={user.username || ""}
                            onChange={e => {
                                setUser({ ...user, username: e.target.value })
                            }}
                        />
                        <br />
                        <label className="label">Sexe</label>
                        <br />
                        <select
                            onClick={e => {
                                setUser({ ...user, sexe: e.target.value })
                            }}
                            name="pets"
                            id="pet-select"
                        >
                            <option value=""></option>
                            <option value="O">Ne se prononce pas</option>
                            <option value="F">Femme</option>
                            <option value="M">Homme</option>
                        </select>
                        <br />
                        <br />
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
