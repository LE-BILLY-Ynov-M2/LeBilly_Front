import { useState } from 'react';

export const billets_plafond = 2000;



export const useEventState = (initialValue = []) => {
  const [events, setEvents] = useState(initialValue);
  return [events, setEvents];
};

export const useViewState = (initialValue = null) => {
    const [viewingEvent, setViewingEvent] = useState(initialValue);
    return [viewingEvent, setViewingEvent];
  };

export const handleBuyTicket = (
    eventToBuy, 
    events, 
    setEvents, 
    setViewingEvent, 
    billets_plafond
  ) => {
    console.log("handleBuyTicket called", eventToBuy);
    const newEvents = [...events];
    const index = newEvents.findIndex(event => event === eventToBuy);
  
    if (index === -1) {
      console.log("Event not found");
      return;
    }
  
    // Si billetsVendus est undefined, l'initialiser à 0
    if (typeof newEvents[index].billetsVendus === 'undefined') {
      newEvents[index].billetsVendus = 0;
    }
  
    console.log("Current billetsVendus:", newEvents[index].billetsVendus);
    console.log("Billets plafond:", billets_plafond);
  
    if (newEvents[index].billetsVendus < billets_plafond) {
      newEvents[index].billetsVendus += 1;
      setEvents(newEvents);
      setViewingEvent(newEvents[index]); // Met à jour viewingEvent
      localStorage.setItem('events', JSON.stringify(newEvents));
    } else {
      console.log("Max tickets reached");
    }
  };

  export const buyTicket = (eventToBuy, events, setEvents, setViewingEvent, billets_plafond) => {
    handleBuyTicket(eventToBuy, events, setEvents, setViewingEvent, billets_plafond);
  };
  
  
  