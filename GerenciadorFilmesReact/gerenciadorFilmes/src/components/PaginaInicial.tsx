import React from 'react';
   import { Link } from 'react-router-dom';

   const PaginaInicial = () => {
     return (
        <div>
      <h1 className="text-center mb-4">Bem-vindo ao nosso gerenciador de filmes!</h1>
      <div className="row justify-content-center">
        <div className="card col-md-5 m-3">
          <div className="card-body">
            <h5 className="card-title">Adicionar Filme</h5>
            <p className="card-text">Clique aqui para adicionar um novo filme à nossa coleção.</p>
            <Link to="/criar-filme" className="btn btn-primary">Adicionar Filme</Link>
          </div>
        </div>
        <div className="card col-md-5 m-3">
          <div className="card-body">
            <h5 className="card-title">Listar Filmes</h5>
            <p className="card-text">Clique aqui para ver a lista de todos os filmes cadastrados.</p>
            <Link to="/listar-filmes" className="btn btn-primary">Listar Filmes</Link>
          </div>
        </div>
      </div>
    </div>
     );
   }

   export default PaginaInicial;