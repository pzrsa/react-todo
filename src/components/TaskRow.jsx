const TaskRow = ({ taskName, taskStatus }) => {
  return (
    <tbody>
      <tr>
        <td>{taskName}</td>
        <td>{taskStatus}</td>
      </tr>
    </tbody>
  );
};

export default TaskRow;
