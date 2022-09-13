import React from 'react'

function inputColor(Dia) {

    if (Dia.cliente && Dia.destino) {
        return {
            label: "text-white",
            input: "bg-green-600 text-white"
        }
    } 
    if (Dia.cliente || Dia.destino) {
        return {
            label: "text-white",
            input: "bg-amber-500 text-white"
        }
    } 
    else {
        return{

            label : "bg-white text-blue-900",
            input : "bg-white text-blue-900"
        }
    }
}
const ClienteDestino = (props) => {
    const { label, inp, type, estilolabel, estiloinput, color } = props;
    const Color = inputColor(color)

    return (
        <div className="flex md:w-full rounded py-2">
            <label className= {Color.label + estilolabel} > {label} </label>
            <input className= {Color.input + estiloinput} type={type} value={inp} />
        </div>
    )
}

export default ClienteDestino