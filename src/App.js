import elis from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={elis}
          alt="logo"
          className="logo"
          style={{ width: "100px", marginTop: "10px" }}
        />
      </header>
      <main></main>
    </div>
  );
}

export default App;
