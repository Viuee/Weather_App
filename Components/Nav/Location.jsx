import {React,useState} from 'react'
import axios from 'axios'
const Location = () => {

    const [MyLocation,ChangeMyLocation] = useState({city : 'Seatal',country : 'Australia'})

    const Location_name = async(lat,lon)=>{
        try {
          const a = await axios.get('http://api.openweathermap.org/geo/1.0/reverse',{
            params:{
              lat : lat,
              lon : lon,
              limit : '1',
              appid : '2e0a1a703bd98bc892a6cd7e3be94b09'
            }
          }
          )
          return a.data
        }
        catch(err) {
          console.error(err)
        }
        }

    const handle_current_location = () =>{
        navigator.geolocation.getCurrentPosition( (position)=>{
        const a  = async()=>{
            let lat =  position.coords.latitude;
            let lon = position.coords.longitude;

            const data = await Location_name(lat,lon);
            const city = data[0].name
            const country = data[0].country
            ChangeMyLocation({...MyLocation,city : city ,country : country})
        }
        a()
        })
    }
  return (
    <>
    <div className='flex items-center ml-3 justify-center ' >
        <div className='relative flex justify-center items-center  text-xl w-10 h-10 ease-in duration-100 hover:text-2xl  '>
            <button className='absolute  z-10'><i className="fa-solid  fa-location-dot text-Sec"></i></button>
            <span onClick={handle_current_location}  className='absolute  bg-Prim w-full opacity-0 h-full left-0 hover:z-20 hover:opacity-30 hover:bg-SecL hover:blur-md cursor-pointer'></span>
        </div>
            <div className='city pl-1 flex place-items-baseline w-40'>
            <p className='text-xl font-bold text-gray-300 cursor-pointer '>{`${MyLocation.city},`}</p>
            <p className='text-gray-400 pl-1 cursor-pointer'>{MyLocation.country}</p>
            </div>
        </div>
    </>
  )
}

export default Location