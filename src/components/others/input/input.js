import React, { useState } from "react"

import { FiEye, FiEyeOff } from "react-icons/fi"

const Input = ({ label, type, value, placeholder, required, onChange, className }) => {
    const [hide, setHide] = useState(true)

    const hidePass = e => {
        e.preventDefault()
        if (hide) {
            document.getElementById(label ?? "")?.setAttribute("type", "text")
            setHide(false)
        } else {
            document.getElementById(label ?? "")?.setAttribute("type", "password")
            setHide(true)
        }
    }

    return (
        <div>
            {label && (
                <div>
                    {" "}
                    <label htmlFor={label}>{label}</label>
                </div>
            )}
            <input
                type={type}
                id={label}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                className={className}
            />
            <div>
                {type === "password" && (
                    <button type="button" onClick={hidePass}>
                        {hide ? <FiEyeOff /> : <FiEye />}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Input
