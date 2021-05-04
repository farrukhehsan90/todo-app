import "./App.css";
import Form from "./Component/Form";
import Header from "./Component/Header";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <hr />
      <TodoList />
      <hr />
    </div>
  );
}

export default App;
