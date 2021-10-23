import TodoList from "./TodoList";

const FilterableTodoList = ({ tasks }) => {
  return (
    <div>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default FilterableTodoList;
