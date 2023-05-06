import React from "react";
import classes from "./book.module.css";

export const Book = (props) => {
  return (
    <article className={classes.book}>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  );
};
