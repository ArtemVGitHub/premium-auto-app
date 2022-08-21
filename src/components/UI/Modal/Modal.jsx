import React from 'react'
import classes from './style.module.scss'

const Modal = props => {
    return (
        <div className={classes.Modal}>
            <div className={classes.ModalBody}>{props.children}</div>
        </div>
    )
}

export default Modal
