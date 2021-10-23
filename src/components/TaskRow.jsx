const TaskRow = ({ task }) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
};

export default TaskRow;
