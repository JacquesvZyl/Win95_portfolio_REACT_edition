import React, { useContext } from "react";
import shortcutData from "../../../data/shortcutData";
import MainContext from "../../../store/Context";
import Win95Border from "../win95-border/Win95Border.component";
import styles from "./StartMenu.module.scss";
import StartMenuShortcut from "./StartMenuShortcut.component";
import virusIcon from "../../../assets/images/win95_icons/Program.ico";
import gitHubIcon from "../../../assets/images/other_images/GitHub-Mark-32px.png";

function StartMenu(props) {
  const ctx = useContext(MainContext);
  const shortcuts = shortcutData.map((shortcut) => (
    <StartMenuShortcut
      text={shortcut.name}
      icon={shortcut.icon}
      key={shortcut.id}
      state={ctx[shortcut.toggleState]}
      onToggle={ctx[shortcut.toggleHandler]}
      onMinimizeToggle={ctx[shortcut.toggleMinHandler]}
      minimizeState={ctx[shortcut.minimizeState]}
    />
  ));
  return (
    <Win95Border className={styles.menu} onClick={props.onClick}>
      <div className={styles["left-text"]}>
        Windows<span>95</span>
      </div>
      <div className={styles["shortcut-container"]}>
        <div className={styles["menu-top"]}>
          {shortcuts}
          <StartMenuShortcut
            text="NOT_A_VIRUS.exe"
            icon={virusIcon}
            onToggle={ctx.toggleVirus}
          />
        </div>
        <div className={styles["menu-bottom"]}>
          <a
            href="https://github.com/JacquesvZyl"
            target="_blank"
            rel="noreferrer"
          >
            <StartMenuShortcut text="My Github" icon={gitHubIcon} />
          </a>
        </div>
      </div>
    </Win95Border>
  );
}

export default StartMenu;

/* 

        <div class="start__menu win95__border hidden">
            <div class="left__text">Windows<span>95</span> </div>
            <div class="menu">
                <div class="menu__top">
                    <div class=" menu__item menu__programs">
                        <img src="/src/images/win95_icons/Program Folder (16x16px & 32x32px).ico" alt="">
                        <span>Programs</span>
                    </div>
                    <div class=" menu__item menu__documents">
                        <img src="/src/images/win95_icons/Web-documents folder 2.ico" alt="">
                        <span>Documents</span>
                    </div>
                    <div class=" shortcut shortcut__skills">
                        <img class="shortcut__icon" src="/src/images/win95_icons/MS-DOS logo.ico" alt="">
                        <div class="shortcut__title">skills.cmd</div>
                    </div>
                    <div class="shortcut shortcut__help">
                        <img class="shortcut__icon" src="/src/images/win95_icons/Help book.ico" alt="">
                        <div class="shortcut__title">Who am I?</div>
                    </div>
                    <div class="shortcut draggable shortcut__contact">
                        <img class="shortcut__icon" src="/src/images/win95_icons/Mail.ico" alt="">
                        <div class="shortcut__title">Contact me</div>
                    </div>

                </div>

                <div class="menu__bottom">
                    <div class=" menu__item menu__suspend">
                        <img src="/src/images/win95_icons/Night on computer.ico" alt="">
                        <span>Suspend</span>
                    </div>
                    <div class=" menu__item menu__shutdown">
                        <img src="/src/images/win95_icons/Turn Off Computer (display only).ico" alt="">
                        <span>Shut Down...</span>
                    </div>

                </div>

            </div>
        </div>


*/
