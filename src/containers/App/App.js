import './App.css';
import Todo from '../Todo/Todo';

const todos = [
  { title: "Todo type 1" },
  { title: "Todo type 2" },
  { title: "Todo type 3" },
]

function App() {
  return (
    <div className="App">
      <div className="contain">
        <div className="row my-5 justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <Todo todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
