import React from 'react';
import { Link } from 'react-scroll';
import ESCUDO_ESQUERDA from '../fotos/escudoesquerda.png';
import ESCUDO_DIREITA from '../fotos/escudodireita.png';
import Contador from './Contador';

class Header extends React.Component {
  render() {
    return (
      <header className="header-component">
        <nav className="header-component">      
          <Link
            className="link-to-nav"
            to="historia"
            spy
            smooth
            offset={ -50 }
            duration={ 5000 }
          >
            COMO SURGIU

          </Link>
          <Link
            className="link-to-nav"
            to="proposito"
            spy
            smooth
            offset={ -50 }
            duration={ 5000 }
          >
            NOSSO PROPÓSITO

          </Link>
          <Link
            className="link-to-nav"
            to="acoes"
            spy
            smooth
            offset={ -50 }
            duration={ 5000 }
          >
            NOSSAS AÇÕES

          </Link>
          <Link
            className="link-to-nav"
            to="sobre"
            spy
            smooth
            offset={ -50 }
            duration={ 5000 }
          >
            QUEM SOMOS

          </Link>
          {/* <Link
            className="link-to-nav"
            to="contato"
            spy
            smooth
            offset={ 200 }
            duration={ 5000 }
          >
            NATAL 2021

          </Link> */}
        </nav>
        <div className="titulo-escudo">
          <img className="escudo" src={ ESCUDO_ESQUERDA } alt="" />
          <div className="titulo">
            <h2>NATAL GALÁCTICOS 2021</h2>
            <h5>Fazer o bem sem olhar a quem!</h5>
            <Contador />    
          </div>
          <img className="escudo" src={ ESCUDO_DIREITA } alt="" />
        </div>
      </header>
    );
  }
}

export default Header;
