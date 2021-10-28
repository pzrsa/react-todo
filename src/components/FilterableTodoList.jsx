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

  const [showAllTasks, setShowAllTasks] = useState(true);
  const [showDueTasks, setShowDueTasks] = useState(false);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  let tasksToShow = tasks;

  const toggleTasksShown = (nextChecked) => {
    if (nextChecked === "all") {
      setShowAllTasks(true);
      setShowDueTasks(false);
      setShowCompletedTasks(false);
    } else if (nextChecked === "due") {
      setShowAllTasks(false);
      setShowDueTasks(true);
      setShowCompletedTasks(false);
    } else if (nextChecked === "completed") {
      setShowAllTasks(false);
      setShowDueTasks(false);
      setShowCompletedTasks(true);
    }
  };

  if (showAllTasks) {
    tasksToShow = tasks;
  } else if (showDueTasks) {
    tasksToShow = tasks.filter((task) => !task.completed);
  } else if (showCompletedTasks) {
    tasksToShow = tasks.filter((task) => task.completed);
  }

  return (
    <div>
      <FilterBar
        resetTasks={resetTasks}
        tasks={tasks}
        toggleTasksShown={toggleTasksShown}
        showAllTasks={showAllTasks}
        showDueTasks={showDueTasks}
        showCompletedTasks={showCompletedTasks}
      />
      <TaskAdder addTask={addTask} />
      <TodoList tasks={tasksToShow} handleCompleted={handleCompleted} />
    </div>
  );
};

export default FilterableTodoList;
