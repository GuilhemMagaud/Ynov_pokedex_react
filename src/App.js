import Header from './common/componentes/Header.js';
import PokemonList from './common/componentes/PokemonList.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PokemonList />
    </div>
  );
}

export default App;
