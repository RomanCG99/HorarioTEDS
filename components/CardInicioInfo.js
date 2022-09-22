import React from 'react'

const CardInicioInfo = () => {
    const weekday =
        ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ]
    const weekdaylist = weekday.map(days =>
        <div key={days} className=" text-md my-auto font-semibold text-white-600 "> {days} </div>);
    return (
        <div className='w-full grid grid-cols-8 text-center bg-blue-600'>
            <div className=' py-1'>
                <span className=" material-symbols-outlined text-blue-900 mx-4 ">edit</span>
                <label className="text-md my-auto font-semibold"> Unidad </label>
            </div>
            {weekdaylist}
        </div>

    )
}

export default CardInicioInfo