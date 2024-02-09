import "../styles/Results.css";

const Result = () => {
  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">user</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points : </span>
            <span className="bold">totalPoints </span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold">length</span>
          </div>
          <div className="flex">
            <span>Total Attempts : </span>
            <span className="bold">attempts</span>
          </div>
          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold">earnPoints</span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            {/* <span
              style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
              className="bold"
            >
              {flag ? "Passed" : "Failed"}
            </span> */}
          </div>
        </div>

        <div className="start">
          {/* <Link className="btn" to={"/"} onClick={onRestart}> */}
          Restart
          {/* </Link> */}
        </div>

        <div className="container">
          {/* result table */}
          {/* <ResultTable></ResultTable> */}
        </div>
      </div>
    </>
  );
};

export default Result;
