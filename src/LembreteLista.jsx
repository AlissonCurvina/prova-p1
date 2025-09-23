import React from "react"

export default class LembreteLista extends React.Component {
    render() {
    return (
        <div>
            {this.props.lembretes.map(lembrete => (
                <div key={lembrete}>
                    <div className="card">
                        <div className="card-body d-flex justify-content-center">
                            <div>
                                <p className="text-center">{lembrete}</p>
                            </div>
                            <button onClick={() => this.props.removerLembrete(lembrete)}>
                                <i className="fa-trash fa-solid"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        )
    }
}