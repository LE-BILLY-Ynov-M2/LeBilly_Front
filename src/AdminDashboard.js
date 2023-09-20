import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import { billets_plafond, handleBuyTicket, useEventState, useViewState, buyTicket } from './ticketOperations';


const AdminDashboard = () => {
  const [events, setEvents] = useEventState([]);
  const [viewingEvent, setViewingEvent] = useViewState(null);
  const purchaseTicket = (eventToPurchase) => {
    buyTicket(eventToPurchase, events, setEvents, setViewingEvent, billets_plafond);
  };
  const [newEvent, setNewEvent] = useState({
    artiste: '',
    dateDebut: '',
    dateFin: '',
    prix: '',
    maxBillets: '',
    image: null,
    videoURL: '',
    description: '',
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setNewEvent({
        ...newEvent,
        image: reader.result
      });
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
        ...newEvent,
        billetsVendus: 0,
      };
    const updatedEvents = [...events, updatedEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));


   
    setNewEvent({
      artiste: '',
      dateDebut: '',
      dateFin: '',
      prix: '',
      maxBillets: '',
      image: null,
      videoURL: '',
      description: '',
    });
  };
  const handleDelete = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  const handleEdit = (index) => {
  };
  const handleView = (event) => {
    if (viewingEvent === event) {
      setViewingEvent(null);
    } else {
      setViewingEvent(event);
    }
  };


  const handleResetTickets = (eventToReset) => {
    const newEvents = [...events];
    const index = newEvents.findIndex(event => event === eventToReset);
    
    if (index === -1) {
      console.log("Event not found");
      return;
    }
  
    newEvents[index].billetsVendus = 0;
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  const clearStorage = () => {
    localStorage.clear();
    // Vous pouvez également ajouter un code pour réinitialiser l'état de l'application
    // ou rediriger l'utilisateur, etc.
  };

  return (
    <div>
      <h1>Tableau de bord administrateur</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="artiste"
          placeholder="Nom de l'artiste"
          value={newEvent.artiste}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="dateDebut"
          value={newEvent.dateDebut}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="dateFin"
          value={newEvent.dateFin}
          onChange={handleChange}
        />
        <input
          type="number"
          name="prix"
          placeholder="Prix"
          value={newEvent.prix}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxBillets"
          placeholder="Nombre maximum de billets"
          value={newEvent.maxBillets}
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleImageChange} />
        <input
          type="text"
          name="videoURL"
          placeholder="URL de la vidéo YouTube (optionnel)"
          value={newEvent.videoURL}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newEvent.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Créer un événement</button>
      </form>
      <h2>Liste des événements</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.artiste} 
            <button onClick={() => handleView(event)}>🔍</button>
            <button onClick={() => handleEdit(index)}>✏️</button> 
            <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
      {viewingEvent && (
        <div className="presentation" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="content-section">
            <h2 className="artiste-name">{viewingEvent.artiste}</h2>
            <img src={viewingEvent.image} alt={viewingEvent.artiste} style={{ width: "600px", height: "auto" }} />

            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src={viewingEvent.videoURL} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="description">
              <h2>Présentation </h2><p>{viewingEvent.description}</p>
            </div>
          </div>
          <div className="sticky-section">
            <p className="dates-info"><strong>Dates : </strong>{`${viewingEvent.dateDebut} à ${viewingEvent.dateFin}`}</p>
            <p className="prix-info"><strong>Prix : </strong>{`${viewingEvent.prix}€`}</p>
            <p className="prix-info"><strong>Max billet : </strong>{`${viewingEvent.maxBillets}`}</p>
            <button onClick={() => purchaseTicket(viewingEvent)}disabled={viewingEvent.billetsVendus >= billets_plafond}>
  Acheter un billet
</button>

            <p className="billets-dispo">
    <strong>Nombre de billets dispo : </strong>
    {viewingEvent.billetsVendus >= billets_plafond ? "SOLD OUT !" : `${billets_plafond - viewingEvent.billetsVendus} / ${billets_plafond}`}
  </p>
  <button onClick={() => handleResetTickets(viewingEvent)}>Réinitialiser les billets</button>

          </div>
          <Link to={`/event/${encodeURIComponent(viewingEvent.artiste)}/${encodeURIComponent(viewingEvent.dateDebut)}`}>
              Voir la page de l'événement
            </Link>
            <button onClick={clearStorage}>Réinitialiser le stockage</button>

        </div>
      )}
    </div>
  );
};

export default AdminDashboard;