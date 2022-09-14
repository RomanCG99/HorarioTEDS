import React from 'react'

const CardInicioInfo = () => {
    const weekday =
        [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
    const weekdaylist = weekday.map(days =>
        <div className="bg-blue-600 py-1 text-center">
            <label className="text-md my-auto font-semibold">
                {days}
            </label>
        </div>
    )

    return (
        <div className='w-full grid grid-cols-8 text-center  bg-blue-600'>
            <div className=' py-1'>
                <span class=" material-symbols-outlined text-white mx-4 ">edit</span>
                <label className="text-md my-auto font-semibold"> Unidad </label>
            </div>
            {weekdaylist}
        </div>

    )
}

export default CardInicioInfo