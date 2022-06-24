import React, { useEffect, useState } from 'react'
import { ListDays } from '../ListDays'
import "./styles.css"

export const CurrentWeather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}onecall?lat=62.5073&lon=-41.1277&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        console.log(data)
        setLoading(false)
      })
  }, [])

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <section className="currentWeather" >
      <div className="currentWeather--details">
      <h1>{weather.timezone}</h1>
        <h2>Temp</h2>
        <span>{weather.current.temp}°</span>
        <ul className="currentWeather--stats">
          <li>
            <span>Wind </span>
            <span>{weather.current.wind_speed} km/h</span>
          </li>
          <li>
            <span>Humidity </span>
            <span>{weather.current.humidity} %</span>
          </li>
        </ul>
        <div className="currentWeather--actual">
          {weather.current.weather.map((type) => <h3 key={type.id} >{type.main}</h3>)}
        </div>
      </div>
      <div className="currentWeather--img">
        <img src="" alt="Weather" />
      </div>
      <ListDays days={weather.daily} />
    </section>
  )
}
