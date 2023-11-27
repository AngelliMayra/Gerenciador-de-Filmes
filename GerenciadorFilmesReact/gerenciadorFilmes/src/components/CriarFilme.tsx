import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CriarFilme = () => {
  const navigate = useNavigate();
  const [filme, setFilme] = useState({
    titulo: '',
    ator: '',
    faixaEtaria: 0,
    genero: '',
  });

  const [errorForms, setErrorForms] = useState({
    titulo: '',
    ator: '',
    faixaEtaria: '',
    genero: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilme((prevFilme) => ({
      ...prevFilme,
      [name]: value,
    }));
    setErrorForms((prevError) => ({
      ...prevError,
      [name]: '',
    }));
  };

  const validaForm = () => {
    let validado = true;
    const errosForm = { titulo: '', ator: '', faixaEtaria: '', genero: '' };
  
    if (!filme.titulo) {
      validado = false;
      errosForm.titulo = "O campo Título é obrigatório.";
    }
  
    if (!filme.ator) {
      validado = false;
      errosForm.ator = "O campo Ator é obrigatório.";
    }
  
    if (!filme.faixaEtaria || filme.faixaEtaria <= 0) {
      validado = false;
      errosForm.faixaEtaria = "A Faixa Etária deve ser maior que zero.";
    }
  
    if (!filme.genero) {
      validado = false;
      errosForm.genero = "O campo Gênero é obrigatório.";
    }
  
    setErrorForms(errosForm);
    return validado;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/filmes', filme);
      alert('Filme cadastrado com sucesso!');
      navigate('/listar-filmes');
    } catch (error) {
      console.error('Erro ao criar filme:', error);
      alert('Erro ao criar filme!');
    }
  };

  return (
    <div className="form-container">
      <h2>Criar Filme</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" name="titulo" value={filme.titulo} onChange={handleChange} />
        </div>
        <div>
          <label>Ator:</label>
          <input type="text" name="ator" value={filme.ator} onChange={handleChange} />
        </div>
        <div>
          <label>Faixa Etária:</label>
          <input type="number" name="faixaEtaria" value={filme.faixaEtaria} onChange={handleChange} />
        </div>
        <div>
          <label>Gênero:</label>
          <input type="text" name="genero" value={filme.genero} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Criar Filme</button>
      </form>
    </div>
  );
};

export default CriarFilme;
