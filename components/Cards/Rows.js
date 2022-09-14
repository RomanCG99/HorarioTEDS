import React from 'react'
import GetInfo from '../GetInfo'


const getColores = (Dia) =>{
  if (Dia.cliente && Dia.destino) {
    return "bg-green-600"
  }if (Dia.cliente || Dia.destino) {
    return "bg-amber-500"
  }else{
    return "bg-white"
  }
}

const Rows = (props) => {
  const {unidad} = props
  
  return (
    <div className='md:w-full grid grid-cols-8 gap-2 font-bold text-base'>
      <div className='flex justify-around my-auto'>
        <button><span className="material-symbols-outlined text-indigo-700 font-semibold">edit</span></button>
        <label>{unidad.id}</label>
      </div>

      <div className={ 'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.LUNES)}>
          <GetInfo value={unidad.LUNES.cliente} dia={unidad.LUNES}  title="Cliente: " />      
          <GetInfo value={unidad.LUNES.destino}  dia={unidad.LUNES} title="Destino: "/>       
      </div>
      <div className={ 'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.MARTES)}>
          <GetInfo value={unidad.MARTES.cliente}  dia={unidad.MARTES} title="Cliente: " />      
          <GetInfo value={unidad.MARTES.destino}  dia={unidad.MARTES} title="Destino: "/>       
      </div>
      <div className={ 'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.MIERCOLES)}>
          <GetInfo value={unidad.MIERCOLES.cliente} dia={unidad.MIERCOLES} title="Cliente: " />      
          <GetInfo value={unidad.MIERCOLES.destino} dia={unidad.MIERCOLES} title="Destino: "/>       
      </div>
      <div className={ 'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.JUEVES)}>
          <GetInfo value={unidad.JUEVES.cliente}  dia={unidad.JUEVES} title="Cliente: " />      
          <GetInfo value={unidad.JUEVES.destino} dia={unidad.JUEVES} title="Destino: "/>       
      </div>
      <div className={ 'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.VIERNES)}>
          <GetInfo value={unidad.VIERNES.cliente} dia={unidad.VIERNES} title="Cliente: " />      
          <GetInfo value={unidad.VIERNES.destino} dia={unidad.VIERNES} title="Destino: "/>       
      </div>
      <div className={ 'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.SABADO)}>
          <GetInfo value={unidad.SABADO.cliente}  dia={unidad.SABADO} title="Cliente: " />      
          <GetInfo value={unidad.SABADO.destino}  dia={unidad.SABADO} title="Destino: "/>       
      </div>
      <div className={ 'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.DOMINGO)}>
          <GetInfo value={unidad.DOMINGO.cliente} dia={unidad.DOMINGO} title="Cliente: " />      
          <GetInfo value={unidad.DOMINGO.destino} dia={unidad.DOMINGO} title="Destino: "/>       
      </div>
    </div>
  )
}

export default Rows
