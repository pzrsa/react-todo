import TaskRow from "./TaskRow";

const TodoList = ({ tasks }) => {
  const rows = [];

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
