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
        <div className='w-full grid grid-cols-8 gap-2 text-center  bg-gray-700'>
            <div className='my-auto py-1'>
                <button>
                    <span class="material-symbols-outlined text-blue">edit</span>
                </button>
                <label className="text-md font-semibold text-blue-700"> {unidad.id} </label>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'w-full rounded' + getColors(unidad.LUNES)}>
                    <ClienteDestino label="Cliente: " inp={unidad.LUNES.cliente} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                    <ClienteDestino label="Destino: " inp={unidad.LUNES.destino} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'w-full rounded' + getColors(unidad.MARTES)}>
                    <ClienteDestino label="Cliente: " inp={unidad.MARTES.cliente} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                    <ClienteDestino label="Destino: " inp={unidad.MARTES.destino} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'w-full rounded' + getColors(unidad.MIERCOLES)}>
                    <ClienteDestino label="Cliente: " inp={unidad.MIERCOLES.cliente} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                    <ClienteDestino label="Destino: " inp={unidad.MIERCOLES.destino} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'w-full rounded' + getColors(unidad.JUEVES)}>
                    <ClienteDestino label="Cliente: " inp={unidad.JUEVES.cliente} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                    <ClienteDestino label="Destino: " inp={unidad.JUEVES.destino} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'w-full rounded' + getColors(unidad.VIERNES)}>
                    <ClienteDestino label="Cliente: " inp={unidad.VIERNES.cliente} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                    <ClienteDestino label="Destino: " inp={unidad.VIERNES.destino} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                </div>
            </div>
            <div className='py-1 text-center rounded'>
                <div className={'w-full rounded' + getColors(unidad.SABADO)}>
                    <ClienteDestino label="Cliente: " inp={unidad.SABADO.cliente} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                    <ClienteDestino label="Destino: " inp={unidad.SABADO.destino} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                </div>
            </div>
            <div className='py-1 text-center rounded' >
                <div className={'w-full rounded' + getColors(unidad.DOMINGO)}>
                    <ClienteDestino label="Cliente: " inp={unidad.DOMINGO.cliente} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                    <ClienteDestino label="Destino: " inp={unidad.DOMINGO.destino} type="text" estilolabel="text-blue-900 font-semibold text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded focus:outline-none focus:border-b-2" />
                </div>
            </div>
        </div>
    )
}

export default Lista
