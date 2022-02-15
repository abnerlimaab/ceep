import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notas: []
    }
  }
  
  criarNota(titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArryNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArryNotas
    }
    this.setState(novoEstado)
  }

  deletarNota() {
    console.log("deletar")
  }

  render() {
    return (
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas notas={this.state.notas}/>
        </section>
    );
  }
}

export default App;
