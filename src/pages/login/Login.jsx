import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => { 
    navigate(path);
  }

  return (
    <div className="container">
      <div className="login-section">
        <h2>Entrar na conta</h2>
        <form>
          <input type="text" placeholder="nome" className="input-field" />
          <input type="password" placeholder="**********" className="input-field" />
          <br />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>

      <div className="signup-section">
        <h2>Novo usuário?</h2>
        <p>Escolha uma das opções abaixo para se cadastrar em nosso sistema</p>
        <div className="signup-buttons">
          <button className="btn-outline" onClick={() => handleNavigate("/cadastro-paciente")}>Paciente</button>
          <button className="btn-outline" onClick={() => handleNavigate("/cadastro-medico")}>Médico</button>
        </div>
      </div>

    </div>
    
  );
};

export default Login;