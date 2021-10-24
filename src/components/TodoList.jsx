import TaskRow from "./TaskRow";

const TodoList = () => {
  const rows = [];

  const tasks = [
    { name: "Clean dishes", completed: false },
    { name: "Buy milk", completed: false },
    { name: "Research paper", completed: false },
  ];

  tasks.forEach((task) => {
    rows.push(<TaskRow task={task} key={task.name} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TodoList;
