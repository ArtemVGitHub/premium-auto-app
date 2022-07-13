import React from 'react'
import classes from './ButtonGroup.module.scss'

const ButtonGroup = ({ children, className }) => {
    return <div className={className ? `${classes.ButtonGroup} ${className}` : classes.ButtonGroup}>{children}</div>
}

export default ButtonGroup
