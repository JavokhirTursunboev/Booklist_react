import React from "react";
import { Data } from "../../Data";

import { Book } from "../Book/Book";

import "./booklist.scss";

const Booklist = () => {
  const bookItem = Data.map((event) => (
    <Book {...event} key={Math.random().toString()}>
      <p>
        Lorem, ipsum dolor sit amet consectetur voluptatum voluptate
        consequuntur quo fugiat reiciendis debitis vitae vero.
      </p>
    </Book>
  ));

  return (
    <>
      <section className="booklist">{bookItem}</section>
    </>
  );
};

export default Booklist;
