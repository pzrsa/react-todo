import FilterableTodoList from "./FilterableTodoList";
import TaskAdder from "./TaskAdder";

const App = () => {
  return (
    <div className="App">
      <h1>React Todo</h1>
      <TaskAdder />
      <FilterableTodoList />
    </div>
  );
};

export default App;
