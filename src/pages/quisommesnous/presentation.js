import React from "react"
import "./presentation.scss"
import salle from "../../assets/salle.jpg"
import interieur2 from "../../assets/interieur2.jpg"

const Presentation = () => {
    return (
        <div className="bloc-pres">
            <div className="container-pres">
                <h1 className="title-pres">
                    Bienvenue dans notre salle de concert dédiée aux magnifiques musiques bretonnes
                    !
                </h1>
                <p className="p-pres">
                    En tant qu'entreprise passionnée par la culture bretonne, nous sommes ravis de
                    vous proposer une sélection exceptionnelle de billets de spectacles mettant en
                    avant la richesse et la diversité artistique de la Bretagne. Immergez-vous dans
                    l'âme vibrante de la Bretagne à travers nos spectacles captivants. Découvrez la
                    richesse de notre programmation, mettant en avant des artistes talentueux qui
                    vous feront danser au rythme envoûtant des danses traditionnelles et vous
                    transporteront avec des mélodies émouvantes. Plongez dans l'univers de la
                    musqiue celtique, au coeurs d'une atmosphère chaleureuse et authentique.
                    <br />
                    <br />
                    <img src={salle} alt="la salle" />
                    <div className="italique">Notre salle de spectacles</div>
                    <br />
                    <br />
                    Rejoingnez nous pour une expérience unique, où la passion musicale bretonne
                    prend vie sur notre scène. En choisissant LeBilly, vous rejoignez une communauté
                    passionnée, amoureux de la Bretagne et notre mission est de vous offrir un accès
                    privilégié aux événements musicaux. Suivez-nous pour des mises à jour sur les
                    derniers événements, des interviews exclusives d'artistes et des anecdotes
                    captivantes sur la scène musicale bretonne. Ensemble, nous construisons un pont
                    entre le passé et l'avenir de la musique. Avec LeBilly, chaque billet est une
                    invitation à un voyage musical exceptionnel.
                    <br />
                    <br />
                    <img src={interieur2} alt="interieur" />
                    <div className="italique">Ovation pour Les Ramoneurs de menhirs</div>
                    <br />
                    <br />
                    Rejoignez-nous pour créer des souvenirs mémorables au rythme envoûtant de la
                    Bretagne.
                </p>
            </div>
        </div>
    )
}

export default Presentation
