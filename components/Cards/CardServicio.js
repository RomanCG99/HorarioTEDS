import React from 'react'

const CardServicio = (props) => {
  const {mantenimiento} = props
 

  function espaciado(){
    var Mantenimiento = mantenimiento.replace("/\s/g,").split("").join(' ');
    return Mantenimiento;
  }

  return (
    <div className='flex w-full ml-3 border-8 border-dashed border-r-8 border-black rounded-lg bg-yellow-500 my-2'>
      <div className='md:w-1/12 flex justify-around mx-auto my-4 py-4 align-middle'>
        <span className="material-symbols-outlined text-black text-5xl ">build_circle</span>
      </div>
      <div className={'md:w-10/12  mt-4 mb-4 py-7 rounded-lg flex justify-around  font-bold text-black'}>
        <label>L A </label>
        <label>U  N  I  D  A  D </label>
        <label className='font-bold text-xl italic'>{espaciado()}</label>
        <label>E S T A </label>
        <label>E N  </label>
        <label>M A N T E N I M I E N T O </label>
      </div>
      <div className='md:w-1/12 flex justify-around mx-auto my-4 py-4 align-middle '>
        <span className="material-symbols-outlined text-black text-5xl ">build_circle</span>
      </div>
    </div>
  )
}

export default CardServicio