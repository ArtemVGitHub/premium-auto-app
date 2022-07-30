import React from 'react'
import Button from '../../components/UI/Button/Button'
import BlankForm from '../../components/BlankForm/BlankForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editBlankInDb } from '../../store/slices/blankSlice'

const EditBlank = () => {
    const { id } = useParams()
    const blankList = useSelector(state => state.blanks.blanks)
    const editedBlank = blankList.find(blank => blank.id === id)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function successEdit(blank) {
        dispatch(editBlankInDb({ id, blank }))
        alert('Договор успешно отредактирован')
        navigate(`/blanks/${id}`)
    }

    return (
        <div className="container">
            <h3>Редактировать договор</h3>
            <BlankForm blank={editedBlank} onSubmit={editedBlankData => successEdit(editedBlankData)}>
                <Button>Сохранить</Button>
            </BlankForm>
        </div>
    )
}

export default EditBlank
