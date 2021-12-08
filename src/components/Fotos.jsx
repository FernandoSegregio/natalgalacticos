import React from 'react';
import foto1 from '../fotos/foto1.jpg';
import foto2 from '../fotos/foto2.jpg';
import foto3 from '../fotos/foto3.jpg';
import foto5 from '../fotos/foto5.jpg';

class Fotos extends React.Component {
  render() {
    return (
      <div className="bloco-fotos">
        <img
          className="fotos"
          src={ foto1 }
          alt="Crianças com Papai Noel"
        />
        <img className="fotos" src={ foto3 } alt="Criança sorrindo com Papai Noel" />
        <img
          className="fotos"
          src={ foto2 }
          alt="Fila pessoas aguardando os presentes"
        />
        <img
          className="fotos"
          src={ foto5 }
          alt="Criança sorrindo ao receber presente"
        />
      </div>
    );
  }
}

export default Fotos;
