import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Filme = {
  id: number;
  titulo: string;
  ator: string;
  genero: string;
  faixaEtaria: number;
};

const ListarFilmes = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await axios.get('http://localhost:5000/filmes');
      setFilmes(response.data.filmes);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  const handleEditar = (id: number) => {
    navigate(`/editar-filme/${id}`);
  };

  const handleExcluir = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/filmes/${id}`);
      findAll();
    } catch (error) {
      console.error('Erro ao excluir filme:', error);
    }
  };

  return (
    <div className="list-group">
      {filmes.map((filme) => (
        <div className="list-group-item list-group-item-action d-flex flex-row justify-content-between" key={filme.id}>
          <div className="d-flex flex-column">
            <h5 className="mb-1">{filme.titulo}</h5>
            <p className="mb-1">{`Ator: ${filme.ator}`}</p>
            <p className="mb-1">{`Gênero: ${filme.genero}`}</p>
            <p className="mb-1">{`Faixa Etária: ${filme.faixaEtaria}`}</p>
          </div>
          <div className="d-flex flex-column align-self-center">
            <button className="btn btn-primary mb-2" onClick={() => handleEditar(filme.id)}>
              Editar
            </button>
            <button className="btn btn-danger" onClick={() => handleExcluir(filme.id)}>
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListarFilmes;
