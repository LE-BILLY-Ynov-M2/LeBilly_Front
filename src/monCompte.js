import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Login from "./login"

const MonCompte = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/login")
    })

    return <div>{/* <Login /> */}</div>
}

export default MonCompte
