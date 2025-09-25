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
			novoLembrete: null,
			estaFiltrado: 0
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
		const novoLembrete = [this.obterValorInput(), 0]
		const stateListaLembretesAtual = this.state.lembretes

		stateListaLembretesAtual.push(novoLembrete)


		this.setState(stateAtual => ({
			lembretes: stateListaLembretesAtual
		}))

		this.limparValorInput()
	}

	removerLembrete = (lembrete) => {
		
		const stateListaLembretesAtual = this.state.lembretes

		const listaLembretesNova = stateListaLembretesAtual.filter(elemento => {
			
			const nome = elemento[0]
			
			return nome	!= lembrete
		})


		this.setState({
			lembretes: listaLembretesNova
		})
	}

	alterarStatusFavoritoLembrete = (lembrete) => {
		const listaLembretesNova = this.state.lembretes.map(lembreteAtual => {
		if (lembreteAtual[0] == lembrete) {
			return [lembreteAtual[0], lembreteAtual[1] ? 0 : 1]
		} else {
			return lembreteAtual
		}
	})

		this.setState({
			lembretes: listaLembretesNova
		})
	}

	filtrar = (e) => {
		if(this.state.estaFiltrado) {
			this.setState({
				estaFiltrado: 0
			})
			
		} else {
			this.setState({
				estaFiltrado: 1
			})
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row mt-3">
					<div className="col">
						<LembreteLista 
							estaFiltrado={this.state.estaFiltrado}
							lembretes={this.state.lembretes}
							removerLembrete={this.removerLembrete}
							alterarStatusFavoritoLembrete={this.alterarStatusFavoritoLembrete}
							filtrar={this.filtrar}
							/>
					</div>
				</div>
				<div className="row">
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