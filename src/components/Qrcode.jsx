import React from 'react';
import qrcode from '../fotos/qrcode.png';

class Qrcode extends React.Component {
    
  render() {
    
    return (
        <div className="foto-code">
           <img className="foto-code1" src={ qrcode} alt="" />
           <h3>Para fazer sua contribuição:</h3>
           <h3>Leia o QR Code, ou clique no botão abaixo</h3> 
           <h3>para abrir em seu App Financeiro</h3> 
           <a href="https://nubank.com.br/pagar/swdn1/r8FHsXH45J"  target="_blank" rel="noreferrer"><button className="button-code"type="button">IR PARA O MEU APP</button></a>
        </div>
    );
  }
  }


export default Qrcode;
