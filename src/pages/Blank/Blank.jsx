import React from 'react'
import BlankArea from '../../components/BlankArea/BlankArea'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { useSelector } from 'react-redux'

const Blank = () => {
    const { id } = useParams()
    const blankList = useSelector(state => state.blanks.blanks)
    const currentBlank = blankList.find(blank => blank.id === id)

    function dateFormating(date) {
        return new Date(date).toLocaleDateString()
    }
    return (
        <div className="container">
            <h3>Договор</h3>
            <div className="row justify-content-between">
                <div className="col-auto col-md-1">
                    <BlankArea>{currentBlank.place}</BlankArea>
                </div>
                <div className="col-auto col-md-1">
                    <BlankArea>{dateFormating(currentBlank.date)}</BlankArea>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Продавец</h4>
                        <p>{currentBlank.vendor.name}</p>
                    </BlankArea>
                </div>
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Покупатель</h4>
                        <p>{currentBlank.customer.name}</p>
                    </BlankArea>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Автомобиль</h4>
                        <p>{currentBlank.car.model}</p>
                        <p>{currentBlank.car.color}</p>
                        <p>{currentBlank.car.number}</p>
                    </BlankArea>
                </div>
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Документы</h4>
                        <p>ПТС - {currentBlank.pts.series}</p>
                        <p>СТС - {currentBlank.sts.series}</p>
                    </BlankArea>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Сумма</h4>
                        <p>{currentBlank.priceValue}</p>
                    </BlankArea>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <Link to={`/blanks/${id}/edit`}>Редактировать</Link>
                </div>
                <div className="col-auto">
                    <Button onClick={() => console.log('Печать')}>Открыть</Button>
                </div>
            </div>
        </div>
    )
}

export default Blank
