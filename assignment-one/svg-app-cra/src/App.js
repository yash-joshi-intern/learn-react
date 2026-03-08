import logo from './java-4-logo.svg';
import logoTwo from './java-4-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoTwo} className="App-logo-Two" alt="logo" />
        <p>
          Just Started Editing Files
        </p>
        <a
          className="App-link"
          href="https://docs.oracle.com/en/java/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn Java
        </a>
      </header>
    </div>
  );
}

export default App;
