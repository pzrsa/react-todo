import TodoList from "./TodoList";
import TaskAdder from "./TaskAdder";
import FilterBar from "./FilterBar";
import { useState } from "react";

const FilterableTodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (!taskName) return;

    if (!tasks.length) {
      const newTask = {
        id: 0,
        name: taskName,
        completed: false,
      };

      setTasks((tasks) => [...tasks, newTask]);
    } else {
      const newTask = {
        id: tasks[tasks.length - 1].id + 1,
        name: taskName,
        completed: false,
      };

      setTasks((tasks) => [...tasks, newTask]);
    }
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
      <FilterBar resetTasks={resetTasks} />
      <TaskAdder addTask={addTask} />
      <TodoList tasks={tasks} onToggle={handleCompleted} />
    </div>
  );
};

export default FilterableTodoList;
