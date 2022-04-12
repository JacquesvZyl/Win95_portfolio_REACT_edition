import { useState } from "react";

const FormErrorHandle = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState("");
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  function valueChangeHandler(e) {
    const { value } = e.target;
    setEnteredValue(value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default FormErrorHandle;
