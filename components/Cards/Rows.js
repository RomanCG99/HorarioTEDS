import React from 'react';
import GetInfo from '../Cards/GetInfo';
import CardServicio from './CardServicio';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation, gql } from '@apollo/client';

const getColores = (Dia) => {
  if (Dia.nombre && Dia.destino) {
    return "bg-green-600"
  } if (Dia.nombre || Dia.destino) {
    return "bg-amber-500"
  } else {
    return "bg-white"
  }
}

const DATA = gql`
    query obtenerUnidades {
    obtenerUnidades {
        id
        unidad
        lunes {
        nombre
        destino
        }
        martes {
        nombre
        destino
        }
        miercoles {
        nombre
        destino
        }
        jueves {
        nombre
        destino
        }
        viernes {
        nombre
        destino
        }
        sabado {
        nombre
        destino
        }
        domingo {
        nombre
        destino
        }
        servicio
    }
    }
`
  ;

const ACTUALIZAR_UNIDAD = gql`
mutation actualizarUnidad($id: ID!, $input:UnidadInput){
  actualizarUnidad(id: $id, input: $input){
    id
    unidad
    lunes {
      nombre
      destino
    }
    martes {
      nombre
      destino
    }
    miercoles {
      nombre
      destino
    }
    jueves {
      nombre
      destino
    }
    viernes {
      nombre
      destino
    }
    sabado {
      nombre
      destino
    }
    domingo {
      nombre
      destino
    }
    servicio
  }
}
`;


const Rows = (props) => {
  const { unidad } = props
  const estiloServ = unidad.servicio ? ' text-green-500' : ' text-red-500 '

  //MUTATION
  const [actualizarUnidad] = useMutation(ACTUALIZAR_UNIDAD);

  const formik = useFormik({
    initialValues: {
      Lune_cliente: unidad.lunes.nombre, Lune_destino: unidad.lunes.destino,
      Marte_cliente: unidad.martes.nombre, Marte_destino: unidad.martes.destino,
      Miercole_cliente: unidad.miercoles.nombre, Miercole_destino: unidad.miercoles.destino,
      Jueve_cliente: unidad.jueves.nombre, Jueve_destino: unidad.jueves.destino,
      Vierne_cliente: unidad.viernes.nombre, Vierne_destino: unidad.viernes.destino,
      Sabado_cliente: unidad.sabado.nombre, Sabado_destino: unidad.sabado.destino,
      Domingo_cliente: unidad.domingo.nombre, Domingo_destino: unidad.domingo.destino
    },
    enableReinitialize: true,
    onSubmit: async (valores) => {
      const { Lune_cliente, Lune_destino, Marte_cliente, Marte_destino, Miercole_cliente, Miercole_destino, Jueve_cliente, Jueve_destino,
        Vierne_cliente, Vierne_destino, Sabado_cliente, Sabado_destino, Domingo_cliente, Domingo_destino } = valores;

      try {
        const datos = await actualizarUnidad({
          variables: {
            id: unidad.id,
            input: {
              lunes: {
                nombre: Lune_cliente,
                destino: Lune_destino,
              },
              martes: {
                nombre: Marte_cliente,
                destino: Marte_destino,
              },
              miercoles: {
                nombre: Miercole_cliente,
                destino: Miercole_destino,
              },
              jueves: {
                nombre: Jueve_cliente,
                destino: Jueve_destino,
              },
              viernes: {
                nombre: Vierne_cliente,
                destino: Vierne_destino,
              },
              sabado: {
                nombre: Sabado_cliente,
                destino: Sabado_destino,
              },
              domingo: {
                nombre: Domingo_cliente,
                destino: Domingo_destino,
              }
            }
          }
        })
        toast.custom((t) => (
          <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto grid ring-1 ring-black ring-opacity-5`}>
            <div className='grid mx-auto py-2 justify-items-center'>
              <div className=' pt-2 mx-auto '>
                <span className="material-symbols-outlined text-green-500 text-6xl ">task_alt</span>
              </div>
              <div className='grid mx-auto py-2 justify-items-center'>
                <div className=' pt-2 mx-auto'>
                  <label className='text-gray-500'>Cambios Realizado en la unidad <label className='text-black font-bold'>{unidad.unidad}</label> </label>
                </div>
              </div>
            </div>
          </div>
        ))
        console.log(datos)
      } catch (error) {
        console.log(error)
      }
    }
  });

  async function uwu() {
    if (unidad.servicio) {
      try {
        await actualizarUnidad({
          variables: {
            id: unidad.id,
            input: {
              servicio: false,
            }
          }
        })
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await actualizarUnidad({
          variables: {
            id: unidad.id,
            input: {
              servicio: true
            }
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (

    <div className='flex'>
      <button onClick= {(e) => uwu()} > <span className={"material-symbols-outlined" + estiloServ}>construction</span></button>
      {

        unidad.servicio ?
          <form onSubmit={formik.handleSubmit} className="md:w-full grid grid-cols-8 gap-2 font-bold text-base">

            <div className='flex justify-around my-auto'>
              <button type='submit' ><span className="material-symbols-outlined text-indigo-700 font-semibold">edit</span></button>
              <label>{unidad.unidad}</label>
            </div>

            <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.lunes)}>
              <GetInfo value={formik.values.Lune_cliente} onChange={formik.handleChange} id="Lune_cliente" dia={unidad.lunes} title="Cliente: " />
              <GetInfo value={formik.values.Lune_destino} onChange={formik.handleChange} id="Lune_destino" dia={unidad.lunes} title="Destino: " />
            </div>

            <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.martes)}>
              <GetInfo value={formik.values.Marte_cliente} onChange={formik.handleChange} id="Marte_cliente" dia={unidad.martes} title="Cliente: " />
              <GetInfo value={formik.values.Marte_destino} onChange={formik.handleChange} id="Marte_destino" dia={unidad.martes} title="Destino: " />
            </div>

            <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.miercoles)}>
              <GetInfo value={formik.values.Miercole_cliente} onChange={formik.handleChange} id="Miercole_cliente" dia={unidad.miercoles} title="Cliente: " />
              <GetInfo value={formik.values.Miercole_destino} onChange={formik.handleChange} id="Miercole_destino" dia={unidad.miercoles} title="Destino: " />
            </div>

            <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.jueves)}>
              <GetInfo value={formik.values.Jueve_cliente} onChange={formik.handleChange} id="Jueve_cliente" dia={unidad.jueves} title="Cliente: " />
              <GetInfo value={formik.values.Jueve_destino} onChange={formik.handleChange} id="Jueve_destino" dia={unidad.jueves} title="Destino: " />
            </div>

            <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.viernes)}>
              <GetInfo value={formik.values.Vierne_cliente} onChange={formik.handleChange} id="Vierne_cliente" dia={unidad.viernes} title="Cliente: " />
              <GetInfo value={formik.values.Vierne_destino} onChange={formik.handleChange} id="Vierne_destino" dia={unidad.viernes} title="Destino: " />
            </div>

            <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.sabado)}>
              <GetInfo value={formik.values.Sabado_cliente} onChange={formik.handleChange} id="Sabado_cliente" dia={unidad.sabado} title="Cliente: " />
              <GetInfo value={formik.values.Sabado_destino} onChange={formik.handleChange} id="Sabado_destino" dia={unidad.sabado} title="Destino: " />
            </div>

            <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.domingo)}>
              <GetInfo value={formik.values.Domingo_cliente} onChange={formik.handleChange} id="Domingo_cliente" dia={unidad.domingo} title="Cliente: " />
              <GetInfo value={formik.values.Domingo_destino} onChange={formik.handleChange} id="Domingo_destino" dia={unidad.domingo} title="Destino: " />
            </div>

            <Toaster />
          </form>
          : <CardServicio mantenimiento={unidad.unidad} />
      }


    </div>
  )
}

export default Rows