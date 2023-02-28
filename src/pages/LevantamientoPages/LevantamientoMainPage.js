import Navbar from "../../components/Navbar";
export default function levantamientoMainPage() {
  return (
    <div className='levantamiento-main'>
      <Navbar />
      <section className='background-body'>
        <div className='row'>
          <div className='col-9'>
            <h1>Levantamiento</h1>
          </div>
          <div className='col-3'>
            <p className='icons-right'>
              <i className="bi bi-info-circle-fill"></i>
            </p>
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