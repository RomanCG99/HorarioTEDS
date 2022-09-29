import React, { useEffect } from 'react'
import Rows from './Rows';
import { useQuery, gql } from '@apollo/client';
import GetDays from '../../components/GetDays';
import GetDate from '../GetDate'
import LogoColor from '../../img/LogoColor.png'
import Image from 'next/image'

const DATA = gql`
    query obtenerUnidades {
    obtenerUnidades {
        id
        unidad
        lunes {
        nombre
        destino
        }
        martes {
        nombre
        destino
        }
        miercoles {
        nombre
        destino
        }
        jueves {
        nombre
        destino
        }
        viernes {
        nombre
        destino
        }
        sabado {
        nombre
        destino
        }
        domingo {
        nombre
        destino
        }
        servicio
    }
    }
`
    ;

const infoColRow = () => {

    const { data, startPolling, stopPolling } = useQuery(DATA);

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling();
        }
    }, [startPolling, stopPolling])

    return (
        <div className='row'>
            <div className='w-full bg-white flex justify-center mb-4 pt-2'>
                <div className='md:w-1/12 h-fit pb-2'>
                    <Image src={LogoColor} alt="Logo" />
                </div>
            </div>
            <GetDays />
            <GetDate />

            {
                data ? data.obtenerUnidades.map((unidad, dar) => {
                    return (
                        <Rows key={dar} id={unidad.id} unidad={unidad} />
                    )
                }) : null
            }
        </div>
    )
}


export default infoColRow