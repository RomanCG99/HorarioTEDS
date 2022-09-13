import React from 'react'

const ClienteDestino = (props) => {
    const { label, inp, type, estilolabel, estiloinput } = props;
    
    return (
        <div className="flex md:w-full rounded bg-white py-1">
            <label className={estilolabel}> {label} </label>
            <input className={estiloinput} type={type} value={inp} />
        </div>
    )
}

export default ClienteDestino