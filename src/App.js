import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/modules/Main";
import Login from "./components/modules/Login";
import Register from "./components/modules/Register";
import Problemas from "./components/modules/Problemas";
import Contact from "./components/modules/Contact";
import Suscripcion from "./components/modules/Suscripcion";
import Perfil from "./components/modules/Perfil";
import Leaderboard from "./components/modules/Leaderboard";
import About from "./components/modules/About";
import Concursos from "./components/modules/Concursos";
import ParticipantesAnt from "./components/modules/ParticipantesAnt";
import CrearProb from "./components/modules/CrearProb";
import ConcursosPersonal from "./components/modules/ConcursosPersonal";
import SolveProblems from "./components/modules/SolveProblems";
import Dashboard from "./components/modules/Dashboard";


//Control de rutas
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/solveproblems' element={<SolveProblems />} />
          <Route path='/problemas' element={<Problemas />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/suscripcion' element={<Suscripcion />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/leader' element={ <Leaderboard />} />
          <Route path='/about' element={ <About />} />
          <Route path='/concursos' element={ <Concursos />} />
          <Route path='/participantes-anteriores' element={ <ParticipantesAnt /> } />
          <Route path='/crear-desafio' element={ <CrearProb /> } />
          <Route path="/crear-prueba-personalizada" element={ <ConcursosPersonal /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
