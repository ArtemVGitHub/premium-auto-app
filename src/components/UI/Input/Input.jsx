import React, { useState } from 'react'
import classes from './Input.module.scss'

const Input = ({ placeholder, type, required, onChange }) => {
    const [showPassword, setShowPassword] = useState(false)

    const valueInput = event => {
        onChange(event.target.value)
    }

    return (
        <div className={classes.Input}>
            {type === 'password' ? (
                <>
                    <input
                        placeholder={placeholder}
                        type={showPassword ? 'text' : 'password'}
                        required={required ? true : false}
                        onChange={valueInput}
                    />

                    <i
                        className={showPassword ? 'bi bi-eye ' + classes.Icon : 'bi bi-eye-slash ' + classes.Icon}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </>
            ) : (
                <input placeholder={placeholder} type={type} required={required ? true : false} onChange={valueInput} />
            )}
        </div>
    )
}

export default Input
