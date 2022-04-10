import React from "react";
import styles from "./DesktopShortcuts.module.scss";
import shortcutData from "../../../data/shortcutData";
import DesktopShortcut from "./DesktopShortcut.component";

function DesktopShortcuts() {
  const shortcuts = shortcutData.map((shortcut) => (
    <DesktopShortcut
      title={shortcut.name}
      icon={shortcut.icon}
      key={shortcut.id}
    />
  ));

  return <div className={styles["desktop-shortcuts"]}>{shortcuts}</div>;
}

export default DesktopShortcuts;
