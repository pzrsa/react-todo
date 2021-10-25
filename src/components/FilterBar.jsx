const FilterBar = ({ resetTasks }) => {
  return (
    <div style={{ marginBottom: "12px" }}>
      <button onClick={resetTasks}>Reset</button>
    </div>
  );
};

export default FilterBar;
