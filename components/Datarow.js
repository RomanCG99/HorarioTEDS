import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useEffect } from 'react'
import Lista from '../components/Lista'

const DATA = gql`
query obtenerViaje {
  obtenerViaje {
    id
    servicio
    unidad
    lunes {
      cliente
      destino
    }
    martes {
      cliente
      destino
    }
    miercoles {
      cliente
      destino
    }
    jueves {
      cliente
      destino
    }
    viernes {
      cliente
      destino
    }
    sabado {
      cliente
      destino
    }
    domingo {
      cliente
      destino
    }
  }
}`

const Datarow = () => {

  const { data, startPolling, stopPolling } = useQuery(DATA);
  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    }
  }, [startPolling, stopPolling]);

  return (
    <div>
      {
        data ? (data.obtenerViaje.map(Schedule => (
          <Lista key={Schedule.id} unidad={Schedule} />
        ))) : null
      }
    </div>
  )
}

export default Datarow
