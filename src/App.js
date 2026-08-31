import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom'; // used to navigate from one page to another page

function App() {
  const navigate= useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={()=> {navigate('/header' ,{state:{id:"1",name:"ABC"}})}}> Go to Header </button>
      <button onClick={()=> navigate('/footer')}> Go to Footer </button>
    </div>
  );
}

export default App;
