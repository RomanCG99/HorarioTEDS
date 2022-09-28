import React from 'react'
import { useState } from 'react'

const Access = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    const { value, onChange, submit } = props

    return (
        <div className=' flex h-screen '>
            <div className="w-4/12 py-20 bg-gray-200 rounded-xl m-auto">
                <div className='text-center py-4'>
                    <span className=" material-symbols-outlined text-8xl text-black "> verified_user </span>
                </div>
                <div>
                    <h2 className=" text-center text-3xl font-bold text-gray-600 ">ingresar contraseña</h2>
                </div>
                <div className='py-4 text-center'>
                    <div className='border-2 border-gray-400 w-6/12 mx-auto rounded flex items-stretch'>
                        <input type={showPassword ? 'text' : 'password'} className="w-11/12 pl-2 bg-white focus:outline-0 text-black rounded" value={value} id='clave' onChange={onChange} />
                      
                        <label onClick={() => setShowPassword(!showPassword)}
                            className=" text-black cursor-pointer " >
                            {
                                showPassword ?
                                    <span className="py-2 material-symbols-outlined bg-white">
                                        visibility
                                    </span>
                                    : <span className="py-2 material-symbols-outlined bg-white">
                                        visibility_off
                                    </span>
                            }
                        </label>
                        
                    </div>
                    <div className='py-4 mx-auto text-center justify-center flex'>
                        <button className='mx-6 w-1/6 border-2 border-gray-400 bg-white rounded' onClick={submit}>
                            <p className='text-black' >ingresar</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Access