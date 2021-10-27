const FilterBar = ({ tasks, resetTasks }) => {
  return (
    <div>
      <h4>Tasks due: {tasks.filter((task) => !task.completed).length}</h4>
      <div style={{ marginBottom: "12px" }}>
        <button onClick={resetTasks}>Reset</button>
      </div>
    </div>
  );
};

export default FilterBar;
