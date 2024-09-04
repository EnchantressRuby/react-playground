import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/1-events/Event';
import Counter from './components/2-classComponents/Counter';

function App() {
  return (
    <div className="App text-center">
      <h1>Events - useState Hook</h1>
      <Event />
      <Counter />
    </div>
  );
}

export default App;
