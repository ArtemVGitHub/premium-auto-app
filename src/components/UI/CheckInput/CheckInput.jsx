import React from 'react'

const CheckInput = ({ onChange, checked }) => {
    const getInputValue = event => {
        onChange(event.target.checked)
    }

    return (
        <div className="form-check form-switch">
            <input
                checked={checked}
                onChange={getInputValue}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Электронный
            </label>
        </div>
    )
}

export default CheckInput
