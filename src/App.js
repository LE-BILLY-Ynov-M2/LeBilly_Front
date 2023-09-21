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
import EventService from "./services/event.service"
import { useNavigate } from "react-router-dom"
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
import Button from "./components/others/button/button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function formatDate(start, end) {
    const options = { day: "numeric", month: "long", year: "numeric" }

    const startDate = new Date(start)
    const endDate = new Date(end)

    const startStr = startDate.toLocaleDateString("fr-FR", options)
    const endStr = endDate.toLocaleDateString("fr-FR", options)

    const sameDay =
        startDate.getDate() === endDate.getDate() &&
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getFullYear() === endDate.getFullYear()

    const sameMonth =
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getFullYear() === endDate.getFullYear()

    if (sameDay) {
        return `Le ${startStr}`
    } else if (sameMonth) {
        const endDay = endDate.getDate()
        return `Du ${startDate.getDate()} au ${endDay} ${startStr.split(" ")[1]} ${
            startStr.split(" ")[2]
        }`
    } else {
        return `Du ${startStr} \nau ${endStr}`
    }
}
// Flèche précédente
function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div className={`${className} custom-arrow`} style={{ ...style }} onClick={onClick}>
            <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1">
                <g
                    id="prev"
                    transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)"
                >
                    <polygon
                        className="arrow"
                        points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                    ></polygon>
                    <polygon
                        className="arrow-fixed"
                        points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                    ></polygon>
                </g>
            </svg>
        </div>
    )
}

// Flèche suivante
function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div className={`${className} custom-arrow`} style={{ ...style }} onClick={onClick}>
            <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1">
                <g>
                    <polygon
                        className="arrow"
                        points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                    ></polygon>
                    <polygon
                        className="arrow-fixed"
                        points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                    ></polygon>
                </g>
            </svg>
        </div>
    )
}

// Paramètres du carrousel
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
}

const Main = () => {
    ;<script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=22ee25a3-bee1-41c5-9cc7-4fb6ead5549b"
    >
        {" "}
    </script>
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        EventService.getAllEvents()
            .then(data => {
                setEvents(data)
            })
            .catch(err => console.log(err))
    }, [])
    const directionIdEvent = id => {
        navigate(`/programmation/${id}`)
    }
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
                <Slider {...settings}>
                    {events
                        ? events
                              .filter(
                                  element =>
                                      element.is_featured_artist === true ||
                                      element.is_featured_artist === null,
                              )
                              .map(element => (
                                  <div key={element.id}>
                                      <Button
                                          className="event-button"
                                          onClick={() => {
                                              directionIdEvent(element.id)
                                          }}
                                      >
                                          <div className="image-container">
                                              <div className="inner-container">
                                                  <img
                                                      className="imageEvent"
                                                      src={element.photo_artist}
                                                      alt="photo artiste"
                                                  />
                                                  <h2
                                                      className="artiste-name"
                                                      dangerouslySetInnerHTML={{
                                                          __html: formatDate(
                                                              element.date_start,
                                                              element.date_end,
                                                          ).replace("\n", "<br>"),
                                                      }}
                                                  ></h2>
                                              </div>
                                              <h2 className="artiste-name2">
                                                  {element.name_artist}
                                              </h2>
                                          </div>
                                      </Button>
                                  </div>
                              ))
                        : ""}
                </Slider>
            </section>
            <section className="upcoming-events">
                <div className="section-title">
                    <h2>Événements à venir</h2>
                    <span></span>
                </div>
                <div className="events-grid">
                {events.slice(0, 4).map(element => (
                 <div key={element.id} className="event-column">
                 <Button
                 className="event-button"
                     onClick={() => {
                         directionIdEvent(element.id)
                     }}
                 >
                   <div className="image-container">
                   <div className="inner-container">
                     <img
                         className="imageEvent"
                         src={element.photo_artist}
                         alt="photo artiste"
                     />
                          <h2 className="artiste-name" dangerouslySetInnerHTML={{ __html: formatDate(element.date_start, element.date_end).replace('\n', '<br>') }}></h2>
                          </div>
                          <h2 className="artiste-name2">{element.name_artist}</h2>
                          <h2 className="artiste-name2">{element.nbre_place}</h2>
                          </div>
                 </Button>
             </div>
    ))}
    </div>
    <Link to="/programmation" className="btn-primary">
    Voir plus
</Link>
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
                <div className="logo-slider"></div>
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
