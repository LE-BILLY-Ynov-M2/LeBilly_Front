import React from 'react';
import './App.css';
import './PlanDuSite.css';
import "./Partners.css";



function PresentationEvenement(props) {
  return (
    <div className="presentation">
       <div className="content-section">
       <img src={props.image} alt={props.artiste} className="presentation-image"/>
      <h2>{props.artiste}</h2>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src={props.videoURL} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
       </div>
       <div className="sticky-section">
    <p><strong>Dates : </strong>{props.dates.join(', ')}</p>
    <p><strong>À partir de : </strong>{props.prix}€</p>
    <div className="achat-ticket">
      <a href={props.lienPlaceMinute} target="_blank" rel="noopener noreferrer">Acheter des places</a>
    </div>
  </div>
</div>
  );
}


export default PresentationEvenement;
