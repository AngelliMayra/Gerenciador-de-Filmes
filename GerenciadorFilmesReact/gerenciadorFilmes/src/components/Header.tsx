import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import '../index.css';


const Logo = () => {
  return (
    <Navbar.Brand href="/" className="mr-auto">
      <img
        alt=""
        src="/logotipo.png"
        width="120"
        height="120"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  );
};

const Title = () => {
  return (
    <div className="text-center mb-4">
      <h1 style={{ color: '#f3f3f3', fontFamily: 'Montserrat, sans-serif', margin: '0' }}>Gerenciador de Filmes</h1>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="text-center">
      <button type="button" className="btn btn-secondary custom-btn mr-2" style={{ width: '160px' }}>
        <Link to="/criar-filme" className="nav-link text-white">Adicionar Filme</Link>
      </button>
      <button type="button" className="btn btn-secondary custom-btn" style={{ width: '160px' }}>
        <Link to="/listar-filmes" className="nav-link text-white">Listar Filmes</Link>
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#143447' }} variant="dark">
      <Logo />
      <div className="w-100">
        <Title />
        <Menu />
      </div>
    </Navbar>
  );
};

export default Header;
