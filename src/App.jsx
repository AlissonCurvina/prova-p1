import React from "react"
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

class App extends React.Component {

	

	constructor(props) {
		super(props)
		this.lembretes = []

		this.state = {
			lembretes: this.lembretes,
			valorInput: "",
			novoLembrete: null
		}
	}

	atualizarValorInput = (e) => {
		this.setState({valorInput: e.target.value})
	}

	obterValorInput = () => {
		return this.state.valorInput
	}

	limparValorInput = () => {
		this.setState({valorInput: ""})
	}

	obterLembrete = () => {
		const novoLembrete = this.obterValorInput()
		// this.setState({novoLembrete: this.obterValorInput()})


		this.setState(stateAtual => ({
			lembretes: [...stateAtual.lembretes, novoLembrete]
		}))

		this.limparValorInput()
	}

	removerLembrete = (lembrete) => {
		const listaLembretesAtual = [...this.state.lembretes]
		const indiceElementoARemover = listaLembretesAtual.indexOf(lembrete)
		listaLembretesAtual.splice(indiceElementoARemover, 1)

		this.setState({
			lembretes: [...listaLembretesAtual]
		})
	}

	render() {
		return (
			<div className="container">
				<div className="row mt-4">
					<div className="col">
						<LembreteLista 
							lembretes={this.state.lembretes}
							removerLembrete={this.removerLembrete}/>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col">
						<LembreteEntrada 
							atualizarValorInput={this.atualizarValorInput}
							valorInput={this.state.valorInput}
							obterLembrete={this.obterLembrete}/>
					</div>
				</div>
			</div>
		)
	}
}

export default App