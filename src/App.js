import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notas: [],
      categorias: []
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

  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({notas: arrayNotas})
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }

  render() {
    return (
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <main className="conteudo-principal">
            <ListaCategorias 
              categorias={this.state.categorias}
              adicionarCategoria={this.adicionarCategoria.bind(this)}
            />
            <ListaDeNotas 
              notas={this.state.notas}
              apagarNota={this.deletarNota.bind(this)}
            />
          </main>
        </section>
    );
  }
}

export default App;
