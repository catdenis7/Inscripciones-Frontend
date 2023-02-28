import '../assets/css/style.css';
import EscudoPic from '../assets/images/uagrm-escudo_886x1130.png'
import { Link } from 'react-router-dom';
import Profile from '../assets/images/profile-cat.jpg'

var name = 'Catherine';
export default function Navbar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href="#/">
                        <img src={EscudoPic} alt="Logo" width="44.3" height="56.5" className='d-inline-block align-text-center'></img>
                        UAGRM Inscripciones</a>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarNavDropdown">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/'>
                                    Inicio
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/levantamiento'>
                                    Levantamiento
                                </Link>
                            </li>
                            <li className='nav-item dropdown'>
                                <a className="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Otros Servicios
                                </a>
                                <ul className='dropdown-menu'>
                                    <li><a className='dropdown-item disabled' href="#/"><i class="bi bi-lock-fill"></i> Bloqueos</a></li>
                                    <li><a className='dropdown-item disabled' href="#/"><i class="bi bi-newspaper"></i> Maestro de Oferta </a></li>
                                    <li><a className='dropdown-item disabled' href="#/"><i class="bi bi-calendar-week-fill"></i> Calendario Académico </a></li>
                                </ul>
                            </li>
                        </ul>
                        <hr></hr>
                    </div>
                    <div className='collapse navbar-collapse' id="navbarNavDropdown">
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item dropdown'>
                                <a className="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hola {name}
                                    <img src={Profile} className='img-user-profile' alt="Foto de Perfil"></img>                          
                                </a>
                                <ul className='dropdown-menu'>
                                    <li><a className='dropdown-item' href="#/">
                                        219063362 <br></br>
                                        INGENIERÍA INFORMÁTICA <br></br>
                                        SANTA CRUZ DE LA SIERRA <br></br>
                                        PERIODO 3-2022 <br></br>
                                        </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}