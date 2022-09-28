import CardHorario from '../components/CardHorario'
import CardInicioInfo from '../components/CardInicioInfo'
import MainLayout from '../components/MainLayout'
import Datarow from '../components/Datarow'
import Access from '../components/card/Access'
import toast, { Toaster } from 'react-hot-toast';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react'

const OBTENER_CLAVE = gql`
mutation ObtenerClave($input: ClaveInput) {
  obtenerClave(input: $input)
}
`;

export default function Home() {

  const [obtenerClave] = useMutation(OBTENER_CLAVE);
  const [access, state_access] = useState(false);
  const [clave, state_clave] = useState('');

  const getClave = async (e) => {
    e.preventDefault();

    try {

      const { data } = await obtenerClave({
        variables: {
          input: {
            clave: clave
          }
        }
      })

      if (data.obtenerClave) {
        state_access(true)
      } else {
        toast.custom((t) => (
          <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-red-600 rounded`}>
            <div className='text-center'>
              <span className="material-symbols-outlined">
                warning
              </span>
            </div>
            <h5 className='text-white '>contraseña incorrecta</h5>
          </div>
        ));
        state_access(false);
        state_clave('');
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Toaster />
      {
        access == true ?
          <div className='py-2' >
            <MainLayout />
            <CardInicioInfo />
            <CardHorario />
            <Datarow />
          </div>
          : <Access value={clave} onChange={(e) => state_clave(e.target.value)} submit={getClave} />
      }
    </div>
  )
}