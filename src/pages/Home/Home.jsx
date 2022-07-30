import React from 'react'
import classes from './Home.module.scss'
import Auth from '../../components/Auth/Auth'

const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.StartScreen}>
                <Auth />
                {/* {!auth ? (
                    <Auth toggleAuth={toggleAuth} />
                ) : (
                    <h4 className={classes.Greetings}>
                        Артем Евгеньевич, <br />
                        добро пожаловать
                        <br />в Premium Auto
                    </h4>
                )} */}
            </div>
        </div>
    )
}

export default Home
