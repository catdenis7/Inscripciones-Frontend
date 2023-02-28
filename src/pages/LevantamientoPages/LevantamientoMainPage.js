import Navbar from "../../components/Navbar";
import PopoverInformation from "../../components/PopoverInformation";

export default function levantamientoMainPage() {
  let popoverMessage = <p>Ten en cuenta: <br></br>
  - Para realizar el levantamiento de dos materias, P.P.A.C. {'>'}= 60 <br></br>
  - Para realizar el levantamiento de una materia, P.P.A.C. {'>'}=51 y P.P.A.C. {'<'} 60 <br></br></p>;
  return (
    <div className='levantamiento-main'>
      <Navbar />
      <section className='background-body'>
        <div className='row'>
          <div className='col-9'>
            <h1>Levantamiento</h1>
          </div>
          <div className='col-3'>
            <PopoverInformation popoverMessage={popoverMessage}/>
          </div>
          <div className='line'></div>
        </div>
        <div className='row'>
          <div className='col-9 my-2'>
            <h3>Materias Inscritas:</h3>
          </div>
          <div className='col-3 my-2'>
            <h2>P.P.A.C. 80</h2>
            <h6>187 - 3 Ingenieria Informática </h6>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3>Materias Habilitadas:</h3>
          </div>
        </div>
      </section>
    </div>
  );
}