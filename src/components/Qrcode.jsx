import React from 'react';
import qrcode from '../fotos/qrcode.png';

class Qrcode extends React.Component {
    
  render() {
    
    return (
        <div className="foto-code">
           <img className="foto-code1" src={ qrcode} alt="" />
           <h3>Para fazer sua contribuição:</h3>
           <h4>Leia o QR Code, ou clique no botão abaixo</h4> 
           <h4>para abrir em seu App Financeiro</h4> 
           <a href="https://nubank.com.br/pagar/swdn1/r8FHsXH45J"  target="_blank" rel="noreferrer"><button className="button-code"type="button">QUERO CONTRIBUIR</button></a>
        </div>
    );
  }
  }


export default Qrcode;
