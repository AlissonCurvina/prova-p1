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
            <button className="mb-3 btn btn-primary" onClick={() => this.props.filtrar()}>
                <i className="fa-solid fa-filter"></i>
                <div>{`${this.props.estaFiltrado ? "Limpar Filtro" : "Filtrar favoritos"}`}</div>
            </button>
            <div>
                {lembretesParaExibir.map(lembrete => (
                    <div className="mb-3" key={lembrete[0]}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center justify-content-evenly">
                                <h5 className="w-100 text-center">
                                    {lembrete[0]}
                                </h5>
                                <div className="d-flex">
                                    <button className={`btn btn-${lembrete[1] ? "warning" : ""}`} onClick={() => this.props.alterarStatusFavoritoLembrete(lembrete[0])}>
                                        <i className={`fa-${lembrete[1] ? "solid" : "regular"} fa-star`}></i>   
                                    </button>
                                    <button className="btn btn-danger ms-3" onClick={() => this.props.removerLembrete(lembrete[0])}>
                                        <i className="fa-trash fa-solid"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}
