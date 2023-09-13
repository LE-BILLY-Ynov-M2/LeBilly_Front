import React, { useState } from "react"
import Input from "../../components/others/input/input"
import Button from "../../components/others/button/button"

const Resetpassword = () => {
    const [password, setPassword] = useState({})
    return (
        <div>
            <p>Mettez à jour votre mot de passe</p>
            <Input
                label="Mot de passe"
                type="password"
                onChange={e => {
                    setPassword({ ...password, password: e.target.value })
                }}
            />
            <Button title="Envoyer" />
        </div>
    )
}

export default Resetpassword
