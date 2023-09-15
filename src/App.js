import React from "react"
import Header from "./Header"
import Footer from "./components/Footer/Footer"
import "./App.css"
import "./Partners.css"
import M83 from "./assets/M83.webp"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import PlanDuSite from "./PlanDuSite"
import Event from "./event"
import Login from "./pages/authentification/login"
import Register from "./pages/authentification/register"
import VerifCode from "./pages/authentification/verifCode"
import { AuthContextProvider } from "./context/AuthContext"

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
import ListeClients from "./pages/admin/listeClients/listeClients"
import ModifClient from "./pages/admin/listeClients/[id]"
import AjoutClient from "./pages/admin/listeClients/ajoutClient/ajoutClient"
;<Header />

const Main = () => {
    ;<script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=22ee25a3-bee1-41c5-9cc7-4fb6ead5549b"
    >
        {" "}
    </script>
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

;<Footer />

const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} exact />
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
                        <Route path="/listeClients" element={<ListeClients />} />
                        <Route path="/listeClients/:id" element={<ModifClient />} />
                        <Route path="/ajoutClient" element={<AjoutClient />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </AuthContextProvider>
    )
}

export default App
