import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Custom Hook
import { useFetchQuestion } from "../hooks/FetchQuestion";
// import { updateResultAction } from "../redux/result_reducer";
import { updateResult } from "../hooks/setResult";

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);

  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  const dispatch = useDispatch();

  const {
    result: { userId },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  };

  return (
    <>
      <h1 className="welcome">
        Aapka swagat hai <span style={{ color: "#0dff92" }}>{userId}</span>!
      </h1>
      <div className="questions">
        <h2 className="text-light">
          {questions?.id}. {questions?.question}
        </h2>
        <ul key={questions?.id}>
          {questions?.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
              />

              <label className="text-primary" htmlFor={`q${i}-option`}>
                {q}
              </label>
              <div
                className={`check ${result[trace] == i ? "checked" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Questions;
