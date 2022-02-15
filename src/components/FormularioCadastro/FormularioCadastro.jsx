import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {
    constructor(props) {
        super(props)
        this.titulo = ""
        this.texto = ""
    }

    _handleMudancaTitulo(e) {
        e.stopPropagation()
        this.titulo = e.target.value
    }

    _handleMudancaTexto(e) {
        e.stopPropagation()
        this.texto = e.target.value
    }

    _criaNota(e) {
        e.preventDefault()
        e.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form 
                className="form-cadastro"
                onSubmit={this._criaNota.bind(this)}>
                <input 
                    type="text" 
                    placeholder="titulo"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        )
    }
}

export default FormularioCadastro