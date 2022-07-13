import React from 'react'
import classes from './Blanks.module.scss'
import BlankCard from '../../components/BlankCard/BlankCard'
import { useNavigate } from 'react-router-dom'

import { tempData } from '../../tempData'

const Blanks = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.Blanks}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className={classes.Title}>Все договора</h2>
                    </div>
                    {tempData.map(blank => {
                        return (
                            <div className="col-12 col-md-4 col-lg-3" key={blank.id}>
                                <BlankCard
                                    model={blank.model}
                                    color={blank.color}
                                    number={blank.number}
                                    onClick={() => navigate(`/blanks/${blank.id}`)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blanks
