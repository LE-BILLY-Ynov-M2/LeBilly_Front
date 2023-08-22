import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payement from "../../assets/payments.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">LE BILLY</div>
                    <div className="text">
                         
                    </div>
                </div>
                <div className="col">
                    <div className="title">Engagement qualité</div>
                    <span className="text"></span>
                    <span className="text">Billets officiels et 100% garantis</span>
                    <span className="text">Paiements sécurisés à 100%</span>
                    <span className="text">(Service de paiement en ligne sécurisé)</span>
                    <span className="text"></span>
                    <span className="text"></span>
                </div>
                <div className="col">
                    <div className="title">Informations légales</div>
                    <span className="text"></span>
                    <span className="text">Politique de confidentialité</span>
                    <span className="text">Données personnelle & cookies</span>
                    <span className="text">Préférences de cookiees</span>
                    <span className="text">CGU</span>
                    <span className="text">CGV</span>
                </div>
                <div className="col">
                    <div className="title">Adresse et Contact</div>
                    <div className="c-items">
                        <FaMobileAlt />
                        <div className="text">
                            Téléphone : 01 41 20 69 57
                        </div>
                    </div>
                    <div className="c-items">
                        <FaLocationArrow />
                        <div className="text">
                            Adresse : 23 boulevard de Cluny ZI Breizh Cola, 22 200 GUINGAMP
                        </div>
                    </div>
                    
                    <div className="c-items">
                        <FaEnvelope />
                        <div className="text">
                            E-mail : titrerncp@ynov.com
                        </div>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            Le BILLY CREATED BY © SWANN, MELLY, ALASSANE and YANNIS
                        </div>
                        <img src={Payement} alt=""/>
                    </div>
                </div>
            </div>                        
        </footer>
    );
};

export default Footer;