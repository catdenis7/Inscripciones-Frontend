import Chip from '@mui/material/Chip';
// eslint-disable-next-line
import Stack from '@mui/material/Stack';
import Navbar from "../../components/Navbar";
import PopoverInformation from "../../components/PopoverInformation";
import Schedule from '../../components/Schedule';
import AccordionContent from '../../components/AccordionContent';
import CustomizedDialogs from '../../components/Dialog';

export default function AdicionMainPage() {
  let popoverMessage = <p>Solo puedes adicionar un maximo de 2 materias</p>;
  let accordionContent = [
    {
      materia: 'LENGUAJES FORMALES (ADM200)',
      datos: [
        {
          grupoDocente: 'SA - FLORES FLORES MARCOS OSCAR',
          dias: '|LUN 08:30-10:00 236-25|MIE 08:30-10:00 236-25|VIE 08:30-10:00 236-25',
          cupo: '10',
          className: 'select-right-option',
          cardBody: 'card-body text-primary',
          state: 'checked',
        },
        {
          grupoDocente: 'MV - CESPEDES ROJAS GUALBERTO',
          dias: '|LUN 21:15-22:45 236-25|MIE 21:15-22:45 236-25|VIE 21:15-22:45 236-25',
          cupo: '0',
          className: 'select-no-cupo',
          cardBody: 'card-body text-secondary',
          state: 'disabled',
        },
        {
          grupoDocente: 'SB - OROSCO GOMEZ RUBEN',
          dias: '|LUN 18:15-19:45 236-25|MIE 19:45-21:15 236-25|VIE 18:15-19:45 236-25',
          cupo: '12',
          className: 'select-cross-schedule',
          cardBody: 'card-body text-primary',
          state: 'checked',
        },
      ]
    },
    {
      materia: 'ECUACIONES DIFERENCIALES (FIS200)',
      datos: [
        {
          grupoDocente: 'SC - ROSALES FUENTES JORGE MARCELO',
          dias: '|LUN 11:30-13:00 236-25|MIE 11:30-13:00 236-25|VIE 11:30-13:00 236-25|VIE 21:15-22:45 236-25',
          cupo: '10',
          className: 'select-right-option',
          cardBody: 'card-body text-primary',
          state: 'checked',
        },
        {
          grupoDocente: 'SB - ARGOTE CLAROS IRMA ISABEL',
          dias: '|LUN 07:00-08:30 236-25|LUN 11:30-13:45 236-25|VIE 11:30-13:45 236-25',
          cupo: '5',
          className: 'select-cross-schedule',
          cardBody: 'card-body text-primary',
          state: 'checked',
        },
        {
          grupoDocente: 'SA - SENA AVENDAÑO EULOGIO',
          dias: '|MAR 10:45-13:00 236-25|MIE 16:45-18:15 236-25|JUE 10:45-13:00 236-25',
          cupo: '12',
          className: 'select-cross-schedule',
          cardBody: 'card-body text-primary',
          state: 'checked',
        },
      ]
    },
    {
      materia: 'ARQUITECTURA EN COMPUTADORAS (INF210)',
      datos: [
        {
          grupoDocente: 'SC -CONTRERAS VILLEGAS JUAN CARLOS',
          dias: '|MAR 07:00-09:15 236-25|JUE 07:00-09:15 236-25',
          cupo: '15',
          className: 'select-no-cupo',
          cardBody: 'card-body text-secondary',
        },
        {
          grupoDocente: 'SA -CONTRERAS VILLEGAS JUAN CARLOS',
          dias: '|MAR 13:45-16:00 236-25|JUE 13:45-16:00 236-25',
          cupo: '15',
          className: 'select-no-cupo',
          cardBody: 'card-body text-secondary',
          state: 'disabled',
        },
        {
          grupoDocente: 'SD - LOPEZ NEGRETTY MARY DUNNIA',
          dias: '|LUN 18:15-20:30 236-25|VIE 18:15-20:30 236-25',
          cupo: '12',
          className: 'select-cross-schedule',
          cardBody: 'card-body text-primary',
          state: "checked",
        },
      ]
    },
  ]
  return (
    <div className='levantamiento-main'>
      <Navbar />
      <section className='background-body'>
        <div className='row'>
          <div className='col-9'>
            <h1>Adición</h1>
          </div>
          <div className='col-3'>
            <PopoverInformation popoverMessage={popoverMessage} />
          </div>
          <div className='line'></div>
        </div>
        <div className='row'>
          <div className='col-9 my-2'>
            <h3>Materias Inscritas:</h3>
            <section className='chip-section'>
              <div className='row'>
                <div className='col'>
                  <Chip className='chip-item' label="ADM100 - ADMINISTRACIÓN" color="secondary" />
                  <Chip className='chip-item' label="FIS102 - FÍSICA II" color="success" />
                  <Chip className='chip-item' label="ELC102 - PROGRAMACIÓN GRÁFICA" color="primary" />
                  <Chip className='chip-item' label="INF120 - PROGRAMACIÓN I" color="warning" />
                  <Chip className='chip-item' label="MAT102 - CÁLCULO II" color="info" />
                </div>
              </div>
            </section>
          </div>
          <div className='col-3 my-2'>
            <h2>P.P.A.C. 80</h2>
            <h6>187 - 3 Ingeniería Informática </h6>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3>Materias Habilitadas:</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-5'>
            <AccordionContent accordionContent={accordionContent} />
          </div>
          <div className='col-7'>
            <Schedule></Schedule>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <CustomizedDialogs/>
          </div>
        </div>
        
      </section>
    </div>
  );
}