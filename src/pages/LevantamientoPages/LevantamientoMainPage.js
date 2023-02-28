import Chip from '@mui/material/Chip';

import Stack from '@mui/material/Stack';
import Navbar from "../../components/Navbar";
import PopoverInformation from "../../components/PopoverInformation";
import Schedule from '../../components/Schedule';

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
            <PopoverInformation popoverMessage={popoverMessage} />
          </div>
          <div className='line'></div>
        </div>
        <div className='row'>
          <div className='col-9 my-2'>
            <h3>Materias Inscritas:</h3>

            <div className='row'>
              <div className='col'>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="baseline"
                  spacing={1}
                >
                  <Chip label="ADM100 - ADMINISTRACIÓN" color="primary" />
                  <Chip label="FIS102 - FÍSICA II" color="success" />
                  <Chip label="INF120 - PROGRAMACIÓN I" color="info" />
                  <Chip label="MAT102 - CÁLCULO II" color="warning" />
                  <Chip label="ELC102 - PROGRAMACIÓN GRÁFICA" color="secondary" />
                </Stack>
              </div>
            </div>

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
          <div className='col-3'>
            <section className='menu-mateSSrias'>
              <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='col-9'>
            <Schedule></Schedule>
          </div>
        </div>
      </section>
    </div>
  );
}