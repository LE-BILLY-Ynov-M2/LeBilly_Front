import React, { useState, useContext } from "react"
import Button from "../others/button/button"
import CheckoutService from "../../services/checkout.service"
import "../../ticket.scss"
import userService from "../../services/user.service"
import AuthContext from "../../context/AuthContext"

const Paybutton = ({ event }) => {
    const [showExternalContent, setShowExternalContent] = useState(true)
    const { userContext } = useContext(AuthContext)

    const handleCheckout = () => {
        var tab = []
        var user = {}
        tab.push(event)
        console.log(userContext.id)
        var token = userContext.token

        userService
            .getUser(userContext.id)
            .then(data => {
                console.log(data)
                CheckoutService.createCheckoutSession(token, tab, 1, userContext.id)
                    .then(res => {
                        if (res.url) {
                            window.location.href = res.url
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
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
