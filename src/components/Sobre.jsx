import React from 'react';
import foto4 from '../fotos/foto4.jpg';
import foto6 from '../fotos/foto6.jpeg';

class Sobre extends React.Component {
  render() {
    return (
      <div className="div-sobre">
        <div className="foto-sobre">
          <img className="foto-sobre1" src={ foto6 } alt="" />
          <img className="foto-sobre2" src={ foto4 } alt="" />
        </div>
        <div className="texto-sobre">
          <h2 id="sobre">Quem Somos:</h2>
          <h3>
            Somos um grupo de amigos que há mais de 15 anos, formamos um time de
            futebol com intuito nos reunirmos aos finais de semana, com com a
            finalidade intuito resenhar e jogar bola. Com o tempo, a ideia do
            Galácticos como um instrumento social foi crescendo naturalmente em
            cada um dos participantes, e nasceu, daí, os nossos diversos projetos
            sociais.
          </h3>
        </div>
      </div>
    );
  }
}

export default Sobre;
