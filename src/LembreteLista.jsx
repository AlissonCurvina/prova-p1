import React from "react"

export default class LembreteLista extends React.Component {
    render() {
        const lembretesParaExibir = this.props.estaFiltrado ?
            this.props.lembretes.filter((lembrete) => {
                return lembrete[1] == 1
            })
            : this.props.lembretes

    return (
        <div>
            <button onClick={() => this.props.filtrar()}>
                <i className="fa-solid fa-filter"></i>
                <div>{`${this.props.estaFiltrado ? "Limpar Filtro" : "Filtrar favoritos"}`}</div>
            </button>
            <div>
                {lembretesParaExibir.map(lembrete => (
                    <div key={lembrete[0]}>
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <div>
                                    <p className="text-center">{lembrete[0]}</p>
                                </div>
                                <button onClick={() => this.props.removerLembrete(lembrete[0])}>
                                    <i className="fa-trash fa-solid"></i>
                                </button>
                                <button onClick={() => this.props.alterarStatusFavoritoLembrete(lembrete[0])}>
                                    <i className={`fa-${lembrete[1] ? "solid" : "regular"} fa-star`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}
