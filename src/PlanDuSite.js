import React from 'react';
import Header from './Header';
import Footer from './components/Footer/Footer';
import './App.css';
import './PlanDuSite.css';
import "./Partners.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

<Header/>

const PlanDuSite = () => {
  return (
    <main className="main-content">
        <div>
            <h1>Plan du site</h1>
            
            <ul>
                <li>Accueil</li>
                
                <li>Programme
                    <ul>
                        <li>Par artiste
                        </li>
                        <li>Par genre musical
                        </li>
                    </ul>
                </li>
                
                <li>Infos pratiques (Accès)</li>

                <li>Qui sommes-nous?</li>

                <li>F.A.Q</li>

                <li>Mon Compte</li>

            </ul>
        </div>

    </main>
  );
};

<Footer/>

export default PlanDuSite;
