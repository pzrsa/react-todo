import TodoList from "./TodoList";
import TaskAdder from "./TaskAdder";
import { useState } from "react";

const FilterableTodoList = () => {
  const initialTasks = [
    { id: 0, name: "Clean dishes", completed: false },
    { id: 1, name: "Buy milk", completed: false },
    { id: 2, name: "Research paper", completed: false },
  ];

  const [tasks, updateTasks] = useState(initialTasks);

  const addTask = (taskName) => {
    updateTasks((tasks) => [
      ...tasks,
      { id: tasks.at(-1).id + 1, name: taskName, completed: false },
    ]);
    console.log(tasks);
  };

  const handleCompleted = (taskId, nextCompleted) => {
    updateTasks(
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
      <TaskAdder addTask={addTask} />
      <TodoList tasks={tasks} onToggle={handleCompleted} />
    </div>
  );
};

export default FilterableTodoList;
