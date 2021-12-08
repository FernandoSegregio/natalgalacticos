import React from 'react';
import Header from '../components/Header';
import Fotos from '../components/Fotos';
import Sobre from '../components/Sobre';
import ComoSurgiu from '../components/ComoSurgiu';
import Acoes from '../components/Acoes';
import Videos from '../components/Videos';
import Contato from '../components/Contato';

class Login extends React.Component {
  render() {
    return (
      <div className="div-pai">
        <Header />
        <Fotos />
        <div className="espaco-sobre">
          <p>
            { `"Não devemos permitir que alguém saia da
          nossa presença sem se sentir melhor e mais feliz."`}
            <span>
              <br />
              <i>
                {'  '}
                Madre Teresa de Calcutá
              </i>
            </span>
          </p>
        </div>
        <Videos />
        <div className="espaco-sobre">
          <p>
            {`"O que eu faço é uma gota 
        no meio de um oceano, mas sem ela o oceano seria menor."`}
            <span>
              <br />
              <i>
                {'  '}
                Madre Teresa de Calcutá
              </i>
            </span>
          </p>
        </div>
        <ComoSurgiu />
        <div className="espaco-sobre">
          <p>
            {`"Se a gente é capaz de espalhar alegria,
            Se a gente é capaz de toda essa magia,
            Eu tenho certeza que a gente podia,
            Fazer com que fosse Natal todo dia"`}
            <span>
              <br />
              <i>
                {'  '}
                Natal Todo Dia - Roupa Nova
              </i>
            </span>
          </p>
        </div>
        <Acoes />
        <div className="espaco-sobre">
          <p>
            {`"Sempre que puder, fale de amor e com amor 
          para alguém. Faz bem aos ouvidos de quem ouve e à alma de quem fala."`}
            <samp>
              <br />
              <i>
                {'  '}
                Irmã Dulce
              </i>
            </samp>
          </p>
        </div>
        <Sobre />
        <div className="espaco-sobre">
          <p>
            {`“As pessoas esquecerão o que você disse, 
            as pessoas esquecerão o que você fez... 
            Mas elas nunca esquecerão... Como você as fez sentir.”`}
            <span>
              <br />
              <i>
                {'  '}
                Chico Xavier
              </i>
            </span>
          </p>
        </div>
        <Contato />
      </div>
    );
  }
}
export default Login;
