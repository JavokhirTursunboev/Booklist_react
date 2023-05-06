import React from "react";
import { Data } from "../../Data";

import { Book } from "../Book/Book";
import classes from "./booklist.module.css";

const Booklist = () => {
  const bookItem = Data.map((event) => (
    <Book
      author={event.author}
      img={event.img}
      key={Math.random().toString()}
      title={event.title}
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur voluptatum voluptate
        consequuntur quo fugiat reiciendis debitis vitae vero.
      </p>
      <button>click me</button>
    </Book>
  ));

  return (
    <>
      <section className={classes.booklist}>{bookItem}</section>
    </>
  );
};

export default Booklist;
