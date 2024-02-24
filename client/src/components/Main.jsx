// import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
// import { setUserId } from '../redux/result_reducer'
import { useRef } from "react";
import "../styles/Main.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";

const Main = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    } else {
      alert("Please enter the username!");
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Mai Banunga Crorepati</h1>

      <ol>
        <li>10 points is awarded for the correct answer.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"/quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link className="btn" to={"/about"} onClick={startQuiz}>
          Group Details
        </Link>
      </div>
    </div>
  );
};

export default Main;
