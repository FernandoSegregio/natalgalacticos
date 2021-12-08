import React from 'react';

class ComoSurgiu extends React.Component {
  render() {
    return (
      <div className="div-surgiu">
        <div className="texto-surgiu">
          <h2 id="historia">Como Surgiu:</h2>
          <h3>
            {`Nosso projeto surgiu em 2013, com intuito de transformar o
             Natal de famílias carentes, nosso grupo de amigos se reuniu
             com um único propósito, levar alegria e felicidade para essas 
             famílias em forma de presentes e cestas básicas. Desde então já
              distribuímos à mais de mil famílias, brinquedos, cestas, ovos 
              de páscoa, chocotones e muito mais.`}
          </h3>
        </div>
        <div className="texto-proposito">
          <h2 id="proposito">Nosso Propósito:</h2>
          <h3>
            {`Transformar o dia de muitos com amor, generosidade e 
            solidariedade, oferecendo o melhor de cada um de nós.
            Com amizade, amor, alegria e carinho,   
            as relações se fortalecem ainda mais.`}
          </h3>
        </div>
      </div>
    );
  }
}

export default ComoSurgiu;
