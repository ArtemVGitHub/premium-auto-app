import React, { useState } from 'react'
import classes from './Blanks.module.scss'
import BlankCard from '../../components/BlankCard/BlankCard'
import { useNavigate } from 'react-router-dom'

import { tempData } from '../../tempData'

const Blanks = () => {
    const [blankList, setBalnkList] = useState(tempData)

    const navigate = useNavigate()

    function goToBlankPage(evt, id) {
        if (evt.target.tagName !== 'BUTTON') {
            navigate(`/blanks/${id}`)
        } else {
            const newBlankList = blankList.filter(blank => blank.id !== id)
            setBalnkList(newBlankList)
        }
    }

    return (
        <div className={classes.Blanks}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className={classes.Title}>Все договора</h2>
                    </div>
                    {blankList.map(blank => {
                        return (
                            <div className="col-12 col-md-4 col-lg-3" key={blank.id}>
                                <BlankCard
                                    model={blank.model}
                                    color={blank.color}
                                    number={blank.number}
                                    onClick={evt => goToBlankPage(evt, blank.id)}
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
