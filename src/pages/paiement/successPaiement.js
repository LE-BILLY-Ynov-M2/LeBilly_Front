import React, { useContext, useState, useEffect } from "react"
import QRCode from 'qrcode.react';
import userService from "../../services/user.service"
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import "./paiement.scss"
import Button from "../../components/others/button/button"
import { useNavigate } from "react-router-dom"
import { AiOutlineLogout } from "react-icons/ai"
import html2pdf from 'html2pdf.js';
import EventService from "../../services/event.service";



const SuccessPaiement = () => {
    const [event, setEvent] = useState({});
    const { userContext } = useContext(AuthContext)
    const [user, setUser] = useState({})
    console.log("userContext:", userContext)
    const navigate = useNavigate()
    const [uniqueQRValue, setUniqueQRValue] = useState('');
    const generatePDF = () => {
        const content = document.getElementById("pdf-content");
        const pdf = html2pdf().from(content).outputPdf();
        pdf.save("information.pdf");
    };
    useEffect(() => {
        if (userContext && userContext.id) {
            userService.getUser(userContext.id)
            .then(data => {
                setUser(data)
            })
            .catch(err => {
                console.log(err)
            })
             const storedEventId = localStorage.getItem("eventId");
             if (storedEventId) {
                // Appelez ici votre service pour obtenir les détails de l'événement
                EventService.getIdEvent(storedEventId).then(data => {
                    setEvent(data);
                })
                
            }
            const newValue = `${userContext.id}-${new Date().toISOString()}`;
            setUniqueQRValue(newValue);
        }
    }, [userContext])
    return (
        <div className="bloc">
            <div className="container">
                <h1 className="text">Sucess paiement</h1>

                <Button
                    className="btn btn-blue"
                    title="Générer PDF"
                    onClick={generatePDF}
                />
                <Button
                    className="btn btn-blue"
                    title="Retour Accueil"
                    onClick={() => {
                        navigate("/")
                    }}
                />
          <div id="pdf-content">
                    {userContext && userContext.token ? (
                        <>
                            {user ? (
                                <div>
                                    <p>Prénom : {user.prenom}</p>
                                    <p>Nom de famille : {user.name}</p>
                                    <p>Email : {user.email}</p>
                                    <p>Nom de l'artiste : {event.name_artist}</p>
                                    <QRCode value={uniqueQRValue} />
                                </div>
                            ) : null}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default SuccessPaiement
