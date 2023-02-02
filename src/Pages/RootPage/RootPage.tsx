import React from 'react'
import {Outlet} from 'react-router-dom'
import MiniDrawer from '../../Components/Sidebar/Sidebar2'


import './RootPage.css'

const RootPage = () => {
  return (
    <div className='rootPage'>
      

       {/* <Sidebar /> */}
       <MiniDrawer />
       
       <main className='main'>
       <Outlet />
       </main>
       
    </div>
  )
}

export default RootPage