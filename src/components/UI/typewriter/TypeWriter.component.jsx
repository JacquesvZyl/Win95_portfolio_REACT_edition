import React, { useEffect, useState } from "react";

function TypeWriter({ text, speed, waitTime, doneChecker }) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDoneWaiting, setIsDoneWaiting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setCurrentText("");
    setIsDoneWaiting(false);
  }, [text]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index === text.length) {
        doneChecker();
        return;
      }
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, [index, text]);

  useEffect(() => {
    if (index === text.length) {
      return;
    }

    const waitingTimeout = setTimeout(() => {
      setIsDoneWaiting(true);
    }, waitTime);

    if (isDoneWaiting) {
      const timeout = setTimeout(() => {
        setCurrentText((val) => val + text.charAt(index));
        setIndex((val) => val + 1);
      }, speed);

      console.log("RENDERING WHOLE FUCKING THING");
      return () => {
        clearTimeout(timeout);
        clearTimeout(waitingTimeout);
      };
    }
  }, [currentText, text, speed, waitTime, isDoneWaiting, index]);

  return <span>{currentText}</span>;
}

export default TypeWriter;
