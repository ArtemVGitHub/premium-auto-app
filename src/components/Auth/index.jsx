import React, { useState } from 'react'
import Input from '../UI/Input'
import ButtonGroup from '../UI/ButtonGroup'
import Button from '../UI/Button'

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
