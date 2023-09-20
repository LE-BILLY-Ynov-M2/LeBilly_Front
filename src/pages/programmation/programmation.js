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

    return (
        <div>
            {events
                ? events.map(element => (
                      <div key={element.id}>
                          <Button
                              onClick={() => {
                                  directionIdEvent(element.id)
                              }}
                          >
                              <img
                                  className="imageEvent"
                                  src={element.photo_artist}
                                  alt="photo artiste"
                              />
                          </Button>
                      </div>
                  ))
                : ""}
        </div>
    )
}

export default Programmation
