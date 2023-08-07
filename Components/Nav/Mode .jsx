import {React,useState} from 'react'

const Mode  = () => {

    const [mode,changemode] = useState(true)
    const icon = (mode === true)?'moon':'sun'

    const handleclick = () => {
        changemode(!mode)
    }

  return (
    <div>
    <button className=' bg-transperent border w-10 h-10 rounded-xl ' onClick={handleclick}><i className={`fa-solid fa-${icon} ease-in duration-100  text-white`}></i></button>
  </div>
  )
}

export default Mode 