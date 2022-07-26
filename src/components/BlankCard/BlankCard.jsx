import React from 'react'
import classes from './BlankCard.module.scss'
import Button from '../UI/Button/Button'
import ButtonGroup from '../UI/ButtonGroup/ButtonGroup'
import { Link } from 'react-router-dom'

const BlankCard = ({ blank, removeBlank }) => {
    function remove(id) {
        removeBlank(id)
    }
    return (
        <div className={classes.BlankCard}>
            <h3>{blank.car.model}</h3>
            <span>{blank.car.color}</span>
            <span> {blank.car.number}</span>
            <ButtonGroup className={classes.ButtonGroup}>
                <Link className={classes.ButtonMore} to={`/blanks/${blank.id}`}>
                    <i className="bi bi-eye"></i>
                </Link>
                <Button className={classes.ButtonRemove} onClick={() => remove(blank.id)}>
                    <i className="bi bi-trash"></i>
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default BlankCard
