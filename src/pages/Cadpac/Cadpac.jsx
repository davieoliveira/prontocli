import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Cadpac.css";


const Cadpac = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => { 
    navigate(path);
  }

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
            <button className="btn-outline" onClick={() => handleNavigate("/")}> Log in </button>
            </div>
          </div>
        </div>
      )
    }
export default Cadpac
