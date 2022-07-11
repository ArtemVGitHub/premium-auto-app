import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './hoc/Layout'
import Blanks from './pages/Blanks'
// import Blank from './pages/Blank'
import './App.scss'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Layout />}>
                    <Route path="blanks" element={<Blanks />} />
                    {/* <Route path="blanks/:id" element={<Blank />} /> */}
                </Route>
            </Routes>
        </div>
    )
}

export default App
