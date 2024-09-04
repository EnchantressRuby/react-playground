import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/1-events/Event';
import Counter from './components/2-classComponents/Counter';
import UseStateCounter from './components/3-useState/UseStateCounter';
import UseStateCounter from './components/3-useState/UseStateObject';

function App() {
  return (
    <div className="App text-center">
      <h1>Events - useState Hook</h1>
      <Event />
      <Counter />
      <UseStateCounter />
      <UseStateObject />
    </div>
  );
}

export default App;
