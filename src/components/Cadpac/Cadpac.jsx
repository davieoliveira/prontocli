import React from 'react'
import "./Cadpac.css";


const Cadpac = () => {
    return (
        <div className="container">
          <div className="login-section">
            <h2>Cadastro Paciente</h2>
            <form>
              <input type="text" placeholder="nome" className="input-field" />
              <input type="email" placeholder="email" className="input-field" />
              <input type="text" placeholder="cpf" className="input-field" />
              <input type="password" placeholder="senha" className="input-field" />
              <br />
              <button type="submit" className="btn">Criar</button>
            </form>
          </div>
    
          <div className="signup-section">
            <h2>Já possui conta?</h2>
            <p>Clique abaixo para acessar a tela de login</p>
            <div className="signup-buttons">
              <button className="btn-outline">Log in</button>
            </div>
          </div>
        </div>
    );
    };
export default Cadpac
