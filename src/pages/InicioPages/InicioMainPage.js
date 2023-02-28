import Navbar from '../../components/Navbar';
import logo from '../../logo.svg';
import Home from '../../components/Home';

export default function InicioMainPage() {
    return (
        <div className="Inicio">
            <Navbar />
            <header className="Inicio-header">
                <img src={logo} className="App-logo" alt="logo" />
               
                     <Home />
                <p>
               

                    {/* PAGINA EN CONSTRUCCIÓN */}
                </p>
            </header>
        </div>
    );
}