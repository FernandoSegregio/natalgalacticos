import React from 'react';
import acao1 from '../fotos/acao1.jpg';
import acao2 from '../fotos/acao2.jpg';
import acao3 from '../fotos/acao3.jpg';
import acao4 from '../fotos/acao4.jpg';
import acao5 from '../fotos/acao5.jpg';
import acao6 from '../fotos/acao6.jpg';
import acao7 from '../fotos/acao7.jpg';
import acao8 from '../fotos/acao8.jpg';
import acao9 from '../fotos/acao9.jpg';

class Acoes extends React.Component {
  render() {
    return (
      <>
        <div>
          <h3 id="acoes">Nossas Ações</h3>
        </div>
        <div className="div-acoes">
          <img className="foto-acao" src={ acao1 } alt="" />
          <img className="foto-acao" src={ acao2 } alt="" />
          <img className="foto-acao" src={ acao3 } alt="" />
          <img className="foto-acao" src={ acao4 } alt="" />
          <img className="foto-acao" src={ acao5 } alt="" />
          <img className="foto-acao" src={ acao6 } alt="" />
          <img className="foto-acao" src={ acao7 } alt="" />
          <img className="foto-acao" src={ acao8 } alt="" />
          <img className="foto-acao" src={ acao9 } alt="" />
        </div>
      </>
    );
  }
}

export default Acoes;
