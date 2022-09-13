import React from 'react'
import imagen from '../img/LogoColor1.png'
import Image from 'next/image'

const MainLayout = () => {
    return (
        <header className='md: bg-white '>
            <div className='mx-auto flex  w-20 py-2'>
                <div classname='h-fill'>
                    <Image src={imagen}/>
                </div>
            </div>
        </header>
    )
}

export default MainLayout