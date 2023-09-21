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

function formatDate(start, end) {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    
    const startDate = new Date(start);
    const endDate = new Date(end);
  
    const startStr = startDate.toLocaleDateString('fr-FR', options);
    const endStr = endDate.toLocaleDateString('fr-FR', options);
  
    const sameDay = startDate.getDate() === endDate.getDate() &&
                    startDate.getMonth() === endDate.getMonth() &&
                    startDate.getFullYear() === endDate.getFullYear();
    
    if (sameDay) {
      return `Le ${startStr.split(' à ')[0]} de ${startStr.split(' à ')[1]} à ${endStr.split(' à ')[1]}`;
    } else {
      return `Du ${startStr} \nau ${endStr}`;
    }
  }

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
    <div className="centerContent">
                                       <section className="title-section">
                <h1 className="title">Le Billy</h1>
            </section>
            <h1>Artiste : {event.name_artist}</h1>
            <br></br>

                                    <p>Prénom : {user.prenom}</p>
                                    <p>Nom de famille : {user.name}</p>
                                    <p>Email : {user.email}</p>
                                    <h2 className="dates-info" dangerouslySetInnerHTML={{ __html: formatDate(event.date_start, event.date_end).replace('\n', '<br>') }}></h2>
                                    <h2 className="prix-info"><strong>{`${event.price_artist}€`}</strong></h2>
                                    <QRCode className="qrCode" value={uniqueQRValue} size={300} />
                                    <img className="eventImage" src={event.photo_artist} alt="photo artiste" style={{ width: "500px", height: "auto", borderRadius: "40px" }} />
                                  
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
