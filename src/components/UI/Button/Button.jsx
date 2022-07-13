import React from 'react'
import classes from './Button.module.scss'

const Button = ({ children, className, ...props }) => {
    return (
        <button className={className ? `${classes.Button} ${className}` : classes.Button} {...props}>
            {children}
        </button>
    )
}

export default Button
