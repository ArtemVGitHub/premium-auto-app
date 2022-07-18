import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigate from '../../components/Navigate/Navigate'

const Layout = () => {
    return (
        <main style={{ paddingBottom: '74px' }}>
            <Navigate />
            <Outlet />
        </main>
    )
}

export default Layout
