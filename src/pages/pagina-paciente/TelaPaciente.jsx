import React from "react";
import Header from '../../componement/Header';
import "./TelaPaciente.css";


const TelaPaciente = () => {
  return (
    <div>

        <Header />

        <div className="main">
          <div className="actions">
              <button className="new-consult">Nova Consulta</button>
              <button className="filter">Filtrar</button>
          </div>
          <hr/>
          <div className="cards-container">
              <div className="card">
                  <h2>Dr. Samuel Marques</h2>
                  <p>Horário: 07hrs</p>
                  <p>Sala: lab 6</p>
                  <p>Orientações: lorem isto oloem</p>
                  <div class="buttons">
                      <button className="details">Detalhes</button>
                      <button className="cancel">Cancelar</button>
                  </div>
              </div>
              <div className="card">
                  <h2>Dr. Ana Costa</h2>
                  <p>Horário: 09hrs</p>
                  <p>Sala: lab 8</p>
                  <p>Orientações: exemplo orientação</p>
                  <div className="buttons">
                      <button className="details">Detalhes</button>
                      <button className="cancel">Cancelar</button>
                  </div>
              </div>
          </div>
      </div>    
    </div>
    )
}
export default TelaPaciente;