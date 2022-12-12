import React, { Component } from 'react'

export default class Contador extends Component {
 contadorNatal(){
     const hoje = new Date();
     const natal = new Date(hoje.getFullYear(), 11, 25);
     const um_dia = 1000*60*60*24; 

     if (hoje.getMonth()===11 && hoje.getDate()>25)
         natal.setFullYear(natal.getFullYear()+1);

    const dias = Math.ceil(
        (natal.getTime() - hoje.getTime()) / (um_dia));

    return dias;
 }

    render() {
        return (
            <div className='contador'>
           <h3>Faltam <span>{ this.contadorNatal() }</span> { this.contadorNatal() > 1 ? "dias" : "dia"} para o Natal!</h3>         
            </div>
        )
    }
}
