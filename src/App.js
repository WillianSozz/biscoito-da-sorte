import React, { Component } from "react";
import './estilo.css'
import biscoito from './assets/biscoito.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase : ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.', 
      "É em meio a dificuldade que se encontra a oportunidade",
      "O êxito é ir de frustração a frustração sem perder a animação.",
      "Mesmo que algo pareça difícil, nunca desista antes de tentar.",
      "Você é o único que entende as suas dificuldades, por isso motive se a prosseguir.",
      "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso.",
      "A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis.",
      "Que os dias bons se tornem rotina, e os ruins se tornem raros.",
      "É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota.",
      "Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução.",
      "Já pensou que você já superou muitas dificuldades até aqui?.",
      "Suas pequenas vitórias são todas as dificuldades superadas durante sua vida, tenha orgulho delas.",
      "Cada dificuldade ultrapassada te faz mais forte.",
      "Desistir não deve ser considerado, mesmo que as coisas não sejam fáceis.",
      "O êxito é a somatória dos pequenos esforços repetidos diariamente.",
      "Para quem está iluminado, os dias de luz sempre retornam.",
      "Conheci o pior das pessoas e o melhor de mim, passando por tempos difíceis.",
      "Você não vai encontrar ninguém para sorrir por ti, então não deixe de sorrir.",
      "Mesmo que nem todo dia seja bom, há algo de bom todo dia.",
      "Em dias difíceis, lembre-se do que Deus já fez por ti. Recorde o que pode te oferecer esperança.",
      "Da mesma forma que a felicidade não dura para sempre, a tristeza também não."];
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = ' "' + this.frases[numeroAleatorio] + '" ';
    this.setState(state);
  };

  render() {
    return (
      <div className="container">
        <h3 className="textoFrase">BISCOITO DA SORTE!!</h3>
        <img src={biscoito} className="img" />
        <Botao nome="Abrir biscoito!!" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button className="botao" onClick={this.props.acaoBtn} >{this.props.nome}</button>
      </div>
    )
  }
}

export default App;