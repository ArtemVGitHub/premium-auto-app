import React, { useMemo, useState } from 'react'
import Input from '../../UI/Input/Input'
import TextArea from '../../UI/TextArea/TextArea'

const ParticipantForm = ({ participantRole, getData }) => {
    const [partData, setPartData] = useState({
        name: '',
        birth: '',
        address: '',
    })
    const [pasportData, setPasportData] = useState({
        series: '',
        number: '',
        source: '',
        date: '',
    })
    useMemo(() => {
        function updateParticipantInfo(partData, pasportData) {
            const partFullData = {
                ...partData,
                [participantRole]: { ...pasportData },
            }
            getData(partFullData)
        }
        updateParticipantInfo(partData, pasportData)
    }, [getData, partData, participantRole, pasportData])
    return (
        <>
            <div className="col-12 fs-4 mt-3 mb-2">{participantRole === 'vendor' ? 'Продавец' : 'Покупатель'}</div>
            <div className="row g-2">
                <div className="col-12">
                    <Input
                        id={`${participantRole}Name`}
                        placeholder="Ф.И.О."
                        type="text"
                        onChange={value => setPartData({ ...partData, name: value })}
                    ></Input>
                </div>
                <div className="col-6">
                    <Input
                        id={`${participantRole}Birth`}
                        placeholder="Дата рождения"
                        type="text"
                        onChange={value => setPartData({ ...partData, birth: value })}
                    ></Input>
                </div>
                <div className="col-12">
                    <TextArea
                        className="form-control"
                        id={`${participantRole}Address`}
                        placeholder="Место регистрации"
                        onChange={value => setPartData({ ...partData, address: value })}
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
