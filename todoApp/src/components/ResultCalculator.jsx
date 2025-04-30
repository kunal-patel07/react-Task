import React from "react";
import { useState } from "react";

let ResultCalculator = () => {
  let [name, SetName] = useState("");
  let [math, SetMath] = useState("");
  let [science, SetScience] = useState("");
  let [chemistry, SetChemistry] = useState("");
  let [result, SetResult] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();

    let mathNum = parseInt(math);
    let scienceNum = parseInt(science);
    let chemistryNum = parseInt(chemistry);

    if (
      isNaN(mathNum) ||
      mathNum < 0 ||
      mathNum > 100 ||
      isNaN(scienceNum) ||
      scienceNum < 0 ||
      scienceNum > 100 ||
      isNaN(chemistryNum) ||
      chemistryNum < 0 ||
      chemistryNum > 100
    ) {
      alert("Please Enter Valid Number between 1 to 100");
      return;
    }

    let total = mathNum + scienceNum + chemistryNum;
    let percentage = total / 3;
    let grade = "";

    if (percentage < 45) grade = "C";
    else if (percentage < 65) grade = "B";
    else if (percentage < 85) grade = "A";
    else grade = "A+";

    let newResult = {
      name,
      math: mathNum,
      science: scienceNum,
      chemistry: chemistryNum ,
      total,
      grade,
    };

    SetResult([...result , newResult]);
    SetMath("")
    SetScience("")
    SetChemistry("")
    SetName("")
  };
  return (

    <div className="">
      <div className="h-auto w-full max-w-2xl mt-12 border-2 mx-auto rounded-md p-4">
        <h1 className="p-3 text-center text-xl">Result Calculator</h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col"
        >
          Name
          <input
            className="rounded-md border-2  p-1"
            type="text"
            value={name}
            onChange={(e) => {
              SetName(e.target.value);
            }}
          />
          Math
          <input
            className="rounded-md border-2 p-1 "
            type="number"
            value={math}
            onChange={(e) => {
              SetMath(e.target.value);
            }}
          />
          Science
          <input
            className="rounded-md border-2  p-1"
            type="number"
            value={science}
            onChange={(e) => {
              SetScience(e.target.value);
            }}
          />
          Chemistry
          <input
            className="rounded-md border-2 p-1 "
            type="number"
            value={chemistry}
            onChange={(e) => {
              SetChemistry(e.target.value);
            }}
          />
          <button
            className="bg-rose-500 text-white p-2 m-3 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
        </div>
        {result.length > 0 && (
          <table className="mt-10 mx-auto  min-w-xl text-center bg-white rounded-lg shadow">
            <thead className="bg-cyan-400 text-white   ">
              <tr>

              <th>Name</th>
              <th>Math</th>
              <th>Science</th>
              <th>Chemistry</th>
              <th>Total</th>
              <th>Grade</th>

                </tr>
            </thead>
          
            <tbody>
            {result.map((item, index) => (
              <tr className="border-t">
          <td>{item.name}</td>
          <td>{item.math}</td>
          <td>{item.science}</td>
          <td>{item.chemistry}</td>
          <td>{item.total}</td>
          <td>{item.grade}</td>
          </tr>
      ))}
      </tbody>
          </table>
        )}



     
      
    </div>
  );
};

export default ResultCalculator;
