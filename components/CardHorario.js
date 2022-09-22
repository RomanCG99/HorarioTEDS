import React from 'react'
import GetDaysWeek from '../utilities/GetDaysWeek'

const CardHorario = () => {
    const { days } = GetDaysWeek()
    const weekdaylist = days.map(date =>
        <div key={date} className=" text-md my-auto font-semibold text-blue-900 "> {date} </div>
    )
    return (
        <div className='w-full grid grid-cols-8 text-center bg-gray-200'>
            <div id="Tabla" className='py-1'>
                <span className=" material-symbols-outlined text-blue-900 mx-4 ">edit</span>
                <label className="text-md my-auto font-semibold text-blue-900"> Unidad </label>
            </div>
            {weekdaylist}
        </div>

    )
}

export default CardHorario