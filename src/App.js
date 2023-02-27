import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioMainPage from './pages/InicioPages/InicioMainPage';
import LevantamientoMainPage from './pages/LevantamientoPages/LevantamientoMainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route index element={<InicioMainPage/>}/>
            <Route path="levantamiento" element={<LevantamientoMainPage />} />
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
