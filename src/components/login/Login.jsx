import React from 'react';
import "./Login.css";

const Login = () => {
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
          <button className="btn-outline">Paciente</button>
          <button className="btn-outline">Médico</button>
        </div>
      </div>
    </div>
  );
};

export default Login;