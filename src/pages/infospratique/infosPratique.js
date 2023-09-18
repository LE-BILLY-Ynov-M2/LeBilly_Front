import React from "react"
import Geolocalization from "../../components/others/geolocalization/geolocalization"
import "./infosPratique.scss"

const InfosPratique = () => {
    return (
        <div className="bloc-info">
            <div className="container-info">
                <h1 className="title-info">Accès</h1>
                <p className="p">
                    La salle le Billy se trouve sur la place de la mairie au centre de la ville de
                    Guingamp.
                </p>
                <div className="map">
                    <Geolocalization />
                </div>
                <h3 className="h3">
                    Pour votre information, voici quelques durées moyennes de trajet :
                </h3>
                <p className="cities">
                    <div>Cherbourg : 1h00</div>
                    <br />
                    <div>Caen : 50mn</div>
                    <br />
                    <div>Rennes : 1h30mn</div>
                    <br />
                    <div>Le Mans : 2h40mn</div>
                    <br />
                    <div>Paris : 3h00</div>
                </p>
            </div>
        </div>
    )
}

export default InfosPratique
