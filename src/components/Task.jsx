import { useState } from "react";

function Task({
  id,
  title,
  completed = false,
  editing = false,
  onToggle,
  onDelete,
  onStartEdit,
  onCancelEdit,
  onUpdateTitle,
}) {
  const [draft, setDraft] = useState(title);

  const handleEditClick = () => {
    setDraft(title); // подставляем актуальное название в поле
    onStartEdit(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newTitle = draft.trim();
      if (newTitle) {
        onUpdateTitle(id, newTitle);
      } else {
        onCancelEdit(id); // пустое название не сохраняем
      }
    }
    if (e.key === "Escape") {
      onCancelEdit(id);
    }
  };

  return (
    <li
      className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />

        <label>
          <span className="description">{title}</span>
        </label>

        <button className="icon icon-edit" onClick={handleEditClick} />
        <button className="icon icon-destroy" onClick={() => onDelete(id)} />
      </div>

      {editing && (
        <input
          type="text"
          className="edit"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </li>
  );
}

export default Task;
