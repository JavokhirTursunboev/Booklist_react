import React from "react";
import { Button } from "../Button/Button";
import "./EventExample.scss";
export const EventExample = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.name.value);
//   };

  const handleButtonClick = () => {
    console.log("handle button");
  };

  const handleFormSubmittion = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section className="sec">
      <form className="form" onSubmit={handleFormSubmittion}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) =>
            setTimeout(() => {
              console.log(e.target.value);
            }, 1000)
          }
        />
        <div className="buttons">
          <Button
            type="submit"
            className="submit"
            onClick={handleFormSubmittion}
          >
            submit
          </Button>
          <Button onClick={handleButtonClick} type="button" className="click">
            click me
          </Button>
        </div>
      </form>
    </section>
  );
};
