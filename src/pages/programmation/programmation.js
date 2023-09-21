import React, { useState, useEffect } from "react"
import EventService from "../../services/event.service"
import "./programmation.scss"
import Button from "../../components/others/button/button"
import { useNavigate } from "react-router-dom"

const Programmation = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        EventService.getAllEvents()
            .then(data => {
                setEvents(data)
            })
            .catch(err => console.log(err))
    }, [])

    const directionIdEvent = id => {
        navigate(`${id}`)
    }

    function formatDate(start, end) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        
        const startDate = new Date(start);
        const endDate = new Date(end);
      
        const startStr = startDate.toLocaleDateString('fr-FR', options);
        const endStr = endDate.toLocaleDateString('fr-FR', options);
      
        const sameDay = startDate.getDate() === endDate.getDate() &&
                        startDate.getMonth() === endDate.getMonth() &&
                        startDate.getFullYear() === endDate.getFullYear();
        
        const sameMonth = startDate.getMonth() === endDate.getMonth() &&
                          startDate.getFullYear() === endDate.getFullYear();
      
        if (sameDay) {
          return `Le ${startStr}`;
        } else if (sameMonth) {
          const endDay = endDate.getDate();
          return `Du ${startDate.getDate()} au ${endDay} ${startStr.split(' ')[1]} ${startStr.split(' ')[2]}`;
        } else {
          return `Du ${startStr} \nau ${endStr}`;
        }
      }
      

    return (
        <div className="bloc-prog">
            <div className="container-prog">
            <section className="title-section">
                <h1 className="title">Programmation</h1>
            </section>
                <div className="row-prog">
                    <div className="col-md-6">
                        <div className="billy">
                            {events
                                ? events.map(element => (
                                      <div key={element.id}>
                                          <Button
                                          className="event-button"
                                              onClick={() => {
                                                  directionIdEvent(element.id)
                                              }}
                                          >
                                            <div className="image-container">
                                            <div className="inner-container">
                                              <img
                                                  className="imageEvent"
                                                  src={element.photo_artist}
                                                  alt="photo artiste"
                                              />
                                                   <h2 className="artiste-name" dangerouslySetInnerHTML={{ __html: formatDate(element.date_start, element.date_end).replace('\n', '<br>') }}></h2>
                                                   </div>
                                                   <h2 className="artiste-name2">{element.name_artist}</h2>
                                                   <h2 className="artiste-name2">{element.nbre_place}</h2>
                                                   </div>
                                          </Button>
                                      </div>
                                  ))
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programmation
