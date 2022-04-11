import React, { useContext } from "react";
import shortcutData from "../../../data/shortcutData";
import MainContext from "../../../store/Context";
import TaskBarShortcut from "./TaskBarShortcut.component";
function TaskBarShortcuts() {
  const ctx = useContext(MainContext);
  const data = shortcutData.map(
    (shortcut) =>
      ctx[shortcut.toggleState] && (
        <TaskBarShortcut
          name={shortcut.name}
          icon={shortcut.icon}
          key={shortcut.id}
          onToggle={ctx[shortcut.toggleHandler]}
          onMinimize={ctx[shortcut.toggleMinHandler]}
          isMinimized={ctx[shortcut.minimizeState]}
        />
      )
  );

  return <>{data}</>;
}

export default TaskBarShortcuts;
