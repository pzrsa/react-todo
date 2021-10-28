const FilterBar = ({
  tasks,
  resetTasks,
  toggleTasksShown,
  showAllTasks,
  showDueTasks,
  showCompletedTasks,
}) => {
  return (
    <div>
      <h4>Tasks due: {tasks.filter((task) => !task.completed).length}</h4>
      <div style={{ marginBottom: "12px" }}>
        <button onClick={resetTasks}>Reset</button>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <input
          name="all"
          type="checkbox"
          checked={showAllTasks}
          onChange={(e) => toggleTasksShown(e.target.name)}
        />{" "}
        All
        <input
          name="due"
          type="checkbox"
          checked={showDueTasks}
          onChange={(e) => toggleTasksShown(e.target.name)}
        />{" "}
        Due
        <input
          name="completed"
          type="checkbox"
          checked={showCompletedTasks}
          onChange={(e) => toggleTasksShown(e.target.name)}
        />{" "}
        Completed
      </div>
    </div>
  );
};

export default FilterBar;
