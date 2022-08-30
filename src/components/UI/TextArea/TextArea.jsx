import React from 'react'
import classes from './TextArea.module.scss'

const TextArea = ({ id, placeholder, required, onChange, value }) => {
    const getTextAreaValue = event => {
        onChange(event.target.value)
    }

    return (
        <textarea
            className={classes.TextArea}
            id={id}
            value={value}
            placeholder={placeholder}
            rows="2"
            required={required ? true : false}
            onChange={getTextAreaValue}
        ></textarea>
    )
}

export default TextArea
