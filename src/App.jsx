import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

const App = () => {
  return(
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <LembreteLista/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <LembreteEntrada/>
        </div>
      </div>
    </div>
  )
}

export default App