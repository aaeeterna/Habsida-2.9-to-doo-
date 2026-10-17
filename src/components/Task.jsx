function Task({ title, completed = false, editing = false }) {
  return (
    <li className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={completed}
        />

        <label>
          <span className="description">{title}</span>
        </label>

        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>

      {editing && (
        <input
          type="text"
          className="edit"
          defaultValue={title}
        />
      )}
    </li>
  );
}

export default Task;