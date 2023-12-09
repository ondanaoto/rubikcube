import logo from './logo.svg';
import './App.css';
import Rubik from './rubiks.tsx';

function App() {
  const sequence = ["L", "L", "D⁻¹", "U⁻¹", "L", "D", "D", "L", "U⁻¹", "R", "D", "F", "F", "D"];
  return (
    <div className="App">
      <header className="App-header">
        <Rubik seq={sequence} />
      </header>
    </div>
  );
}

export default App;
