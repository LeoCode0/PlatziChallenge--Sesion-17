import React from 'react'
import { Day } from "../Day";

export const ListDays = ({ days }) => {
  return (
    <ul>
      {days.map(day => <Day {...day} />)}
    </ul>
  )
}
