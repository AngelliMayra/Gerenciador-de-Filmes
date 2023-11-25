import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ExcluirFilme: React.FC = () => {
  const { id } = useParams(); // Obtém o id da rota atual
  const history = useNavigate(); // Inicialize o useHistory ou useNavigate

  const handleExcluir = async () => {
    try {
      await axios.delete(`http://localhost:5000/filmes/${id}`);
      history('/listar-filmes'); // Redireciona para a página de listagem após a exclusão
    } catch (error) {
      console.error('Erro ao excluir filme:', error);
    }
  };

  return (
    <div>
      <h2>Tem certeza que deseja excluir o filme?</h2>
      <button onClick={handleExcluir}>Excluir</button>
    </div>
  );
};

export default ExcluirFilme;
