import "./App.css";

// Components
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";

const foo = () => alert("Hello world");

const App = () => {
  return (
    <div className="App">
      <Header title="Unit Testing" />
      <Counter initialCount={0} foo={foo} />
    </div>
  );
};

export default App;
