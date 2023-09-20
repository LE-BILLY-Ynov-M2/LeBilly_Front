import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./components/Footer/Footer"
import "./App.scss"
import "./Partners.css"
import M83 from "./assets/M83.webp"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import PlanDuSite from "./PlanDuSite"
import Event from "./event"
import Login from "./pages/authentification/login"
import Register from "./pages/authentification/register"
import VerifCode from "./pages/authentification/verifCode"
import { AuthContextProvider } from "./context/AuthContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import EventPage from "./EventPage"

// export default function Partners() {
//   const partners = [
//     'https://www.orangetechcollege.net/UserFiles/Servers/Server_86919/Image/Partners/4Rivers.png',
//     'https://www.orangetechcollege.net/UserFiles/Servers/Server_86919/Image/Partners/AVT.png',
//   ];
import MonCompte from "./pages/moncompte/monCompte"
import Presentation from "./pages/quisommesnous/presentation"
import Faq from "./faq"
import InfosPratique from "./pages/infospratique/infosPratique"
import ForgotPassword from "./pages/authentification/forgotPassword"
import Resetpassword from "./pages/authentification/resetpassword"
import Photos from "./pages/photos/photos"
import Programmation from "./pages/programmation/programmation"
import Evenement from "./pages/programmation/[id]/evenement"
import SuccessPaiement from "./pages/paiement/successPaiement"
import ErrorPaiement from "./pages/paiement/errorPaiement"

const Main = () => {
    ;<script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=22ee25a3-bee1-41c5-9cc7-4fb6ead5549b"
    >
        {" "}
    </script>
    const [events, setEvents] = useState([])

    useEffect(() => {
        const storedEvents = localStorage.getItem("events")
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents))
        }
    }, [])
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
                <div className="event-cards">
                    {events.map((event, index) => (
                        <div className="event-card" key={index}>
                            <h1>{event.artiste}</h1>
                            <h3>{event.dateDebut}</h3>
                            <img
                                src={event.image}
                                alt={event.name}
                                style={{ width: "250px", height: "auto" }}
                            />

                            <p>{event.date}</p>
                            <Link
                                to={`/event/${encodeURIComponent(
                                    event.artiste,
                                )}/${encodeURIComponent(event.dateDebut)}`}
                            >
                                <button className="btn-primary">Réserver</button>
                            </Link>
                        </div>
                    ))}
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
                    <button type="submit" className="btn-secondary">
                        S'inscrire
                    </button>
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
    )
}

const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} exact />
                        <Route path="/event/:artiste/:dateDebut" element={<EventPage />} />
                        <Route path="/event" element={<Event />} />
                        <Route path="/photos" element={<Photos />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/plan-du-site" element={<PlanDuSite />} />
                        <Route path="/monCompte" element={<MonCompte />} />
                        <Route path="/presentation" element={<Presentation />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/verifCode" element={<VerifCode />} />
                        <Route path="/infosPratique" element={<InfosPratique />} />
                        <Route path="/forgotPassword" element={<ForgotPassword />} />
                        <Route path="/resetpassword" element={<Resetpassword />} />
                        <Route path="/reset-password/:token" element={<Resetpassword />} />
                        <Route path="/programmation" element={<Programmation />} />
                        <Route path="/programmation/:id" element={<Evenement />} />
                        <Route path="/successPaiement" element={<SuccessPaiement />} />
                        <Route path="/errorPaiement" element={<ErrorPaiement />} />
                    </Routes>
                    <Footer />
                    <ToastContainer />
                </div>
            </Router>
        </AuthContextProvider>
    )
}

export default App
