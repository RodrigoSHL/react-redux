
import Pokemon from "./components/Pokemon";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Task from "./components/Task";

function App() {

  return (
    <div className="container">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemons">Pokemon</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
            <Routes>
              <Route path="/pokemons" element={<Pokemon />} />
              <Route path="/tasks" element={<Task/>} />
              <Route path="/" element={<h1>home</h1>} />
            </Routes>
    </Router>
    </div>
  );
}

export default App;
