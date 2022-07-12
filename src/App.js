import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './hoc/Layout/Layout'
import Blanks from './pages/Blanks/Blanks'
import NewBlank from './pages/NewBlank/NewBlank'
import Account from './pages/Account/Account'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Layout />}>
                    <Route path="blanks" element={<Blanks />} />
                    <Route path="new" element={<NewBlank />} />
                    <Route path="account" element={<Account />} />
                    {/* <Route path="blanks/:id" element={<Blank />} /> */}
                </Route>
            </Routes>
        </div>
    )
}

export default App
