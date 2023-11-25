import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type Filme = {
  id: number;
  titulo: string;
  ator: string;
  genero: string;
  faixaEtaria: number;
};

const EditarFilme = () => {
  const { id } = useParams<{ id: string }>();

  const [filme, setFilme] = useState<Filme>({
    id: 0,
    titulo: '',
    ator: '',
    genero: '',
    faixaEtaria: 0,
  });

  useEffect(() => {
    buscarFilme();
  }, []);

  const buscarFilme = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/filmes/${id}`);
      setFilme(response.data.filme);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilme({ ...filme, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:5000/filmes/${id}`, filme);
      window.location.href = '/listar-filmes';
    } catch (error) {
      console.error('Erro ao editar filme:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Editar Filme</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input type="text" name="titulo" value={filme.titulo} onChange={handleInputChange} className="form-control" id="titulo" />
        </div>
        <div className="form-group">
          <label htmlFor="ator">Ator:</label>
          <input type="text" name="ator" value={filme.ator} onChange={handleInputChange} className="form-control" id="ator" />
        </div>
        <div className="form-group">
          <label htmlFor="genero">Gênero:</label>
          <input type="text" name="genero" value={filme.genero} onChange={handleInputChange} className="form-control" id="genero" />
        </div>
        <div className="form-group">
          <label htmlFor="faixaEtaria">Faixa Etária:</label>
          <input type="number" name="faixaEtaria" value={filme.faixaEtaria} onChange={handleInputChange} className="form-control" id="faixaEtaria" />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditarFilme;
