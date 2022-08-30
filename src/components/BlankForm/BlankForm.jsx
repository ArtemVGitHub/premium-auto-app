import React, { useState } from 'react'
import Input from '../../components/UI/Input/Input'
import CheckInput from '../UI/CheckInput/CheckInput'
import TextArea from '../UI/TextArea/TextArea'
import ParticipantForm from './ParticipantForm/ParticipantForm'

const BlankForm = ({ blank, children, onSubmit }) => {
    const blankData = blank
        ? blank
        : {
              place: '',
              date: '',
              price: '',
              priceString: '',
              vendor: {
                  name: '',
                  birth: '',
                  address: '',
                  pasport: {
                      series: '',
                      number: '',
                      source: '',
                      date: '',
                  },
              },
              customer: {
                  name: '',
                  birth: '',
                  address: '',
                  pasport: {
                      series: '',
                      number: '',
                      source: '',
                      date: '',
                  },
              },
              car: {
                  model: '',
                  category: '',
                  type: '',
                  number: '',
                  vin: '',
                  year: '',
                  engine: '',
                  chassies: '',
                  body: '',
                  color: '',
              },
              pts: {
                  isElectron: false,
                  series: '',
                  number: '',
                  source: '',
                  date: '',
              },
              sts: {
                  series: '',
                  number: '',
                  source: '',
                  date: '',
              },
          }
    const [blankInfo, setBlankInfo] = useState({
        place: blankData.place,
        date: blankData.date,
        price: blankData.price,
        priceString: blankData.priceString,
    })
    const [vendorData, setVendorData] = useState({ ...blankData.vendor, pasport: { ...blankData.vendor.pasport } })
    const [customerData, setCustomerData] = useState({ ...blankData.customer, pasport: { ...blankData.customer.pasport } })
    const [carData, setCarData] = useState(blankData.car)
    const [ptsData, setPtsData] = useState(blankData.pts)
    const [stsData, setStsData] = useState(blankData.sts)

    function submitForm(evt) {
        evt.preventDefault()
        const blank = {
            ...blankInfo,
            vendor: { ...vendorData },
            customer: { ...customerData },
            car: { ...carData },
            pts: { ...ptsData },
            sts: { ...stsData },
        }
        onSubmit(blank)
    }

    return (
        <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-6 col-sm-2">
                    <Input
                        id="place"
                        placeholder="Город"
                        type="text"
                        value={blankInfo.place}
                        onChange={value => setBlankInfo({ ...blankInfo, place: value })}
                    ></Input>
                </div>
                <div className="col-6 col-sm-2">
                    <Input
                        id="blankDate"
                        placeholder="Дата договора"
                        type="date"
                        value={blankInfo.date}
                        onChange={value => setBlankInfo({ ...blankInfo, date: value })}
                    ></Input>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <ParticipantForm partData={blankData.vendor} participantRole="vendor" getData={setVendorData} />
                </div>
                <div className="col-12 col-sm-6">
                    <ParticipantForm partData={blankData.customer} participantRole="customer" getData={setCustomerData} />
                </div>
            </div>
            <div className="row g-2">
                <div className="col-12 fs-4 mt-4">Автомобиль</div>
                <div className="col-12 col-sm-4">
                    <Input
                        id="model"
                        placeholder="Марка"
                        type="text"
                        value={carData.model}
                        onChange={value => setCarData({ ...carData, model: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-2">
                    <Input
                        id="category"
                        placeholder="Категория"
                        type="text"
                        value={carData.category}
                        onChange={value => setCarData({ ...carData, category: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-3">
                    <Input
                        id="type"
                        placeholder="Тип ТС"
                        type="text"
                        value={carData.type}
                        onChange={value => setCarData({ ...carData, type: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-3">
                    <Input
                        id="number"
                        placeholder="Регистрационный знак"
                        type="text"
                        value={carData.number}
                        onChange={value => setCarData({ ...carData, number: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-4">
                    <Input
                        id="vin"
                        placeholder="VIN"
                        type="text"
                        value={carData.vin}
                        onChange={value => setCarData({ ...carData, vin: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-1">
                    <Input
                        id="year"
                        placeholder="Год"
                        type="text"
                        value={carData.year}
                        onChange={value => setCarData({ ...carData, year: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-3">
                    <Input
                        id="engine"
                        placeholder="Двигатель"
                        type="text"
                        value={carData.engine}
                        onChange={value => setCarData({ ...carData, engine: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-4">
                    <Input
                        id="chassies"
                        placeholder="Шасси"
                        type="text"
                        value={carData.chassies}
                        onChange={value => setCarData({ ...carData, chassies: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-4">
                    <Input
                        id="body"
                        placeholder="Кузов"
                        type="text"
                        value={carData.body}
                        onChange={value => setCarData({ ...carData, body: value })}
                    ></Input>
                </div>
                <div className="col-12 col-sm-2">
                    <Input
                        id="color"
                        placeholder="Цвет"
                        type="text"
                        value={carData.color}
                        onChange={value => setCarData({ ...carData, color: value })}
                    ></Input>
                </div>
            </div>
            <div className="row g-2">
                <div className="col-12 fs-4 mt-4">Документы</div>
                <div className="row">
                    <div className="col-4 col-md-1">ПТС</div>
                    <div className="col-8 col-md-11">
                        <CheckInput checked={ptsData.isElectron} onChange={value => setPtsData({ ...ptsData, isElectron: value })} />
                    </div>
                </div>
                {!ptsData.isElectron && (
                    <div className="col-5">
                        <Input
                            id="ptsSeries"
                            placeholder="Серия"
                            type="text"
                            value={ptsData.series}
                            onChange={value => setPtsData({ ...ptsData, series: value })}
                        ></Input>
                    </div>
                )}
                <div className="col-7">
                    <Input
                        id="ptsNumber"
                        placeholder="Номер"
                        type="text"
                        value={ptsData.number}
                        onChange={value => setPtsData({ ...ptsData, number: value })}
                    ></Input>
                </div>
                {!ptsData.isElectron && (
                    <div className="col-12">
                        <TextArea
                            id="ptsSource"
                            placeholder="Кем выдан"
                            type="text"
                            value={ptsData.source}
                            onChange={value => setPtsData({ ...ptsData, source: value })}
                        ></TextArea>
                    </div>
                )}
                <div className="col-5">
                    <Input
                        id="ptsDate"
                        placeholder="Дата выдачи"
                        type="text"
                        value={ptsData.date}
                        onChange={value => setPtsData({ ...ptsData, date: value })}
                    ></Input>
                </div>
                <div className="row">
                    <div className="col-4 col-md-1">СТС</div>
                </div>
                <div className="col-5">
                    <Input
                        id="stsSeries"
                        placeholder="Серия"
                        type="text"
                        value={stsData.series}
                        onChange={value => setStsData({ ...stsData, series: value })}
                    ></Input>
                </div>
                <div className="col-7">
                    <Input
                        id="stsNumber"
                        placeholder="Номер"
                        type="text"
                        value={stsData.number}
                        onChange={value => setStsData({ ...stsData, number: value })}
                    ></Input>
                </div>
                <div className="col-12">
                    <TextArea
                        id="stsSource"
                        placeholder="Кем выдан"
                        type="text"
                        value={stsData.source}
                        onChange={value => setStsData({ ...stsData, source: value })}
                    ></TextArea>
                </div>
                <div className="col-5">
                    <Input
                        id="stsDate"
                        placeholder="Дата выдачи"
                        type="text"
                        value={stsData.date}
                        onChange={value => setStsData({ ...stsData, date: value })}
                    ></Input>
                </div>
            </div>
            <div className="row">
                <div className="col-12 fs-4 mt-3 mb-2">Договор</div>
                <div className="col-12">
                    <Input
                        id="price"
                        placeholder="Стоимость"
                        type="text"
                        value={blankInfo.price}
                        onChange={value => setBlankInfo({ ...blankInfo, price: value })}
                    ></Input>
                    <Input
                        id="priceString"
                        placeholder="Стоимость"
                        type="text"
                        value={blankInfo.priceString}
                        onChange={value => setBlankInfo({ ...blankInfo, priceString: value })}
                    ></Input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">{children}</div>
            </div>
        </form>
    )
}

export default BlankForm
