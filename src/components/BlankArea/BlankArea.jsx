import React from 'react'
import classes from './BlankArea.module.scss'

const BlankArea = ({ children }) => {
    return <div className={classes.BlankArea}>{children}</div>
}

export default BlankArea
