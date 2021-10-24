import TodoList from "./TodoList";
import TaskAdder from "./TaskAdder";
import { useState } from "react";

const FilterableTodoList = () => {
  const initialTasks = [
    { id: 0, name: "Clean dishes", completed: false },
    { id: 1, name: "Buy milk", completed: false },
    { id: 2, name: "Research paper", completed: false },
  ];

  const [tasks, addTask] = useState(initialTasks);

  const handleCompleted = (taskId, nextCompleted) => {
    addTask(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: nextCompleted };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <TaskAdder />
      <TodoList tasks={tasks} onToggle={handleCompleted} />
    </div>
  );
};

export default FilterableTodoList;
