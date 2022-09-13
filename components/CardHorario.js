import React from 'react'
import GetDaysWeek from '../utilities/GetDaysWeek'

const CardHorario = () => {
    const { days } = GetDaysWeek()
    const weekdaylist = days.map(date =>
        <div className="py-1 text-center">
            <label className="text-md my-auto font-semibold">
                {date}
            </label>
        </div>
    )
    return (
        <div className='w-full grid grid-cols-8 text-center bg-gray-200'>
            <div id="Tabla" className='py-1'>
            <span class="material-symbols-outlined">edit</span>
            <label className="text-md my-auto font-semibold"> Unidad </label>
            </div>
            {weekdaylist}
        </div>

    )
}

export default CardHorario