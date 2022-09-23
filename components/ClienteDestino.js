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

            label : "text-blue-900 bg-white ",
            input : "text-blue-900 bg-white "
        }
    }
}
const ClienteDestino = (props) => {
    const { label, inp, type, estilolabel, estiloinput, color , onChange, id} = props;
    const Color = inputColor(color)

    return (
        <div className="flex md:w-full rounded py-2">
            <label className= {Color.label + estilolabel}> {label} </label>
            <input onChange={onChange} id={id} value={inp} className= {Color.input + estiloinput} type={type}  />
        </div>
    )
}

export default ClienteDestino