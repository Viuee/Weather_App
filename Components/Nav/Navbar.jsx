import React, { useState } from 'react'
import './nav.css'
import Location from './Location'
import Bell_icon from './Bell_icon'
import Menu from './Menu'
import Search_Bar from './Search_Bar'
import Mode from './Mode '
import Profile from './Profile'

const Navbar = () => {
  return (
    <>
      <nav className='w-full flex justify-center align-baseline' >
        <div className='nav pt-10 h-16 w-11/12 flex justify-between items-center'>

        <div className='left_nav flex  items-center justify-center rounded-2xl bg-PrimL py-2 px-3'>
              <Menu/>
              <Bell_icon/>
              <Location/>
          </div>

            <div className='w-full flex justify-center '>
                <Search_Bar/>
            </div>

            <div>
              <div className='right_nav flex items-center justify-center  rounded-2xl bg-PrimL py-2 px-3'>
                  <Mode/>
                  <Profile/>
              </div>
            </div>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar