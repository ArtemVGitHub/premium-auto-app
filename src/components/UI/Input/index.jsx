import React, { useState } from 'react'
import './style.scss'

const Input = ({ placeholder, type, required, onChange }) => {
    const [showPassword, setShowPassword] = useState(false)

    const valueInput = event => {
        onChange(event.target.value)
    }

    return (
        <div className="input">
            {type === 'password' ? (
                <>
                    <input
                        className="input__password"
                        placeholder={placeholder}
                        type={showPassword ? 'text' : 'password'}
                        required={required ? true : false}
                        onChange={valueInput}
                    />

                    <i
                        className={showPassword ? 'bi bi-eye input__icon' : 'bi bi-eye-slash input__icon'}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </>
            ) : (
                <input className="input__text" placeholder={placeholder} type={type} required={required ? true : false} onChange={valueInput} />
            )}
        </div>
    )
}

export default Input
