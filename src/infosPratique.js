import React from "react"
import Geolocalization from "./components/others/geolocalization/geolocalization"

const InfosPratique = () => {
    return (
        <div>
            <h1>Accès</h1>
            <p>
                La salle le Billy se trouve sur la place de la mairie au centre de la ville de
                Guingamp.
            </p>
            <Geolocalization />
            <h3>Pour information, voici quelques durées moyennes de trajet :</h3>
            <p>
                Cherbourg : 1h00
                <br />
                Caen : 50mn
                <br />
                Rennes : 1h30mn
                <br />
                Le Mans : 2h40mn
                <br />
                Paris : 3h00
            </p>
        </div>
    )
}

export default InfosPratique
