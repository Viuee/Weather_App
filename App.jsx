import { useState,useEffect,React } from 'react'
import ReactDOM from 'react-dom/client'
// import axios from 'axios'
import './App.css';
import Navbar from './Components/Nav/Navbar';
import { createTheme } from '@mui/material/styles';

function App() {
    // Api fetching
    // const Weather_Api = async(City)=>{

    //     try{ 

    //         // Fetching cordinates 

    //         const Url = "http://api.openweathermap.org/geo/1.0/direct?limit=1"
    //         const Key = 'da805132fbef574a77635ed78a3e2af5'
    //         const Adrress = City
    //         const location = await axios.get(`${Url}`,{
    //             params:{
    //                 q : Adrress,
    //                 appid : Key
    //             }
    //         }
    //         ).then( e =>{ return(e.data[0])})

    //         // Fetching Weather 

    //         const weather = await axios.get('https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime',{
    //             params : {
    //                 latitude :location.lat,
    //                 longitude :location.lon,
    //                 timezone : Intl.DateTimeFormat().resolvedOptions().timeZone,
    //             }
    //         })
    //         return weather.data
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

    // theme
    return(
        <>
        <div className='app bg-Prim flex justify-center '>
            <Navbar/>
        </div>
        </>
    )
 
}

export default App
