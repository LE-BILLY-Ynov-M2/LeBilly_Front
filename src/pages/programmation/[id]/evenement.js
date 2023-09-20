import React, { useState, useEffect } from "react"
import EventService from "../../../services/event.service"
import Button from "../../../components/others/button/button"
import Paybutton from "../../../components/paybutton/paybutton"

const Evenement = () => {
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
                <div>
                    <p>{event.name_artist}</p>
                    <img src={event.photo_artist} alt="photo artiste" />
                    <p>{event.designation_artist}</p>
                    <p>{event.price_artist} euros</p>
                    <p>
                        {event.date_start} / {event.date_end}
                    </p>
                    <Paybutton event={event} />
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default Evenement
