import React from 'react'
import imagen from '../img/LogoColor1.png'
import Image from 'next/image'

const MainLayout = () => {
    return (
        <header className='md: bg-white h-fill  '>
            <div className='mx-auto flex  w-20   '>
                <div>
                    <Image src={imagen}/>
                </div>
            </div>
        </header>
    )
}

export default MainLayout