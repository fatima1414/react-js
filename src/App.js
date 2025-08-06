import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img
          src="https://t3.ftcdn.net/jpg/09/36/32/36/240_F_936323620_mpIqx9HOhY8iH2UsojlNRf0C2UaWn3rp.jpg"
          class="img-fluid rounded-top"
          alt=""
        />

        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          "To ride a horse is to fly without wings."
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         show more
        </a>
      </header>
    </div>
  );
}

export default App;
