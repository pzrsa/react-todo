const TaskRow = ({ taskName, taskStatus }) => {
  return (
    <tr>
      <td>{taskName}</td>
      <td>{taskStatus}</td>
    </tr>
  );
};

export default TaskRow;
