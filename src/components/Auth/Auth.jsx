import React, { useState } from 'react'
import Input from '../UI/Input/Input'
import ButtonGroup from '../UI/ButtonGroup/ButtonGroup'
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const [form, setForm] = useState({ email: '', password: '' })

    const navigate = useNavigate()

    const setEmail = (value = '') => setForm({ ...form, email: value })
    const setPassword = (value = '') => setForm({ ...form, password: value })

    const dispatch = useDispatch()

    function onAuthSubmit() {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, form.email, form.password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                )
                navigate('blanks')
            })
            .catch(console.error)
    }
    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="auth">
            <form className="auth__form" onSubmit={onSubmit}>
                <Input value={form.email} type="text" placeholder="Введите почту" required onChange={setEmail} />
                <Input value={form.password} type="password" placeholder="Введите пароль" required onChange={setPassword} />
                <ButtonGroup>
                    <Button onClick={onAuthSubmit}>Войти</Button>
                </ButtonGroup>
            </form>
        </div>
    )
}

export default Auth
