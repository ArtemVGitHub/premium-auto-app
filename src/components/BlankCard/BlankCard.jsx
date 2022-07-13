import React from 'react'
import classes from './BlankCard.module.scss'

const BlankCard = props => {
    return (
        <div className={classes.BlankCard} onClick={props.onClick}>
            <h3>{props.model}</h3>
            <span>{props.color}</span>
            <span> {props.number}</span>
        </div>
    )
}

export default BlankCard
