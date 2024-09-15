import "./App.css";
import Gameboard from "./components/Gameboard";

function App() {
  const TOTAL_CELL = 12;

  return (
    <div className="game-container">
      <Gameboard totalCell={TOTAL_CELL} />
    </div>
  );
}

export default App;
