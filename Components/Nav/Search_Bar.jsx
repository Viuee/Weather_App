import React from 'react'

export const Search_Bar = () => {
  return (
    <>
    <div className='relative w-8/12 '>
        <input className='rounded-3xl outline-none decoration-none focus:border-none w-full h-12  placeholder:italic font-semibold text-base pl-10' placeholder='Search city....'>
            </input>
            <i className="fa-solid fa-magnifying-glass text-2xl absolute top-2 left-2 text-gray-400	 "></i>
        </div>
    </>
  )
}
export default Search_Bar