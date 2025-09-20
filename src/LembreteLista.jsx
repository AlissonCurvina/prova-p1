import React from "react"


export default class LembreteLista extends React.Component {
    render() {
        return (
        <div>
            {this.props.lembretes.map(lembrete => (
                <div>{lembrete}</div>
            ))}
        </div>
        )
    }
}