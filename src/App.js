import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioMainPage from './pages/InicioPages/InicioMainPage';
import LevantamientoMainPage from './pages/LevantamientoPages/LevantamientoMainPage';
import LevantamientoHorario from './pages/LevantamientoPages/LevantamientoHorario';
import AdicionMainPage  from './pages/AdicionPages/AdicionMainPage';
import InscripcionMainPage from './pages/InscripcionPages/InscripcionMainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route index element={<InicioMainPage/>}/>
            <Route path="levantamiento" element={<LevantamientoMainPage />} /> 
            <Route path="levantamiento/horario" element={<LevantamientoHorario />} /> 
            <Route path="adicion" element={<AdicionMainPage />} /> 
            <Route path="adicion/horario" element={<LevantamientoHorario />} /> 
            <Route path="inscripcion" element={<InscripcionMainPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
