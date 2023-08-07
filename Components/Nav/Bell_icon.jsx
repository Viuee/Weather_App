import React from 'react'

const Bell_icon = () => {
  return (
    <>
        
    <div  className='rounded-xl relative text-xl text-YelloL ml-5 w-10 h-10 flex items-center justify-center ease-in duration-100 hover:text-2xl'>
            <button className='absolute  z-10'><i className="fa-solid fa-bell"></i></button>
            <span  className='absolute  bg-Prim w-full opacity-0 h-full left-0 hover:z-20 hover:opacity-30 hover:bg-YelloL hover:blur-md cursor-pointer'></span>
    </div>
    </>
  )
}

export default Bell_icon