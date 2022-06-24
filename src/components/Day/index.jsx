import React from 'react'

export const Day = ({weather}) => {
  return (
    <li>
      <h3>{weather[0].main}</h3>
    </li>
  )
}
