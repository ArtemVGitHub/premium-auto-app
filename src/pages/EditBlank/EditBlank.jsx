import React, { useContext } from 'react'
import Button from '../../components/UI/Button/Button'
import BlankForm from '../../components/BlankForm/BlankForm'
import { BlankListConetxt } from '../../context'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlank = () => {
    const { blankList, setBlankList } = useContext(BlankListConetxt)
    const { id } = useParams()
    const [editedBlank] = blankList.filter(blank => blank.id === id)

    const navigate = useNavigate()

    function successEdit() {
        alert('Договор успешно отредактирован')
        navigate(`/blanks/${id}`)
    }

    function editBlank(formData) {
        const prevBlanks = blankList.filter(blank => blank.id !== id)
        setBlankList([...prevBlanks, { id, ...formData }])
        successEdit()
    }

    return (
        <div className="container">
            <h3>Редактировать договор</h3>
            <BlankForm blank={editedBlank} onSubmit={editedBlankData => editBlank(editedBlankData)}>
                <Button>Сохранить</Button>
            </BlankForm>
        </div>
    )
}

export default EditBlank
