import React from 'react'
import classes from './ButtonGroup.module.scss'

const ButtonGroup = ({ children }) => {
    return <div className={classes.ButtonGroup}>{children}</div>
}

export default ButtonGroup
