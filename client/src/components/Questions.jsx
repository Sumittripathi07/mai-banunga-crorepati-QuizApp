import { useEffect } from "react";
import Data from "../database/Data";

const Questions = () => {
  //   const [checked, setChecked] = useState(undefined);

  let question = Data[0];
  useEffect(() => {
    console.log(question);
  }, [question]);

  const onSelect = () => {
    console.log("radio");
  };
  return (
    <>
      <div className="questions">
        <h2 className="text-light">{question.question}</h2>

        <ul key={question.id}>
          {question.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={onSelect()}
              />

              <label className="text-primary" htmlFor={`q${i}-option`}>
                {q}
              </label>
              <div className="check"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Questions;
