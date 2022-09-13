import React from 'react'
import ButonLista from './ButonLista'


const Lista = (props) => {
    const { unidad } = props;
    return (
        <div className='w-full grid grid-cols-8 gap-2 text-center  bg-gray-700'>
            <div className='my-auto py-1'>
                <button>
                    <span class="material-symbols-outlined text-blue-600 ">edit</span>
                </button>
                <label className="text-md font-semibold text-blue-700"> {unidad.id} </label>
            </div>
            <div className='bg-gray-700 py-1 text-center rounded'>
                <ButonLista cinput={unidad.LUNES.cliente} dinput={unidad.LUNES.destino} />
            </div>
            <div className='bg-gray-700 py-1 text-center rounded'>
                <ButonLista cinput={unidad.MARTES.cliente} dinput={unidad.MARTES.destino} />
            </div>
            <div className='bg-gray-700 py-1 text-center rounded'>
                <ButonLista cinput={unidad.MIERCOLES.cliente} dinput={unidad.MIERCOLES.destino} />
            </div>
            <div className='bg-gray-700 py-1 text-center rounded'>
                <ButonLista cinput={unidad.JUEVES.cliente} dinput={unidad.JUEVES.destino} />
            </div>
            <div className='bg-gray-700 py-1 text-center rounded'>
                <ButonLista cinput={unidad.VIERNES.cliente} dinput={unidad.VIERNES.destino} />
            </div>
            <div className='bg-gray-700 py-1 text-center rounded'>
                <ButonLista cinput={unidad.SABADO.cliente} dinput={unidad.SABADO.destino} />
            </div>
            <div className='bg-gray-700 py-1 text-center rounded'>
                <ButonLista cinput={unidad.DOMINGO.cliente} dinput={unidad.DOMINGO.destino} />
            </div>
        </div>
    )
}

export default Lista
