import React from 'react'
import classes from './Button.module.scss'

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`${classes.Button} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
