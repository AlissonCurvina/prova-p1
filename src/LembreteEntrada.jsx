import React from "react"

export default class LembreteEntrada extends React.Component {
    render() {
        return (
        <div>
            <div>Digite seu lembrete</div>
            <input 
                onChange={this.props.atualizarValorInput}
                value={this.props.valorInput} type="text"/>
            <button 
                className="d-flex"
                onClick={this.props.obterLembrete}>
                Adicionar
            </button>
        </div>
        )
    }
}