import React from 'react'
import GetInfo from '../GetInfo'




const Rows = (props) => {
  
  const getColor = (Dia) =>{
    if (unidad.Dia.cliente && unidad.Dia.destino) {
      return "bg-green-600"
    }if (unidad.Dia.cliente || unidad.Dia.destino) {
      return "bg-amber-500"
    }else{
      return "bg-white"
    }
  }
  
  const {unidad} = props
  
  return (
    <div className='md:w-full grid grid-cols-8 gap-4 font-bold text-base'>
      <div className='flex justify-around my-auto'>
        <span className="material-symbols-outlined">edit</span>
        <label>{unidad.id}</label>
      </div>

      <div className='justify-around bg-white py-4 mt-2 rounded-lg'>
          <GetInfo value={unidad.LUNES.cliente} dia={unidad.LUNES.cliente} title="Cliente: " style='bg-white text-black mx-auto ' />      
          <GetInfo value={unidad.LUNES.destino}  title="Destino: " style='bg-white text-black mx-auto '/>       
      </div>
      <div className='justify-around bg-white py-4 mt-2 rounded-lg'>
          <GetInfo value={unidad.MARTES.cliente} title="Cliente: " style='bg-white text-black mx-auto ' />      
          <GetInfo value={unidad.MARTES.destino} title="Destino: " style='bg-white text-black mx-auto '/>       
      </div>
      <div className='justify-around bg-white py-4 mt-2 rounded-lg'>
          <GetInfo value={unidad.MIERCOLES.cliente} title="Cliente: " style='bg-white text-black mx-auto ' />      
          <GetInfo value={unidad.MIERCOLES.destino} title="Destino: " style='bg-white text-black mx-auto '/>       
      </div>
      <div className='justify-around bg-white py-4 mt-2 rounded-lg'>
          <GetInfo value={unidad.JUEVES.cliente} title="Cliente: " style='bg-white text-black mx-auto ' />      
          <GetInfo value={unidad.JUEVES.destino} title="Destino: " style='bg-white text-black mx-auto '/>       
      </div>
      <div className='justify-around bg-white py-4 mt-2 rounded-lg'>
          <GetInfo value={unidad.VIERNES.cliente} title="Cliente: " style='bg-white text-black mx-auto ' />      
          <GetInfo value={unidad.VIERNES.destino} title="Destino: " style='bg-white text-black mx-auto '/>       
      </div>
      <div className='justify-around bg-white py-4 mt-2 rounded-lg'>
          <GetInfo value={unidad.SABADO.cliente} title="Cliente: " style='bg-white text-black mx-auto ' />      
          <GetInfo value={unidad.SABADO.destino} title="Destino: " style='bg-white text-black mx-auto '/>       
      </div>
      <div className='justify-around bg-white py-4 mt-2 rounded-lg'>
          <GetInfo value={unidad.DOMINGO.cliente} title="Cliente: " style='bg-white text-black mx-auto ' />      
          <GetInfo value={unidad.DOMINGO.destino} title="Destino: " style='bg-white text-black mx-auto '/>       
      </div>
      
    </div>
  )
}

export default Rows
