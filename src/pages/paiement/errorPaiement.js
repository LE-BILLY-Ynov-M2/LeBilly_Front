import React from "react"
import "./paiement.scss"
import Button from "../../components/others/button/button"
import { useNavigate } from "react-router-dom"

const ErrorPaiement = () => {
    const navigate = useNavigate()
    return (
        <div className="bloc">
            <div className="container">
                <h1 className="text">Error paiement</h1>
                <Button
                    className="btn btn-blue"
                    title="Retour Accueil"
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </div>
        </div>
    )
}

export default ErrorPaiement
