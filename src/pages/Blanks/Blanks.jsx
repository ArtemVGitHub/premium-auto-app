import React, { useEffect } from 'react'
import classes from './Blanks.module.scss'
import BlankCard from '../../components/BlankCard/BlankCard'
import Loader from '../../components/Loader/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlanksFromDb } from '../../store/slices/blankSlice'

const Blanks = () => {
    const blankList = useSelector(state => state.blanks.blanks)
    const status = useSelector(state => state.blanks.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlanksFromDb())
    }, [dispatch])

    return (
        <div className={classes.Blanks}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className={classes.Title}>Все договора</h2>
                    </div>
                    {status === 'loading' ? (
                        <Loader />
                    ) : blankList.length > 0 ? (
                        blankList.map(blank => {
                            return (
                                <div className="col-12 col-md-4 col-lg-3" key={blank.id}>
                                    <BlankCard blank={blank} />
                                </div>
                            )
                        })
                    ) : (
                        <div>Догвора отсутствуют</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blanks
