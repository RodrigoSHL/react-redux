import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Pokemon from "./components/Pokemon";

function App() {

  const store = generateStore();
  return (
    <div className="container">
      <Provider store={store}>
        <Pokemon/>
      </Provider>
    </div>
  );
}

export default App;
