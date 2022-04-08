import Taskbar from "./components/UI/taskbar/Taskbar.component";
import styles from "./App.module.scss";
import Clippy from "./components/Clippy/Clippy.component";
import { useEffect, useState } from "react";
import StartMenu from "./components/UI/start-menu/StartMenu.component";

function App() {
  const [showClippy, setShowClippy] = useState(false);

  useEffect(() => {
    console.log("from useeffect in App");
    setShowClippy(true);

    const timeOut = setTimeout(() => {
      setShowClippy(false);
    }, 10000);

    return () => clearTimeout(timeOut);
  }, []);

  console.log("I AM BEING RE_RENDERED");
  return (
    <div className={styles.app}>
      <h1>Hello</h1>
      {showClippy && <Clippy />}

      <Taskbar className={styles.taskbar} />
    </div>
  );
}

export default App;
