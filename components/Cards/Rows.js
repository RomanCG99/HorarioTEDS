import React from 'react';
import GetInfo from '../GetInfo';
import { useFormik } from 'formik';
import { gql, useMutation } from '@apollo/client';

const ACTUALIZAR_USUARIO = gql 

const getColores = (Dia) => {
  if (Dia.cliente && Dia.destino) {
    return "bg-green-600"
  } if (Dia.cliente || Dia.destino) {
    return "bg-amber-500"
  } else {
    return "bg-white"
  }
}

const Rows = (props) => {
  const { unidad } = props

  const formik = useFormik({
    initialValues: {
      lunescliente: unidad.LUNES.cliente,
      lunesdestino: unidad.LUNES.destino,

      martescliente: unidad.MARTES.cliente,
      martesdestino: unidad.MARTES.destino,

      miercolescliente: unidad.MIERCOLES.cliente,
      miercolesdestino: unidad.MIERCOLES.destino,

      juevescliente: unidad.JUEVES.cliente,
      juevesdestino: unidad.JUEVES.destino,

      viernescliente: unidad.VIERNES.cliente,
      viernesdestino: unidad.VIERNES.destino,

      sabadocliente: unidad.SABADO.cliente,
      sabadodestino: unidad.SABADO.destino,

      domingocliente: unidad.DOMINGO.cliente,
      domingodestino: unidad.DOMINGO.destino,
    },
    enableReinitialize: true,
    onSubmit: (Values) => {
      
      const { lunescliente, lunesdestino,
        martescliente, martesdestino,
        miercolescliente, miercolesdestino,
        juevescliente, juevesdestino,
        viernescliente, viernesdestino,
        sabadocliente, sabadodestino,
        domingocliente, domingodestino } = Values;
      }
    });
    
    return (
    <form onSubmit={formik.handleSubmit}>
      <div className='md:w-full grid grid-cols-8 gap-2 font-bold text-base' >
        <div className='flex justify-around my-auto'>
          <button><span className="material-symbols-outlined text-indigo-700 font-semibold">edit</span></button>
          <label>{unidad.id}</label>
        </div>

        <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.LUNES)}>
          <GetInfo value={formik.values.lunescliente} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.LUNES} title="Cliente: " />
          <GetInfo value={formik.values.lunesdestino} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.LUNES} title="Destino: " />

        </div>
        <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.MARTES)}>
          <GetInfo value={formik.values.martescliente} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.MARTES} title="Cliente: " />
          <GetInfo value={formik.values.martesdestino} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.MARTES} title="Destino: " />
        </div>
        <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.MIERCOLES)}>
          <GetInfo value={formik.values.miercolescliente} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.MIERCOLES} title="Cliente: " />
          <GetInfo value={formik.values.miercolesdestino} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.MIERCOLES} title="Destino: " />
        </div>
        <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.JUEVES)}>
          <GetInfo value={formik.values.juevescliente} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.JUEVES} title="Cliente: " />
          <GetInfo value={formik.values.juevesdestino} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.JUEVES} title="Destino: " />
        </div>
        <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.VIERNES)}>
          <GetInfo value={formik.values.viernescliente} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.VIERNES} title="Cliente: " />
          <GetInfo value={formik.values.viernesdestino} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.VIERNES} title="Destino: " />
        </div>
        <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.SABADO)}>
          <GetInfo value={formik.values.sabadocliente} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.SABADO} title="Cliente: " />
          <GetInfo value={formik.values.sabadodestino} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.SABADO} title="Destino: " />
        </div>
        <div className={'justify-around  py-4 mt-2 rounded-lg ' + getColores(unidad.DOMINGO)}>
          <GetInfo value={formik.values.domingocliente} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.DOMINGO} title="Cliente: " />
          <GetInfo value={formik.values.domingodestino} onChange={formik.handleChange} onBlur={formik.handleBlur} dia={unidad.DOMINGO} title="Destino: " />
        </div>
      </div>
    </form>
  )

}

export default Rows
