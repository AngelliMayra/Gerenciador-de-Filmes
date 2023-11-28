import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CriarFilme from './components/CriarFilme';
import ListarFilme from './components/ListarFilme';
import EditarFilme from './components/EditarFilme';
import ExcluirFilme from './components/ExcluirFilme';
import PaginaInicial from './components/PaginaInicial';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/criar-filme" element={<CriarFilme />} />
          <Route path="/listar-filmes" element={<ListarFilme />} />
          <Route path="/editar-filme/:id" element={<EditarFilme />} />
          <Route path="/excluir-filme/:id" element={<ExcluirFilme />} />
          <Route path="/" element={<PaginaInicial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
