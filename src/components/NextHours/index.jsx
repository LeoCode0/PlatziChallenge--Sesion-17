import React from 'react'
import { useApi } from "../../context/ApiContext";
import { Hour } from "../Hour";

export const NextHours = () => {
  const weather = useApi()
  if(!weather){
    return <p>Loading...</p>
  }
  weather.hourly.length = 6
  console.log(weather)
  return (
    <ul className='container' >
      {weather.hourly.map((hour, id) => <Hour {...hour} addHour={id} />)}
    </ul>
  )
}
