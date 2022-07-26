import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './hoc/Layout/Layout'
import Blanks from './pages/Blanks/Blanks'
import Blank from './pages/Blank/Blank'
import NewBlank from './pages/NewBlank/NewBlank'
import EditBlank from './pages/EditBlank/EditBlank'
import Account from './pages/Account/Account'
import { BrowserRouter } from 'react-router-dom'
import { BlankListConetxt } from './context'
import { tempData } from './tempData'
import React, { useState } from 'react'

function App() {
    const [blankList, setBlankList] = useState(tempData)
    return (
        <div className="App">
            <BlankListConetxt.Provider
                value={{
                    blankList,
                    setBlankList,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/" element={<Layout />}>
                            <Route path="blanks" element={<Blanks />} />
                            <Route path="new" element={<NewBlank />} />
                            <Route path="account" element={<Account />} />
                            <Route path="blanks/:id" element={<Blank />} />
                            <Route path="blanks/:id/edit" element={<EditBlank />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </BlankListConetxt.Provider>
        </div>
    )
}

export default App
