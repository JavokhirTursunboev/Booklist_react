import React from "react";
import "./button.scss";
export const Button = (props) => {
  return (
    <button className={props.className} type={props.type}>
      {props.children}
    </button>
  );
};
