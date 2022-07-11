import React, { useState, useEffect } from 'react'
import './style.scss'
import Auth from '../../components/Auth'
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
        <div className="home-page">
            <div className="home-page__start-screen">
                {!auth ? (
                    <Auth toggleAuth={toggleAuth} />
                ) : (
                    <h4 className="home-page__greetings">
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
