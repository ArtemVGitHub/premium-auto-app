import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Input from '../../UI/Input/Input'
import TextArea from '../../UI/TextArea/TextArea'

const ParticipantForm = ({ partData, participantRole, getData }) => {
    const partList = useSelector(state => state.participants.participants)

    const [partInfo, setPartInfo] = useState({
        name: partData.name ? partData.name : '',
        birth: partData.birth ? partData.birth : '',
        address: partData.address ? partData.address : '',
    })
    const [pasportData, setPasportData] = useState({
        series: partData.pasport.series ? partData.pasport.series : '',
        number: partData.pasport?.number ? partData.pasport.number : '',
        source: partData.pasport?.source ? partData.pasport.source : '',
        date: partData.pasport?.date ? partData.pasport.date : '',
    })
    useEffect(() => {
        const data = {
            ...partInfo,
            pasport: { ...pasportData },
        }
        getData(data)
    }, [partInfo, pasportData])

    function chooseParticipantFromDB(evt) {
        const selectedParticipant = evt.target.value
        const selectedParticipantData = partList.find(part => part.name === selectedParticipant)
        setPartInfo({
            ...partInfo,
            name: selectedParticipantData.name,
            birth: selectedParticipantData.birth,
            address: selectedParticipantData.address,
        })
    }

    return (
        <>
            <div className="col-12 fs-4 mt-3 mb-2">{participantRole === 'vendor' ? 'Продавец' : 'Покупатель'}</div>
            <div className="row g-2">
                <div className="col-10">
                    <Input
                        id={`${participantRole}Name`}
                        placeholder="Ф.И.О."
                        type="text"
                        value={partInfo.name}
                        onChange={value => setPartInfo({ ...partInfo, name: value })}
                    ></Input>
                </div>
                <div className="col-2">
                    <select defaultValue={'Выбрать'} id={`${participantRole}Select`} placeholder="Выбрать" onChange={chooseParticipantFromDB}>
                        <option disabled value="Выбрать">
                            Выбрать
                        </option>
                        {partList.map(part => {
                            return (
                                <option value={part.name} key={part.name}>
                                    {part.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-6">
                    <Input
                        id={`${participantRole}Birth`}
                        placeholder="Дата рождения"
                        type="text"
                        value={partInfo.birth}
                        onChange={value => setPartInfo({ ...partInfo, birth: value })}
                    ></Input>
                </div>
                <div className="col-12">
                    <TextArea
                        className="form-control"
                        id={`${participantRole}Address`}
                        placeholder="Место регистрации"
                        value={partInfo.address}
                        onChange={value => setPartInfo({ ...partInfo, address: value })}
                    />
                </div>
                <div className="col-12">Паспорт</div>
                <div className="col-12 col-sm-4">
                    <Input
                        id={`${participantRole}PasportSeries`}
                        placeholder="Серия"
                        type="text"
                        onChange={value => setPasportData({ ...pasportData, series: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-4">
                    <Input
                        id={`${participantRole}PasportNumber`}
                        placeholder="Номер"
                        type="text"
                        onChange={value => setPasportData({ ...pasportData, number: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-4">
                    <Input
                        id={`${participantRole}PasportDate`}
                        placeholder="Дата выдачи"
                        type="text"
                        onChange={value => setPasportData({ ...pasportData, date: value })}
                    ></Input>
                </div>
                <div className="col-12">
                    <TextArea
                        className="form-control"
                        id={`${participantRole}PasportSource`}
                        placeholder="Кем выдан"
                        onChange={value => setPasportData({ ...pasportData, source: value })}
                    />
                </div>
            </div>
        </>
    )
}

export default ParticipantForm
