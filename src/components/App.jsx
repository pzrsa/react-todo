import FilterableTodoList from "./FilterableTodoList";

const App = () => {
  return (
    <div className="App">
      <a style={{ textDecoration: "none", color: "black" }} href="/">
        <h1>React Todo</h1>
      </a>
      <FilterableTodoList />
    </div>
  );
};

export default App;
