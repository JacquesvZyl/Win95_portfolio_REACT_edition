import React, { useContext } from "react";
import styles from "./DesktopShortcuts.module.scss";
import shortcutData from "../../../data/shortcutData";
import DesktopShortcut from "./DesktopShortcut.component";
import MainContext from "../../../store/Context";

function DesktopShortcuts() {
  const ctx = useContext(MainContext);
  console.log(ctx);
  const shortcuts = shortcutData.map((shortcut) => (
    <DesktopShortcut
      onDoubleClick={ctx[shortcut.toggleHandler]}
      state={ctx[shortcut.toggleState]}
      title={shortcut.name}
      icon={shortcut.icon}
      key={shortcut.id}
    />
  ));

  return <div className={styles["desktop-shortcuts"]}>{shortcuts}</div>;
}

export default DesktopShortcuts;
