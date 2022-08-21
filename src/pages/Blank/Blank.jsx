import React, { useState } from 'react'
import BlankArea from '../../components/BlankArea/BlankArea'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { useSelector } from 'react-redux'
import { collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import Modal from '../../components/UI/Modal/Modal'

const Blank = () => {
    const { id } = useParams()
    const blankList = useSelector(state => state.blanks.blanks)
    const currentBlank = blankList.find(blank => blank.id === id)
    const [modalOpen, toggleModalStatus] = useState(false)

    function dateFormating(date) {
        return new Date(date).toLocaleDateString()
    }

    async function printBlank() {
        const querySnapshot = await getDocs(collection(db, 'printedDoc'))
        querySnapshot.forEach(blank => {
            deleteDoc(doc(db, 'printedDoc', blank.id))
        })
        try {
            await addDoc(collection(db, 'printedDoc'), currentBlank)
            toggleModalStatus(!modalOpen)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            <h3>Договор</h3>
            <div className="row justify-content-between">
                <div className="col-auto">
                    <BlankArea>{currentBlank.place}</BlankArea>
                </div>
                <div className="col-auto">
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
                    <Button onClick={() => printBlank()}>Печать</Button>
                </div>
            </div>
            {modalOpen && (
                <Modal>
                    <div className="modalTitle">Выберите шаблон договора</div>
                    <ul className="ModalList">
                        <li className="ModalItem">
                            <a
                                className="ModalLink"
                                href="https://docs.google.com/document/d/1leSY1FMJm0NLmmIgUFiK-8zjrLgHAttkZGAeT87zX18"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Стандартный, ЭПТС
                            </a>
                        </li>
                    </ul>
                    <Button onClick={() => toggleModalStatus(!modalOpen)}>Отмена</Button>
                </Modal>
            )}
        </div>
    )
}

export default Blank
