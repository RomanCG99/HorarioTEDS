import React from 'react';
import Image from 'next/image';
import Check from '../../img/cheque.png'
import { gql, useMutation } from '@apollo/client';

const AUTENTICAR = gql`
  mutation AuthClave($input: ClaveInput) {
    authClave(input: $input)
    }
`;


const Acces = (props) => {
  const { value, id, onChange, submit } = props

  return (
    <div className='flex w-full justify-center h-screen'>
      <div className='w-1/4 m-auto bg-gray-300 p-1  py-3 rounded-lg ' >
        <div className='flex w-full justify-center'>
          <Image src={Check} />
        </div>
        <div className='flex justify-center pt-2'>
          <h1 className='text-black font-extrabold font-sans text-2xl'>INTRODUCE LA CLAVE</h1>
        </div>

        <div className='flex justify-center'>
          <input id={id} onChange={onChange} value={value} className='mt-2 py-1 bg-gray-200 border-2 border-gray-400 rounded-lg w-5/12 text-black text-start' placeholder='************' />
        </div>
        <div className='flex justify-center py-4'>
          <button type='submit' onClick={submit}>
            <div className='flex justify-center '>
              <span className="material-symbols-outlined text-black">arrow_circle_right</span>
              <span className='pl-2 pt-1 text-black font-bold'>INGRESAR</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Acces