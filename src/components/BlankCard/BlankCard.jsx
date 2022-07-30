import React from 'react'
import classes from './BlankCard.module.scss'
import Button from '../UI/Button/Button'
import ButtonGroup from '../UI/ButtonGroup/ButtonGroup'
import { Link } from 'react-router-dom'
import { deleteBlankFromDb } from '../../store/slices/blankSlice'
import { useDispatch } from 'react-redux'

const BlankCard = ({ blank }) => {
    const dispatch = useDispatch()
    return (
        <div className={classes.BlankCard}>
            <h3>{blank.car.model}</h3>
            <span>{blank.car.color}</span>
            <span> {blank.car.number}</span>
            <ButtonGroup className={classes.ButtonGroup}>
                <Link className={classes.ButtonMore} to={`/blanks/${blank.id}`}>
                    <i className="bi bi-eye"></i>
                </Link>
                <Button className={classes.ButtonRemove} onClick={() => dispatch(deleteBlankFromDb({ id: blank.id }))}>
                    <i className="bi bi-trash"></i>
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default BlankCard
