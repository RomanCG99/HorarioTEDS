import CardHorario from '../components/CardHorario'
import CardInicioInfo from '../components/CardInicioInfo'
import Lista from '../components/Lista'
import MainLayout from '../components/MainLayout'

const defaultRows = [
  { id: "ARG981UH90", LUNES: { cliente: 'Kensa', destino: '' }, MARTES: { cliente: '', destino: '' }, MIERCOLES: { cliente: '', destino: '' }, JUEVES: { cliente: '', destino: '' }, VIERNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, SABADO: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, DOMINGO: { cliente: '', destino: '' } },
  { id: "FUH193UH90", LUNES: { cliente: 'KENSA', destino: 'Ramos Arizpe' }, MARTES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MIERCOLES: { cliente: '', destino: '' }, JUEVES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, VIERNES: { cliente: '', destino: '' }, SABADO: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, DOMINGO: { cliente: 'Kensa', destino: '' } },
  { id: "POW238UH90", LUNES: { cliente: '', destino: '' }, MARTES: { cliente: '', destino: '' }, MIERCOLES: { cliente: '', destino: '' }, JUEVES: { cliente: '', destino: '' }, VIERNES: { cliente: '', destino: '' }, SABADO: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, DOMINGO: { cliente: 'Kensa', destino: 'Ramos Arizpe' } },
  { id: "FOM887UH90", LUNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MARTES: { cliente: '', destino: '' }, MIERCOLES: { cliente: 'KENSA', destino: '' }, JUEVES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, VIERNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, SABADO: { cliente: '', destino: '' }, DOMINGO: { cliente: 'Kensa', destino: 'Ramos Arizpe' } },
  { id: "QPL039UH90", LUNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MARTES: { cliente: '', destino: '' }, MIERCOLES: { cliente: 'KENSA', destino: 'RAMOS ARIZPE' }, JUEVES: { cliente: '', destino: '' }, VIERNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, SABADO: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, DOMINGO: { cliente: '', destino: '' } },
  { id: "YUD671UH90", LUNES: { cliente: '', destino: '' }, MARTES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MIERCOLES: { cliente: '', destino: '' }, JUEVES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, VIERNES: { cliente: '', destino: '' }, SABADO: { cliente: 'Kensa', destino: '' }, DOMINGO: { cliente: 'Kensa', destino: 'Ramos Arizpe' } },
  { id: "GPD004UH90", LUNES: { cliente: '', destino: '' }, MARTES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MIERCOLES: { cliente: 'KENSA', destino: '' }, JUEVES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, VIERNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, SABADO: { cliente: 'Kensa', destino: '' }, DOMINGO: { cliente: '', destino: '' } },
  { id: "GPD004UH90", LUNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MARTES: { cliente: '', destino: '' }, MIERCOLES: { cliente: 'KENSA', destino: 'RAMOS ARIZPE' }, JUEVES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, VIERNES: { cliente: '', destino: '' }, SABADO: { cliente: 'Kensa', destino: '' }, DOMINGO: { cliente: '', destino: '' } },
  { id: "GPD004UH90", LUNES: { cliente: '', destino: '' }, MARTES: { cliente: '', destino: '' }, MIERCOLES: { cliente: '', destino: '' }, JUEVES: { cliente: '', destino: '' }, VIERNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, SABADO: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, DOMINGO: { cliente: 'Kensa', destino: 'Ramos Arizpe' } },
  { id: "GPD004UH90", LUNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MARTES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MIERCOLES: { cliente: '', destino: '' }, JUEVES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, VIERNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, SABADO: { cliente: '', destino: '' }, DOMINGO: { cliente: '', destino: '' } },
  { id: "GPD004UH90", LUNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MARTES: { cliente: '', destino: '' }, MIERCOLES: { cliente: 'KENSA', destino: 'RAMOS ARIZPE' }, JUEVES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, VIERNES: { cliente: '', destino: '' }, SABADO: { cliente: '', destino: '' }, DOMINGO: { cliente: 'Kensa', destino: 'Ramos Arizpe' } },
  { id: "GPD004UH90", LUNES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MARTES: { cliente: 'Kensa', destino: 'Ramos Arizpe' }, MIERCOLES: { cliente: 'KENSA', destino: '' }, JUEVES: { cliente: '', destino: '' }, VIERNES: { cliente: 'Kensa', destino: '' }, SABADO: { cliente: '', destino: '' }, DOMINGO: { cliente: 'Kensa', destino: '' } },
];

export default function Home() {
  return (
    <div>
      <MainLayout />
      <CardInicioInfo />
      <CardHorario />
      {
        defaultRows.map(Schedule =>
          <Lista unidad={Schedule} />
        )}
    </div>
  )
}
