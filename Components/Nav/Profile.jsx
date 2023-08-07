import React from 'react'
import Girl from './assests/Girl.jpg'
const Profile = () => {
  return (
    <>
        <div className='profile w-12 h-12 ml-5 rounded-full border-4 border-Prim '>
            <img src={Girl} className='aspect-square rounded-full' />
        </div>
    </>
  )
}

export default Profile