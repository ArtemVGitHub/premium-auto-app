import React, { useContext } from 'react'
import classes from './Blanks.module.scss'
import BlankCard from '../../components/BlankCard/BlankCard'
import { BlankListConetxt } from '../../context'

const Blanks = () => {
    const { blankList, setBlankList } = useContext(BlankListConetxt)

    function removeBlankFromList(id) {
        const newBlankList = blankList.filter(blank => blank.id !== id)
        setBlankList(newBlankList)
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
                                <BlankCard blank={blank} removeBlank={id => removeBlankFromList(id)} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blanks
