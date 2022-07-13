import React from 'react'
import classes from './BlankCard.module.scss'
import Button from '../UI/Button/Button'

const BlankCard = props => {
    return (
        <div className={classes.BlankCard} onClick={props.onClick}>
            <h3>{props.model}</h3>
            <span>{props.color}</span>
            <span> {props.number}</span>
            <Button className="pete">
                <i className="bi bi-trash"></i>
            </Button>
        </div>
    )
}

export default BlankCard
