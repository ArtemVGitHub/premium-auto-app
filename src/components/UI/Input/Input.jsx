import React, { useState } from 'react'
import classes from './Input.module.scss'

const Input = ({ id, placeholder, type, required, onChange }) => {
    const [showPassword, setShowPassword] = useState(false)

    const getInputValue = event => {
        onChange(event.target.value)
    }

    return (
        <div className={classes.Input}>
            {type === 'password' ? (
                <>
                    <input
                        id={id}
                        placeholder={placeholder}
                        type={showPassword ? 'text' : 'password'}
                        required={required ? true : false}
                        onChange={getInputValue}
                    />

                    <i
                        className={showPassword ? 'bi bi-eye ' + classes.Icon : 'bi bi-eye-slash ' + classes.Icon}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </>
            ) : (
                <input id={id} placeholder={placeholder} type={type} required={required ? true : false} onChange={getInputValue} />
            )}
        </div>
    )
}

export default Input
