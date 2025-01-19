import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-auto'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5 p-5'>{children}</div> {/* padding qo'shildi */}
                </div>
            </div>
        </>
    )
}

export default Layout
