import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='flex'>
        <div className='flex'>
            <nav>
                <Link to={'/'}>Dashboard</Link>
                <Link to={'/contacts'}>Contacts2</Link>
            </nav>
        </div>
        <div><Outlet /></div>
    </div>
    </>
  )
}

export default Layout