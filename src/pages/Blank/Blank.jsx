import React, { useState, useEffect, useContext } from 'react'
import BlankArea from '../../components/BlankArea/BlankArea'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { BlankListConetxt } from '../../context'

const Blank = () => {
    const { blankList } = useContext(BlankListConetxt)
    const { id } = useParams()
    const [blankDate, setBlankDate] = useState('')
    const [blank, setCurrentBlank] = useState({
        id: '',
        place: '',
        date: '',
        vendor: {
            name: '',
        },
        customer: {
            name: '',
        },
        car: {
            model: '',
            color: '',
            number: '',
        },
        pts: {
            isDigital: false,
            number: '',
            series: '',
        },
        sts: {
            number: '',
            series: '',
        },
        priceValue: '',
        pariceText: '',
    })
    function getCurrentBlank(blanks, id) {
        const [curBlank] = blanks.filter(blank => blank.id === id)
        const currentDate = new Date(curBlank.date)
        setBlankDate(currentDate.toLocaleDateString())
        setCurrentBlank(curBlank)
    }
    useEffect(() => {
        getCurrentBlank(blankList, id)
    }, [id, blankList])
    return (
        <div className="container">
            <h3>Договор</h3>
            <div className="row justify-content-between">
                <div className="col-auto col-md-1">
                    <BlankArea>{blank.place}</BlankArea>
                </div>
                <div className="col-auto col-md-1">
                    <BlankArea>{blankDate}</BlankArea>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Продавец</h4>
                        <p>{blank.vendor.name}</p>
                    </BlankArea>
                </div>
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Покупатель</h4>
                        <p>{blank.customer.name}</p>
                    </BlankArea>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Автомобиль</h4>
                        <p>{blank.car.model}</p>
                        <p>{blank.car.color}</p>
                        <p>{blank.car.number}</p>
                    </BlankArea>
                </div>
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Документы</h4>
                        <p>ПТС - {blank.pts.series}</p>
                        <p>СТС - {blank.sts.series}</p>
                    </BlankArea>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <BlankArea>
                        <h4>Сумма</h4>
                        <p>{blank.priceValue}</p>
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
