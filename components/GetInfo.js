import React from 'react'

const GetInfo = (props) => {
    const { value, title, style} = props
   
    const Labelstyle = "text-blue-900 mr-1"

    return (
        <div className='flex mb-1'>
            <label className={Labelstyle } > {title} </label>
            <input value={value} className={style } type="text" readOnly />
        </div>
    )
}

export default GetInfo