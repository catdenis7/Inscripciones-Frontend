export default function AccordionContent({ accordionContent }) {
  return (
    <section className='materias-habilitadas'>
      <div className="accordion" id="accordionExample">
        {accordionContent.map((accordionContent, index) => {
          let heading = "heading" + JSON.stringify(index);
          let collapseOne = "collapse" + JSON.stringify(index);
          let collapseTwo = "#collapse" + JSON.stringify(index);
          return (
            <div className="accordion-item">
              <h2 className="accordion-header" id={heading}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={collapseTwo}
                  aria-expanded="true"
                  aria-controls={collapseOne}
                >
                  <h6>{accordionContent.materia} </h6>
                </button>
              </h2>
              <div
                id={collapseOne}
                className="accordion-collapse collapse show"
                aria-labelledby={heading}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container">
                    {accordionContent.datos.map((item, key) => {
                      return (
                        <>
                          <div className='row'>
                            <div className='col-10'>
                              <div className={item.className}>
                                <div className="card">
                                  <div className={item.cardBody}>


                                    <div className="row">
                                      <div className="col">{item.grupoDocente}</div>
                                      <div className="row">
                                        <div className="col">{item.dias}</div>
                                      </div>
                                      <div className="row">
                                        <div className="col">Cupo: {item.cupo}</div>
                                      </div>
                                    </div>


                                  </div>
                                </div> 
                              </div>
                            </div>
                            <div className='col-2'>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                <label class="form-check-label" for="exampleRadios1">

                                </label>
                              </div>
                            </div>

                          </div>

                        </>


                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
