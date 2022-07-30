import React from 'react'
import Button from '../../components/UI/Button/Button'
import BlankForm from '../../components/BlankForm/BlankForm'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBlankToDb } from '../../store/slices/blankSlice'

const NewBlank = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function successSubmit() {
        alert('Договор успешно добавлен')
        navigate('/blanks')
    }
    function submitHandler(blank) {
        dispatch(addBlankToDb({ blank }))
        successSubmit()
    }

    return (
        <div className="container">
            <h3>Новый договор</h3>
            <BlankForm onSubmit={newBlank => submitHandler(newBlank)}>
                <Button>Создать</Button>
            </BlankForm>
        </div>
    )
}

export default NewBlank
