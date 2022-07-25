import React, { useContext } from 'react'
import Button from '../../components/UI/Button/Button'
import BlankForm from '../../components/BlankForm/BlankForm'
import { BlankListConetxt } from '../../context'

const NewBlank = () => {
    const { blankList, setBlankList } = useContext(BlankListConetxt)

    function generateBlankId(blanks) {
        const idsArray = blanks.map(blank => blank.id)
        return Math.max(...idsArray) + 1 + ''
    }
    function getFormData(blank) {
        const id = generateBlankId(blankList)
        setBlankList([...blankList, { id, ...blank }])
    }

    return (
        <div className="container">
            <h3>Новый договор</h3>
            <BlankForm getFormData={newBlank => getFormData(newBlank)}>
                <Button>Создать</Button>
            </BlankForm>
        </div>
    )
}

export default NewBlank
