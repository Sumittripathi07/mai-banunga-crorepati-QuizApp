// import React from 'react'

const ResultTable = ({ allData }) => {
  console.log(allData[0].result);
  return (
    <>
      {allData.map((item, i) => {
        return (
          <div key={i}>
            <table>
              <thead className="table-header">
                <tr className="table-row">
                  <td>Name</td>
                  <td>Attemps</td>
                  <td>Earn Points</td>
                  <td>Result</td>
                </tr>
              </thead>
              <tbody>
                <tr className="table-body">
                  <td>{item.name}</td>
                  <td>{item.attempts}</td>
                  <td>{item.earnedPoints}</td>
                  <td>{item.result}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default ResultTable;
