import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import "./Partners.css";
import M83 from './assets/M83.webp';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PlanDuSite from './PlanDuSite';
import Event from './event';



// export default function Partners() {
//   const partners = [
//     'https://www.orangetechcollege.net/UserFiles/Servers/Server_86919/Image/Partners/4Rivers.png',
//     'https://www.orangetechcollege.net/UserFiles/Servers/Server_86919/Image/Partners/AVT.png',
//   ];


<Header/>

const Main = () => {
  return (
    <main className="main-content">
      <section className="title-section">
        <h1 className="title">Le Billy</h1>
      </section>
      <section className="main-events">
        <div className="section-title">
          <h2>Les plus gros événements</h2>
         
          <span></span>
       
        </div>
        <div className="image-section">
          <img src={M83} alt="Description" />
          <button className="btn-primary">Voir plus</button>
        </div>
      </section>
      <section className="upcoming-events">
        <div className="section-title">
          <h2>Événements à venir</h2>
          <span></span>
        </div>
        <button className="btn-primary">Voir plus</button>
      </section>
      <section className="newsletter">
        <div className="section-title">
          <h2>Inscription à la Newsletter</h2>
          <span></span>
        </div>
        <form>
          <input type="email" placeholder="Votre email" />
          <button type="submit" className="btn-secondary">S'inscrire</button>
        </form>
      </section>
      <section className="partners">
        <div className="section-title">
          <h2>Partenaires</h2>
          <span></span>
        </div>
        <div className="logo-slider">
        <div className="logo-slide-track">
          {/* {partners.map((partner, index) => (
            <div className="slide" key={index}>
              <img src={partner} alt="" />
            </div>
          ))} */}
        </div>
      </div>
      </section>
    </main>
  );
};


<Footer/>

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/event" element={<Event />} />
          <Route path="/plan-du-site" element={<PlanDuSite />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
