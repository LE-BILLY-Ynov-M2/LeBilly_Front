import React, { useState, useContext } from "react"
import Button from "../others/button/button"
import CheckoutService from "../../services/checkout.service"
import "../../ticket.scss"
import userService from "../../services/user.service"
import AuthContext from "../../context/AuthContext"

const Paybutton = ({ event }) => {
    const [showExternalContent, setShowExternalContent] = useState(true)
    const { userContext } = useContext(AuthContext)

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
        // var tab = []
        var user = {}
        console.log(userContext.id)
        userService
            .getUser(userContext.id)
            .then(data => {
                console.log(data)
                CheckoutService.createCheckoutSession(token, tab, event.id, userContext.id)
                    .then(res => {
                        if (res.url) {
                            window.location.href = res.url
                        }
                    })
                    .catch(err => console.log(err))
                tab = data.events_user
            })
            .catch(err => console.log(err))
        const token = "c70f191c-d31b-4530-8d04-f8c81ce10b56"
        var tab = []
        tab.push(event)
        // CheckoutService.createCheckoutSession(token, tab, 1)
        //     .then(res => {
        //         // console.log(res)
        //         // if (res.url) {
        //         //     var tab = []
        //         //     userService
        //         //         .getUser(event.id)
        //         //         .then(data => {
        //         //             tab = data.events_user
        //         //         })
        //         //         .catch(err => console.log(err))
        //         //     tab.push(event)
        //         //     userService
        //         //         .updateUser(event.id, tab)
        //         //         .then(data => {
        //         //             console.log(data)
        //         //         })
        //         //         .catch(err => console.log(err))
        //         //     window.location.replace(res.url)
        //         // }
        //         if (res.url) {
        //             window.location.href = res.url
        //         }
        //     })
        //     .catch(err => console.log(err))
    }
    return (
        <div>
            {/* <Button className="btn btn-blue" title="Payer" onClick={() => handleCheckout()} /> */}
            <div className="tixContainer">
                <div className="tix" onClick={() => handleCheckout()}>
                    <div className="tixInner">
                        <span>
                            <strong>Réserver</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paybutton
