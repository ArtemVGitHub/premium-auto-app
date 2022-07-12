import React, { useState } from 'react'
import Input from '../UI/Input/Input'
import ButtonGroup from '../UI/ButtonGroup/ButtonGroup'
import Button from '../UI/Button/Button'
import classes from './Auth.module.scss'

const Auth = ({ toggleAuth }) => {
    const [form, setForm] = useState({ name: '', password: '' })

    const setName = (value = '') => setForm({ ...form, name: value })
    const setPassword = (value = '') => setForm({ ...form, password: value })

    function onAuthSubit(e) {
        e.preventDefault()
        toggleAuth()
    }

    return (
        <div className="auth">
            <form className="auth__form">
                <Input type="text" placeholder="Введите имя..." required onChange={setName} />
                <Input type="password" placeholder="Введите пароль..." required onChange={setPassword} />
                <ButtonGroup>
                    <Button onClick={onAuthSubit}>Войти</Button>
                </ButtonGroup>
            </form>
        </div>
    )
}

export default Auth
