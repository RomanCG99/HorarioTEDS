import React from 'react'


function getColores(Dia) {
    if (Dia.cliente && Dia.destino) {
        return{
            label: 'bg-green-600 text-white',
            input: 'bg-green-600 text-white',
        }
    }
    if (Dia.cliente || Dia.destino) {
        return{
            label: 'bg-amber-500 text-white',
            input: 'bg-amber-500 text-white'
        }
    }
    return{
        label: 'bg-white text-blue-900' ,
        input: 'bg-white text-blue-900'
    }
}

const GetInfo = (props) => {
    
    const { value, title,dia} = props
    const estilazo = getColores(dia) 

    const Labelstyle = " mr-1"
    const Inputstyle = " "

    return (
        <div className='flex mb-1'>
            <label className={estilazo.label + Labelstyle} > {title} </label>
            <input value={value} className={estilazo.input + Inputstyle}  />
        </div>
    )
}

export default GetInfo