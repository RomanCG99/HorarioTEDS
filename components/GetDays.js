import React from 'react'


const fechas = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];
const listFechas = fechas.map((fecha) =>
  <div key={fecha} className="text-center font-bold text-base"> {fecha} </div>
);



const GetDays = () => {
  return (
    <div className='md:w-full mx-auto bg-blue-800 grid grid-cols-8 gap-4 pt-6 font-bold text-base'>
        <div className='flex justify-around'>
          <span className="material-symbols-outlined">edit</span>
          <label>UNIDAD</label>
        </div>
        {listFechas}
      </div>
  )
}

export default GetDays