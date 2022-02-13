import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {
    constructor() {
        super()
        this.titulo = ""
    }

    handleMudancaTitulo(e) {
        this.titulo = e.target.value
        console.log(this.titulo)
    }

    render() {
        return (
            <form className="form-cadastro">
                <input 
                    type="text" 
                    placeholder="titulo"
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        )
    }
}

export default FormularioCadastro