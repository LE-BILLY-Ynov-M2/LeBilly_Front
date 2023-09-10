import React from "react"

const Button = ({ title, id, onClick, className, children, classNameTitle }) => (
    <button id={id} onClick={onClick} className={className}>
        {title && <p className={classNameTitle}>{title}</p>}
        {children}
    </button>
)
export default Button
