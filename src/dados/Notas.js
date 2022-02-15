export default class ArrayNotas {
    constructor() {
        this.notas = []
        this._inscritos = []
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar() {
        this._inscritos.forEach(func => func(this.notas))
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
    }

    apagarNotas(indice) {
        this.notas.splice(indice, 1)
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}