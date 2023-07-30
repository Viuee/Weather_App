import { useState,React } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import './App.css';

function App() {
    const [name,changename] = useState('')


    // Api fetching
    const Weathe_Api = async(City)=>{

        try{ 

            // Fetching cordinates 

            const Url = "http://api.openweathermap.org/geo/1.0/direct?limit=1"
            const Key = 'da805132fbef574a77635ed78a3e2af5'
            const Adrress = City
            const location = await axios.get(`${Url}`,{
                params:{
                    q : Adrress,
                    appid : Key
                }
            }
            ).then( e =>{ return(e.data[0])})

            // Fetching Weather 

            const weather = await axios.get('https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime',{
                params : {
                    latitude :location.lat,
                    longitude :location.lon,
                    timezone : Intl.DateTimeFormat().resolvedOptions().timeZone,
                }
            })

            return weather.data
        }
        catch(err){
            console.error(err);
        }
    }
    // Api fetching

    // handle clicks
    const HandleClick = async() =>{
        const weather_Data = await Weathe_Api(name)
        console.log(weather_Data)
    }


    return(
        <>
            <div className='Search'>
                 <input type='text' value={name} onChange={(e) =>{changename(e.target.value)}}></input>
                 <button onClick={HandleClick}>OK</button>
            </div>
        </>
    )
 
}

export default App
