const TaskRow = ({ task }) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>
        <input type="checkbox" checked={task.completed} />
      </td>
    </tr>
  );
};

export default TaskRow;
