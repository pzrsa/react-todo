import FilterableTodoList from "./FilterableTodoList";
import TaskAdder from "./TaskAdder";

const App = () => {
  const TASKS = [
    { name: "Clean dishes", completed: false },
    { name: "Buy milk", completed: false },
    { name: "Research paper", completed: false },
  ];
  return (
    <div className="App">
      <h1>React Todo</h1>
      <TaskAdder />
      <FilterableTodoList tasks={TASKS} />
    </div>
  );
};

export default App;
