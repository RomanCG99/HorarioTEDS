import CardHorario from '../components/CardHorario'
import CardInicioInfo from '../components/CardInicioInfo'
import Lista from '../components/Lista'
import MainLayout from '../components/MainLayout'
import { useQuery, gql } from '@apollo/client'

const DATA = gql`
query obtenerViaje {
  obtenerViaje {
    id
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

export default function Home() {
  const {data} = useQuery(DATA);
  return (
    <div>
      <MainLayout />
      <CardInicioInfo />
      <CardHorario />
      {
        data ?(data.obtenerViaje.map(Schedule => (
          <Lista key={Schedule.id} unidad={Schedule}/>
        ))):null
      }
    </div>
  )
}
