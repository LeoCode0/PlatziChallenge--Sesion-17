import React from 'react'

export const Hour = ({ weather, addHour, temp }) => {
  return (
    <li>
      <p>{temp}°</p>
      <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
      <p>{new Date().getHours() + addHour}:{new Date().getMinutes()}</p>
    </li>
  )
}
