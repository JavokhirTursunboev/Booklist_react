import React, { useState } from "react";
import classes from "./book.module.css";

export const Book = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const Showchild = () => {
    setButtonClicked(!buttonClicked);
  };
  return (
    <article className={classes.book}>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {buttonClicked && props.children}
      <button className="submit" onClick={Showchild}>
        click me
      </button>
    </article>
  );
};
