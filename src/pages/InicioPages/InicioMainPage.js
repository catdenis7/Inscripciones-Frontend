import Navbar from '../../components/Navbar';
import logo from '../../logo.svg';

export default function InicioMainPage() {
    return (
        <div className="Inicio">
            <Navbar />
            <header className="Inicio-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    PAGINA EN CONSTRUCCIÓN
                </p>
            </header>
        </div>
    );
}