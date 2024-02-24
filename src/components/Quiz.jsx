import { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { useSelector, useDispatch } from "react-redux";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(result);
  });

  function onNext() {
    // update the trace value by one
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());

      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  const onChecked = (check) => {
    // console.log(check);
    setChecked(check);
  };

  // Finished exam after last question

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true" />;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Mai Banunga Crorepati</h1>

      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
