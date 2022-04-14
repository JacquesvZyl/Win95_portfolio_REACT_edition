import React, { useContext } from "react";
import styles from "./DesktopShortcuts.module.scss";
import shortcutData from "../../../data/shortcutData";
import DesktopShortcut from "./DesktopShortcut.component";
import MainContext from "../../../store/Context";
import virusIcon from "../../../assets/images/win95_icons/Program.ico";

function DesktopShortcuts() {
  const ctx = useContext(MainContext);

  const shortcuts = shortcutData.map((shortcut) => (
    <DesktopShortcut
      stateHandler={ctx[shortcut.toggleHandler]}
      minimizeHandler={ctx[shortcut.toggleMinHandler]}
      state={ctx[shortcut.toggleState]}
      minimizeState={ctx[shortcut.minimizeState]}
      title={shortcut.name}
      icon={shortcut.icon}
      key={shortcut.id}
    />
  ));

  return (
    <div className={styles["desktop-shortcuts"]}>
      {shortcuts}
      <DesktopShortcut
        title="NOT_A_VIRUS.EXE"
        icon={virusIcon}
        stateHandler={ctx.toggleVirus}
      />
    </div>
  );
}

export default DesktopShortcuts;
