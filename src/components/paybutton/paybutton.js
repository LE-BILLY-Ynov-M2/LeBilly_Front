import React, { useState } from "react"
import Button from "../others/button/button"
import CheckoutService from "../../services/checkout.service"

const Paybutton = ({ event }) => {
    const [showExternalContent, setShowExternalContent] = useState(true)

    // const xx = () => {
    //     const timer = setTimeout(() => {
    //         setShowExternalContent(false)

    //         // Redirection vers une autre page après 30 secondes
    //         window.location.replace("http://localhost:3000/infosPratique")
    //         // window.location.href = "/nouvelle-page" // Remplacez '/nouvelle-page' par l'URL de redirection souhaitée
    //     }, 20000) // 30 000 millisecondes (30 secondes)

    //     return () => clearTimeout(timer)
    // }

    const handleCheckout = () => {
        // Afficher l'URL externe pendant 30 secondes
        // window.location.replace("https://www.youtube.com/watch?v=AvK6HHfo-gk")
        // xx()
        const token =
            "pk_test_51KHlAcApycYj76sxArdTghbkN5Y3RZLvz8Q6seu4PLHU9h8NjtAckJGGQxhPsTJO5Ad4SuH8Ix3MA0t39brgHOBt00MZ8UpbVV"
        CheckoutService.createCheckoutSession(token, event, 1)
            .then(res => {
                window.location.replace(res.message.receipt_url)
                // if (res.url) {
                //     window.location.href = res.url
                // }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Button className="btn btn-blue" title="Payer" onClick={() => handleCheckout()} />
        </div>
    )
}

export default Paybutton
