import React from 'react'
import { getCurrentDay } from "../../utilities/getCurrentDay";
import "./styles.css"

export const Day = ({weather, temp, dayNumber}) => {
  return (
    <li className='day' >
      <span>{temp.max} °</span>
      <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather img" />
      <h3>{weather[0].main}</h3>
      <p>{getCurrentDay(new Date().getDay(), dayNumber)}</p>
    </li>
  )
}
