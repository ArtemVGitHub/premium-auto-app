import React, { useContext } from 'react'
import Button from '../../components/UI/Button/Button'
import BlankForm from '../../components/BlankForm/BlankForm'
import { BlankListConetxt } from '../../context'
import { useNavigate } from 'react-router-dom'

const NewBlank = () => {
    const { blankList, setBlankList } = useContext(BlankListConetxt)
    const navigate = useNavigate()

    function generateBlankId(blanks) {
        const idsArray = blanks.map(blank => blank.id)
        return Math.max(...idsArray) + 1 + ''
    }
    function addNewBlank(blank) {
        const id = generateBlankId(blankList)
        setBlankList([...blankList, { id, ...blank }])
    }
    function successSubmit() {
        alert('Договор успешно добавлен')
        navigate('/blanks')
    }
    function submitHandler(blank) {
        addNewBlank(blank)
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
