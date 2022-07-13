import React from 'react'
import classes from './BlankCard.module.scss'
import Button from '../UI/Button/Button'
import ButtonGroup from '../UI/ButtonGroup/ButtonGroup'
import { useNavigate } from 'react-router-dom'

const BlankCard = props => {
    const navigate = useNavigate()

    function removeBlank(id) {
        props.removeBlank(id)
    }

    return (
        <div className={classes.BlankCard}>
            <h3>{props.model}</h3>
            <span>{props.color}</span>
            <span> {props.number}</span>
            <ButtonGroup className={classes.ButtonGroup}>
                <Button className={classes.ButtonMore} onClick={() => navigate(`/blanks/${props.blankId}`)}>
                    <i className="bi bi-eye"></i>
                </Button>
                <Button className={classes.ButtonRemove} onClick={() => removeBlank(props.blankId)}>
                    <i className="bi bi-trash"></i>
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default BlankCard
