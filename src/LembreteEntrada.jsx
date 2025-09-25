import React from "react"

export default class LembreteEntrada extends React.Component {
    render() {
        return (
        <div>
            <h5 className="mb-3">Digite seu lembrete</h5>
            <div className="d-flex w-100">
                <input 
                    className="w-100"
                    onChange={this.props.atualizarValorInput}
                    value={this.props.valorInput} type="text"/>
                <button 
                    className="d-flex btn btn-primary ms-3"
                    onClick={this.props.obterLembrete}>
                    Adicionar
                </button>
            </div>
        </div>
        )
    }
}