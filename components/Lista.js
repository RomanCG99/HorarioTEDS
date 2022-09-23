import React from 'react'
import ClienteDestino from './ClienteDestino';
import { useFormik } from 'formik';
import { useMutation, gql } from '@apollo/client';

const ACTUALIZAR_USUARIO = gql`
mutation actualizarViaje($id: ID!, $input: UnidadInput) {
  actualizarViaje(id: $id, input: $input) {
    id
    unidad
    lunes {
      cliente
      destino
    }
    martes {
      cliente
      destino
    }
    miercoles {
      cliente
      destino
    }
    jueves {
      cliente
      destino
    }
    viernes {
      cliente
      destino
    }
    sabado {
      cliente
      destino
    }
    domingo {
      cliente
      destino
    }
  }
  }`

const Lista = (props) => {

    const [actualizarViaje] = useMutation(ACTUALIZAR_USUARIO);

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

    const formik = useFormik({
        initialValues: {
            lunescliente: unidad.lunes.cliente,
            lunesdestino: unidad.lunes.destino,

            martescliente: unidad.martes.cliente,
            martesdestino: unidad.martes.destino,

            miercolescliente: unidad.miercoles.cliente,
            miercolesdestino: unidad.miercoles.destino,

            juevescliente: unidad.jueves.cliente,
            juevesdestino: unidad.jueves.destino,

            viernescliente: unidad.viernes.cliente,
            viernesdestino: unidad.viernes.destino,

            sabadocliente: unidad.sabado.cliente,
            sabadodestino: unidad.sabado.destino,

            domingocliente: unidad.domingo.cliente,
            domingodestino: unidad.domingo.destino,
        },

        enableReinitialize: true,

        onSubmit: async (values) => {
            const { lunescliente, lunesdestino,
                martescliente, martesdestino,
                miercolescliente, miercolesdestino,
                juevescliente, juevesdestino,
                viernescliente, viernesdestino,
                sabadocliente, sabadodestino,
                domingocliente, domingodestino } = values;
            try {
                await actualizarViaje({
                    variables: {
                        id: unidad.id,
                        input: {
                            lunes: {
                                cliente: lunescliente,
                                destino: lunesdestino,
                            },
                            martes: {
                                cliente: martescliente,
                                destino: martesdestino,
                            },
                            miercoles: {
                                cliente: miercolescliente,
                                destino: miercolesdestino,
                            },
                            jueves: {
                                cliente: juevescliente,
                                destino: juevesdestino,
                            },
                            viernes: {
                                cliente: viernescliente,
                                destino: viernesdestino,
                            },
                            sabado: {
                                cliente: sabadocliente,
                                destino: sabadodestino,
                            },
                            domingo: {
                                cliente: domingocliente,
                                destino: domingodestino,
                            }
                        }
                    }
                });
            } catch (error) {
                console.log(e)
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='md:w-full grid grid-cols-8 gap-2 text-center bg-gray-700'>
                <div className='flex my-auto py-1 mx-2'>
                    <button
                        type="submit"
                        className='material-symbols-outlined text-blue-900 mx-1'>
                        <span> edit </span>
                    </button>
                    <label className="mx-8 text-md font-semibold "> {unidad.id} </label>
                </div>
                <div className='w-full py-1'>
                    <div className={'py-1 text-center rounded ' + getColors(unidad.lunes)}>
                        <ClienteDestino color={unidad.lunes} label="Cliente: " inp={formik.values.lunescliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="lunescliente" onBlur={formik.handleBlur} />
                        <ClienteDestino color={unidad.lunes} label="Destino: " inp={formik.values.lunesdestino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="lunesdestino" onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='py-1 text-center rounded'>
                    <div className={'py-1 text-center rounded  ' + getColors(unidad.martes)}>
                        <ClienteDestino color={unidad.martes} label="Cliente: " inp={formik.values.martescliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="martescliente" onBlur={formik.handleBlur} />
                        <ClienteDestino color={unidad.martes} label="Destino: " inp={formik.values.martesdestino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="martesdestino" onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='py-1 text-center rounded'>
                    <div className={'py-1 text-center rounded  ' + getColors(unidad.miercoles)}>
                        <ClienteDestino color={unidad.miercoles} label="Cliente: " inp={formik.values.miercolescliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="miercolescliente" onBlur={formik.handleBlur} />
                        <ClienteDestino color={unidad.miercoles} label="Destino: " inp={formik.values.miercolesdestino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="miercolesdestino" onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='py-1 text-center rounded'>
                    <div className={'py-1 text-center rounded  ' + getColors(unidad.jueves)}>
                        <ClienteDestino color={unidad.jueves} label="Cliente: " inp={formik.values.juevescliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="juevescliente" onBlur={formik.handleBlur} />
                        <ClienteDestino color={unidad.jueves} label="Destino: " inp={formik.values.juevesdestino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="juevesdestino" onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='py-1 text-center rounded'>
                    <div className={'py-1 text-center rounded  ' + getColors(unidad.viernes)}>
                        <ClienteDestino color={unidad.viernes} label="Cliente: " inp={formik.values.viernescliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="viernescliente" onBlur={formik.handleBlur} />
                        <ClienteDestino color={unidad.viernes} label="Destino: " inp={formik.values.viernesdestino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="viernesdestino" onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='py-1 text-center rounded'>
                    <div className={'py-1 text-center rounded  ' + getColors(unidad.sabado)}>
                        <ClienteDestino color={unidad.sabado} label="Cliente: " inp={formik.values.sabadocliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="sabadocliente" onBlur={formik.handleBlur} />
                        <ClienteDestino color={unidad.sabado} label="Destino: " inp={formik.values.sabadodestino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="sabadodestino" onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className='py-1 text-center rounded' >
                    <div className={'py-1 text-center rounded  ' + getColors(unidad.domingo)}>
                        <ClienteDestino color={unidad.domingo} label="Cliente: " inp={formik.values.domingocliente} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="domingocliente" onBlur={formik.handleBlur} />
                        <ClienteDestino color={unidad.domingo} label="Destino: " inp={formik.values.domingodestino} type="text" estilolabel=" font-semibold text-sm w-1/4 mx-2" estiloinput=" w-3/4 font-semibold text-sm rounded focus:outline-none mx-2" onChange={formik.handleChange} id="domingodestino" onBlur={formik.handleBlur} />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Lista
