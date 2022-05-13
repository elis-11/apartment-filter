import elis from "./images/logo.png";
import { Flats } from "./pages/Flats";
import { FlatContextProvider } from "./contexts/FlatContext";
import './App.scss'

function App() {
  return (
    <FlatContextProvider>
      <div className="App">
        <header className="App-header">
          <h1>Bukking.com</h1>
        </header>
        <main>
          <img src={elis} alt="logo" style={{width:'100px', marginTop: '10px'}} />
          <Flats />
        </main>
      </div>
    </FlatContextProvider>
  );
}

export default App;
