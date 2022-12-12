import React from 'react';
import { Link } from 'react-scroll';
import ESCUDO_ESQUERDA from '../fotos/escudoesquerda.png';
import ESCUDO_DIREITA from '../fotos/escudodireita.png';
import Contador from './Contador';

class Header extends React.Component {
  render() {

    return (
      <header className="header-component">
        <nav className="menu-nav">
          <Link
            className="link-to-nav"
            to="historia"
            spy
            smooth
            offset={-50}
            duration={5000}
          >
            COMO SURGIU

          </Link>
          <Link
            className="link-to-nav"
            to="proposito"
            spy
            smooth
            offset={-50}
            duration={5000}
          >
            NOSSO PROPÓSITO

          </Link>
          <Link
            className="link-to-nav"
            to="acoes"
            spy
            smooth
            offset={-50}
            duration={5000}
          >
            NOSSAS AÇÕES

          </Link>
          <Link
            className="link-to-nav"
            to="sobre"
            spy
            smooth
            offset={-50}
            duration={5000}
          >
            QUEM SOMOS

          </Link>

        </nav>
        <div className="titulo-escudo">
          <img className="escudo1" src={ESCUDO_ESQUERDA} alt="" />
          <div className="titulo">
            <h2>NATAL GALÁCTICOS</h2>
            <h5>Fazer o bem sem olhar a quem!</h5>
            <Contador />
          </div>
          <img className="escudo2" src={ESCUDO_DIREITA} alt="" />
        </div>
        <audio
          data-testid="audio-component"
          src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/41/58/36/4158361d-9967-dbad-a49b-d49a7e823b1e/mzaf_9759408052324659026.plus.aac.p.m4a"
          controls
          autoPlay={true}
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </header>
    );
  }
}

export default Header;
