import React, { useState, useEffect } from 'react'
import classes from './Home.module.scss'
import Auth from '../../components/Auth/Auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate()

    function toggleAuth() {
        setAuth(true)
    }

    function redirectToBalnks(navigate) {
        setTimeout(() => {
            navigate('blanks', { replace: true })
        }, 2000)
    }

    useEffect(() => {
        if (auth) {
            redirectToBalnks(navigate)
        }
    }, [auth, navigate])

    return (
        <div className={classes.Home}>
            <div className={classes.StartScreen}>
                {!auth ? (
                    <Auth toggleAuth={toggleAuth} />
                ) : (
                    <h4 className={classes.Greetings}>
                        Артем Евгеньевич, <br />
                        добро пожаловать
                        <br />в Premium Auto
                    </h4>
                )}
            </div>
        </div>
    )
}

export default Home
