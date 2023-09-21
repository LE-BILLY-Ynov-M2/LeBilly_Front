import React, { useState } from "react"

import { FiEye, FiEyeOff } from "react-icons/fi"

import style from "./input.module.scss"

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
        <>
            {label && <label htmlFor={label}>{label}</label>}
            <div className={style.input_logo}>
                <input
                    type={type}
                    id={label}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                    className={className}
                />
                {type === "password" && (
                    <button type="button" onClick={hidePass}>
                        {hide ? <FiEyeOff /> : <FiEye />}
                    </button>
                )}
            </div>
        </>
    )
}

export default Input
