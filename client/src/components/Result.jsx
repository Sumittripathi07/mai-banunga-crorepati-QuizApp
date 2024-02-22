import "../styles/Results.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";

const Result = () => {
  const onRestart = () => {
    console.log("Restart");
  };
  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">Sumit</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points : </span>
            <span className="bold">100 </span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold">100</span>
          </div>
          <div className="flex">
            <span>Total Attempts : </span>
            <span className="bold">100</span>
          </div>
          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold">100</span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            <span className="bold">Passed</span>
          </div>
        </div>

        <div className="start">
          <Link className="btn" to={"/"} onClick={onRestart}>
            Restart
          </Link>
        </div>

        <div className="container">
          {/* result table */}
          <ResultTable />
        </div>
      </div>
    </>
  );
};

export default Result;
