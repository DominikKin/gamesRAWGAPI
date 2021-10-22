import React from "react";
import styles from "./Button.module.css";

function Button({ data, specClass, clickAction, marker }) {
  return (
    <button
      id={data.id}
      className={marker ? styles[`${specClass}Selected`] : styles[specClass]}
      onClick={() => clickAction(data)}
    >
      {data.name}
    </button>
  );
}

export default Button;
