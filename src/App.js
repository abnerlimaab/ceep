import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

class App extends Component {

  constructor() {
    super()
    this.categorias = new Categorias()
    this.notas = new ArrayNotas()
  }
  
  render() {
    return (
        <section className="conteudo">
          <FormularioCadastro 
            categorias={this.categorias.categorias}
            criarNota={this.notas.adicionarNota}
          />
          <main className="conteudo-principal">
            <ListaCategorias 
              categorias={this.categorias.categorias}
              adicionarCategoria={this.categorias.adicionarCategoria}
            />
            <ListaDeNotas 
              notas={this.notas.notas}
              apagarNota={this.notas.apagarNotas}
            />
          </main>
        </section>
    );
  }
}

export default App;
