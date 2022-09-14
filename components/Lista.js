import React from 'react'
import ClienteDestino from './ClienteDestino';

const Lista = (props) => {
    const { unidad } = props;
    const getColors = (Dia) => {
        if (Dia.cliente && Dia.destino) {
            return "bg-green-600"
        } if (Dia.cliente || Dia.destino) {
            return "bg-amber-500"
        } else {
            return "bg-white"
        }
    }
    return (
        <div className='md:w-full grid grid-cols-8 gap-2 text-center bg-gray-700'>
            <div className='flex my-auto py-1 mx-2'>
                <button>
                    <span class= " material-symbols-outlined text-blue-900 mx-1 " > edit </span>
                </button>
                <label className="mx-8 text-md font-semibold text-white"> {unidad.id} </label>
            </div>
            <div className='w-full py-1'>
                <div className={'py-1 text-center rounded ' + getColors(unidad.LUNES)}>
                    <ClienteDestino color={unidad.LUNES} label="Cliente: " inp={unidad.LUNES.cliente} type="text" estilolabel= "  font-bold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                    <ClienteDestino color={unidad.LUNES} label="Destino: " inp={unidad.LUNES.destino} type="text" estilolabel= "  font-bold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'py-1 text-center rounded  ' + getColors(unidad.MARTES)}>
                    <ClienteDestino color={unidad.MARTES} label="Cliente: " inp={unidad.MARTES.cliente} type="text" estilolabel= " font-bold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                    <ClienteDestino color={unidad.MARTES} label="Destino: " inp={unidad.MARTES.destino} type="text" estilolabel= " font-bold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'py-1 text-center rounded  ' + getColors(unidad.MIERCOLES)}>
                    <ClienteDestino color={unidad.MIERCOLES} label="Cliente: " inp={unidad.MIERCOLES.cliente} type="text" estilolabel= " font-bold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                    <ClienteDestino color={unidad.MIERCOLES} label="Destino: " inp={unidad.MIERCOLES.destino} type="text" estilolabel= " font-bold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'py-1 text-center rounded  ' + getColors(unidad.JUEVES)}>
                    <ClienteDestino color={unidad.JUEVES} label="Cliente: " inp={unidad.JUEVES.cliente} type="text" estilolabel= " font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                    <ClienteDestino color={unidad.JUEVES} label="Destino: " inp={unidad.JUEVES.destino} type="text" estilolabel= " font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'py-1 text-center rounded  ' + getColors(unidad.VIERNES)}>
                    <ClienteDestino color={unidad.VIERNES} label="Cliente: " inp={unidad.VIERNES.cliente} type="text" estilolabel= " font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                    <ClienteDestino color={unidad.VIERNES} label="Destino: " inp={unidad.VIERNES.destino} type="text" estilolabel= " font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'py-1 text-center rounded  ' + getColors(unidad.SABADO)}>
                    <ClienteDestino color={unidad.SABADO} label="Cliente: " inp={unidad.SABADO.cliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                    <ClienteDestino color={unidad.SABADO} label="Destino: " inp={unidad.SABADO.destino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                </div>
            </div>
            <div className='py-1 text-center rounded' >
                <div className={'py-1 text-center rounded  ' + getColors(unidad.DOMINGO)}>
                    <ClienteDestino color={unidad.DOMINGO} label="Cliente: " inp={unidad.DOMINGO.cliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                    <ClienteDestino color={unidad.DOMINGO} label="Destino: " inp={unidad.DOMINGO.destino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput= " w-3/4 font-semibold text-sm rounded focus:outline-none mx-2 " />
                </div>
            </div>
        </div>
    )
}

export default Lista
