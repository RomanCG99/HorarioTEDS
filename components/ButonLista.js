import React from 'react'
import ClienteDestino from './ClienteDestino';
const ButonLista = (props) => {
  const {cinput, dinput, color} = props;
  return (
    <div className='w-full rounded bg-green-600 '>
      <ClienteDestino label="Cliente: " inp={cinput} type="text" estilolabel="text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded"/>
      <ClienteDestino label="Destino: " inp={dinput} type="text" estilolabel="text-sm w-1/4 mx-2" estiloinput="w-3/4 font-semibold text-sm rounded" />
    </div>
  );
}

export default ButonLista
