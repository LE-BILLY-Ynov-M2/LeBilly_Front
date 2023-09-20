import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import './App.scss';
import { decrementTicketCount, handleBuyTicket } from './ticketOperations';

const stripePromise = loadStripe('pk_test_51KJy37GGwtsWgxa7ksMJUfHXXj3ucIE6H3KNbwaV9VdZehvSIwrMmxRn6OL34KRn9cIoeYCgsB8ywAhtCWXN5d2w00HThb5VJm');

const EventPage = () => {
  const { artiste, dateDebut } = useParams();
  const [event, setEvent] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      const events = JSON.parse(storedEvents);
      const foundEvent = events.find(
        (e) => e.artiste === decodeURIComponent(artiste) && e.dateDebut === decodeURIComponent(dateDebut)
      );
      setEvent(foundEvent);
    }
  }, [artiste, dateDebut]);

  useEffect(() => {
    console.log("Event data:", event);
  }, [event]);
  

  const handleTicketChange = (e) => {
    setNumberOfTickets(e.target.value);
    console.log("Number of tickets:", e.target.value);
  };

  if (!event) {
    return <div>Chargement...</div>;
  }

  const totalPrice = numberOfTickets * event.prix;
  

  return (
    <div className="presentation" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div className="content-section">
      {/* Afficher les détails de l'événement ici */}

      <h1 className="artiste-name">{event.artiste}</h1>
      <img src={event.image} alt={event.artiste} style={{ width: "600px", height: "auto" }}/>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src={event.videoURL} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <div className="description">
        <h2>Présentation </h2><p>{event.description}</p>
      </div>
      <div className="sticky-section">
        
      <p className="dates-info"><strong>Dates : </strong>{event.dateDebut} à {event.dateFin}</p>

      <p className="prix-info"><strong>Prix : </strong>{event.prix}€</p>
      </div>
      <label>Nombre de billets:</label>
      <select onChange={handleTicketChange} value={numberOfTickets}>
  {[...Array(Number(event.maxBillets)).keys()].map((_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ))}
</select>


      <p>Prix total : {totalPrice}€</p>
      
      <Elements stripe={stripePromise}>
  <CheckoutForm prix={totalPrice} nombreDeBillets={numberOfTickets} />
</Elements>

    </div>
    </div>
    
  );
};

export default EventPage;