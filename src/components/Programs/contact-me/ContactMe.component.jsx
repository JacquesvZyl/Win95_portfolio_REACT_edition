import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ProgramBorder from "../../UI/program-border/ProgramBorder.componentss";
import styles from "./ContactMe.module.scss";
import letterImg from "../../../assets/images/win95_icons/Letter.ico";
import FormErrorHandle from "../../../custom-hooks/FormErrorHandle";
import shortcutData from "../../../data/shortcutData";
import MainContext from "../../../store/Context";

function ContactMe() {
  const [messageText, setMessagetText] = useState("");
  const [formSubmitResult, setFormSubmitResult] = useState("");
  const [formResultClass, setFormResultClass] = useState("");
  const ctx = useContext(MainContext);
  const {
    value: enteredSubject,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    isValid: enteredSubjectIsValid,
    reset: resetSubjectInput,
  } = FormErrorHandle((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = FormErrorHandle((value) => value.includes("@"));

  const form = useRef();

  function onMessageChange(e) {
    setMessagetText(e.target.value);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFormResultClass("");
      setFormSubmitResult("");
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [formResultClass, formSubmitResult]);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      if (!enteredSubjectIsValid || !enteredEmailIsValid) {
        throw new Error("Field cannot be empty");
      }
      const result = await emailjs.sendForm(
        "service_eull7lf",
        "template_gvcv8zr",
        form.current,
        "VS8pLKmW6xPTA9N1R"
      );

      if (result.status !== 200)
        throw new Error(
          `Error! response came back with code ${result.status}. Please try again`
        );

      setFormSubmitResult("E-mail submitted successfully");
      setFormResultClass("success");
      setMessagetText("");
      resetSubjectInput();
      resetEmailInput();
    } catch (error) {
      setFormSubmitResult(error.message);
      setFormResultClass("error");
    }
  };

  return (
    <ProgramBorder
      state={ctx.isContactMeOpen}
      onToggle={ctx.toggleContactMe}
      onMinimize={ctx.minimizeContactMe}
      minimizeState={ctx.isContactMeMinimized}
      icon={shortcutData[2].icon}
      name={shortcutData[2].name}
    >
      <form ref={form} onSubmit={sendEmail} className={styles["contact-me"]}>
        <div className={styles.button}>
          <button type="submit" value="Send">
            <img src={letterImg} alt="" />
            <span>Send</span>
          </button>

          <div id={styles.status} className={styles[formResultClass]}>
            {formSubmitResult}
          </div>
        </div>
        <div className={styles.inputs}>
          <h2>New Message</h2>
          <p>
            To: <span>Jacques</span>{" "}
          </p>
          <div
            className={`${styles["form-control"]} ${
              emailInputHasError && styles.invalid
            }`}
          >
            <label htmlFor="email">From:</label>
            <input
              type="email"
              autoComplete="off"
              id="email"
              name="user_email"
              onBlur={emailBlurHandler}
              onChange={emailChangedHandler}
              value={enteredEmail}
            />

            {emailInputHasError ? (
              <span className={styles["error-text"]}>
                Please enter a valid E-mail Address
              </span>
            ) : (
              ""
            )}
          </div>
          <div
            className={`${styles["form-control"]} ${
              subjectInputHasError && styles.invalid
            }`}
          >
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              value={enteredSubject}
              onChange={subjectChangedHandler}
              onBlur={subjectBlurHandler}
              autoComplete="off"
              id="subject"
              name="subject"
            />
            {subjectInputHasError ? (
              <span className={styles["error-text"]}>
                Field cannot be empty
              </span>
            ) : (
              ""
            )}
          </div>

          <textarea
            className={styles.message}
            name="message"
            id="message"
            style={{ resize: "none" }}
            value={messageText}
            onChange={onMessageChange}
          />
        </div>
      </form>
    </ProgramBorder>
  );
}

export default ContactMe;
