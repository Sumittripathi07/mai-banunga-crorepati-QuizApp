import { useEffect } from "react";
import Questions from "./Questions";

import { useSelector } from "react-redux";

export default function Quiz() {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  });

  function onNext() {
    console.log("Nexttt");
  }

  function onPrev() {
    console.log("Prevv");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
