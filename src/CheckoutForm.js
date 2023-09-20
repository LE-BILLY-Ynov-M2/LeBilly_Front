import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ prix, nombreDeBillets }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  
    if (!stripe || !elements) {
      return;
    }
  
    const card = elements.getElement(CardElement);
  
    // Créez une intention de paiement en appelant votre serveur
    const response = await fetch('http://localhost:3001/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: prix * 100,
        email,
        firstName,
        lastName,
      }),
    });
  
    const data = await response.json();
  
    // Utilisez le clientSecret pour confirmer le paiement côté client
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: card,
      },
    });
  
    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Paiement réussi !');
        // Afficher les informations ou rediriger l'utilisateur
        alert(`Paiement réussi ! 
        Merci ${firstName} ${lastName}.
        E-mail : ${email}
        Nombre de billets : ${nombreDeBillets}  // Assurez-vous que cette variable existe et a la bonne valeur
        Montant total : ${prix}€`);
}
      
    }
    setIsSubmitting(false);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="firstName">Prénom</label>
        <input 
          type="text" 
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Nom de famille</label>
        <input 
          type="text" 
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="card-element">Informations de carte de crédit</label>
        <CardElement id="card-element" />
      </div>
      <button type="submit" disabled={!stripe || isSubmitting}>
        Acheter
      </button>
    </form>
  );
};

export default CheckoutForm;