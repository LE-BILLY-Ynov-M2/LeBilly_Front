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
                <div className="cities">
                    <div>
                        <p className="p">Saint-Brieuc : 30min</p>
                        <p className="p">Lannion : 30min</p>
                        <p className="p">Pontivy : 1h00min</p>
                    </div>
                    <div>
                        <p className="p">Saint-Malo : 1h30min</p>
                        <p className="p">Vannes : 1h50min</p>
                        <p className="p">Nantes : 2h40min</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfosPratique
