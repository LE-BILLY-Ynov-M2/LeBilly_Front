import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import './PlanDuSite.css';
import "./Partners.css";
import PresentationEvenement from './typeevent.js';
import M83 from './assets/M83.webp';



const Event = () => {

    return (
<div>

<main>
<PresentationEvenement 
  image={M83}
  artiste="M83"
  dates={['02/04/2024', '03/04/2024']}
  prix="20"
  videoURL="https://www.youtube.com/embed/dX3k_QDnzHE"
  description="En l’espace de deux décennies, M83 s’est définitivement affirmé comme un artiste dont l’œuvre transcende la simple évasion en faveur d’une véritable construction d’un monde imaginaire.
  Aujourd’hui, M83 revient avec Fantasy, premier album à sortir sur Other Suns, tout nouveau label qu’il dirige personnellement. Le neuvième album studio sortira le 17 mars 2023.En l’espace de deux décennies, M83 s’est définitivement affirmé comme un artiste dont l’œuvre transcende la simple évasion en faveur d’une véritable construction d’un monde imaginaire.
  Aujourd’hui, M83 revient avec Fantasy, premier album à sortir sur Other Suns, tout nouveau label qu’il dirige personnellement. Le neuvième album studio sortira le 17 mars 2023."
  lienPlaceMinute="https://www.placeminute.com/link"
/>
</main>

</div>
);
}


export default Event;