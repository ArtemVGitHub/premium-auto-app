import React from 'react'

const TextArea = ({ id, placeholder, required, onChange }) => {
    const getTextAreaValue = event => {
        onChange(event.target.value)
    }

    return <textarea id={id} placeholder={placeholder} rows="2" required={required ? true : false} onChange={getTextAreaValue}></textarea>
}

export default TextArea
