import Navbar from "../../components/Navbar";
import AccordionContent from '../../components/AccordionContent';
import ScheduleFinalLevantamiento from '../../components/ScheduleFinalLevantamiento';

export default function LevantamientoHorario() {

  let accordionContent = [
    {
      materia: 'CONTABILIDAD (ADM200)',
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
      materia: 'FÍSICA III (FIS200)',
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
      materia: 'PROGRAMACIÓN II (INF210)',
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
            <h1>Horario</h1>
          </div>
          <div className='col-3'>
            <p className='icons-right'>
            <i class="bi bi-printer-fill"></i>
            </p>
          </div>
          <div className='line'></div>
        </div>
        
        <div className='row'>
          <div className='col-5'>
            
          </div>
          <div className='col-7'>
            <ScheduleFinalLevantamiento/>
          </div>
        </div>       
      </section>
    </div>
  );
}