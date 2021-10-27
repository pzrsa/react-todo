import { nanoid } from "nanoid";
import { useState } from "react";
import FilterBar from "./FilterBar";
import TaskAdder from "./TaskAdder";
import TodoList from "./TodoList";

const FilterableTodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (!taskName) return;

    const newTask = {
      id: nanoid(7),
      name: taskName,
      completed: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
  };

  const handleCompleted = (taskId, nextCompleted) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: nextCompleted };
        } else {
          return task;
        }
      })
    );
  };

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <FilterBar resetTasks={resetTasks} tasks={tasks} />
      <TaskAdder addTask={addTask} />
      <TodoList tasks={tasks} onToggle={handleCompleted} />
    </div>
  );
};

export default FilterableTodoList;
