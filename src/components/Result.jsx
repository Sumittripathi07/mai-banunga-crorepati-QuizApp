import "../styles/Results.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { useEffect, useState } from "react";

import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(earnedPoints);
  });

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnedPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnedPoints);

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };
  const currData = {
    name: userId,
    attempts: `${attempts}`,
    earnedPoints: `${earnedPoints}`,
    result: `${flag ? "Passed" : "Failed"}`,
  };

  const allData = [currData];

  return (
    <>
      <div className="container">
        <h1 className="title text-light">Mai Banunga Crorepati</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">{userId}</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points : </span>
            <span className="bold">{totalPoints || 0} </span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold"> {queue.length} </span>
          </div>
          <div className="flex">
            <span>Total Attempted : </span>
            <span className="bold"> {attempts || 0} </span>
          </div>
          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold"> {earnedPoints || 0} </span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            <span
              style={{ color: `${flag ? "green" : "red"}` }}
              className="bold"
            >
              {flag ? "Passed" : "Failed"}
            </span>
          </div>
        </div>

        <div className="start">
          <Link className="btn" to={"/"} onClick={onRestart}>
            Restart
          </Link>
        </div>

        <div className="container">{<ResultTable allData={allData} />}</div>
      </div>
    </>
  );
};

export default Result;
