import React, { useState, useEffect } from "react"
import EventService from "../../../services/event.service"
import Button from "../../../components/others/button/button"
import Paybutton from "../../../components/paybutton/paybutton"
import '../../../App.scss';
import '../../../ticket.scss';
import { useContext } from 'react';
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function extractVideoId(url) {
    if (!url) return null;
    try {
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get('v');
    } catch (e) {
        console.error('Invalid URL:', e);
        return null;
    }
}

function convertToEmbedUrl(url) {
    const videoId = extractVideoId(url);
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return ""; // ou null, selon ce qui vous convient le mieux
}

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

const Evenement = () => {
    const { userContext } = useContext(AuthContext);
    const navigate = useNavigate();
    const urlId = window.location.pathname.split("/")[2]
    const [event, setEvent] = useState({})

    useEffect(() => {
        EventService.getIdEvent(urlId).then(data => {
            setEvent(data)
        })
    }, [])

    return (
        <div>
            {event ? (
                <div className="presentation">
                    <div className="container-pres">
                    <div className="content-section">
                    <div className="text-section">
                    <h1 className="artiste-name3">{event.name_artist}</h1>
                    <h2 className="dates-info" dangerouslySetInnerHTML={{ __html: formatDate(event.date_start, event.date_end).replace('\n', '<br>') }}></h2>
            <h2 className="prix-info"><strong>{`${event.price_artist}€`}</strong></h2>
                        </div>
                    <img src={event.photo_artist} alt="photo artiste" style={{ width: "600px", height: "auto",
    borderRadius: "40px"  }} />
                    </div>
                    <div className="content-section2">
                    <div className="text-section">
                    <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src={convertToEmbedUrl(event.url_youtube)}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              
            </div>
                  
                         </div>
                         <div className="description">
              <h2>Présentation </h2><p>{event.designation_artist}</p>
            </div>
            
                        </div>
                        {userContext && userContext.token ? (
                        <Paybutton event={event} />
                    ) : (
                        
                        <Button
                        className="btn btn-elegant"
                            title="Veuillez vous inscrire"
                            onClick={() => {
                                navigate("/register");
                            }}
                        />
                        
                        
                    )}
                        </div>
          
                </div>



            ) : (
                ""
            )}
        </div>
    )
}

export default Evenement
