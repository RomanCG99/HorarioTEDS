import React from 'react'
import getweek from '../utils/week'

const {days} = getweek();
const listDate = days.map((day) =>
<div key={day} className="text-center font-bold text-lg text-blue-900"> {day} </div>);

const GetDate = () => {
  return (
    <div  className='md:w-full mx-auto bg-gray-200 grid grid-cols-8 gap-4 pt-2 font-bold text-base'>
        <div className='flex justify-around text-blue-900'>
          <span className="material-symbols-outlined">edit</span>
          <label>UNIDAD</label>
        </div>
        {listDate}
      </div>
  )
}

export default GetDate