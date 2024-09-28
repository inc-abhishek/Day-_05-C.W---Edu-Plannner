import React, { useEffect, useState } from "react";
import Planner from "./Planner";

function Geekster() {
  const [text, setText] = useState(" ");
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const showText = (e) => {
    setText(e.target.value);
  };
  const showText1 = (e) => {
    setNumber(e.target.value);
  };

  const showbtn = (e) => {
    if (text !== "" || number > 0) {
      setData([...data, { Name: text, Hour: number }]);
      setText("");
    }
  };
  const deleteBtn = (e) => {
    // console.log(e);
    const value = data.filter((num, i) => {
      return e != i;
    });
    setData(value);
  };
  
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="w-4/6 mx-auto mt-36 mb-6">
        <h1 className="text-center text-4xl font-semibold mb-5">Geekster Education Planner</h1>
        <h4 className="text-center text-2xl font-semibold mb-1 ">Add Your Schedule Now ! </h4>
        <div className="flex w-full  ">
          <div className="text-center w-full px-2 flex justify-center items-center">
            <input
              type="text"
              placeholder="Subject"
              className=" px-1 ml-2 py-1  rounded font-semibold text-2xl border-2"
              value={text}
              onChange={showText}
            />
            <input
              type="number"
              name=""
              id=""
              className=" w-14 ml-4 py-2 rounded font-semibold
              px-3 border-2"
              placeholder="Hours"
              value={number}
              onChange={showText1}
              min={0}
            />
            <button
              onClick={showbtn}
              className="bg-blue-700 text-white rounded px-8 ml-4 py-2 font-medium"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {data.map((e, i) => {
        return (
          <Planner
            key={i}
            name={e.Name}
            time={e.Hour}
            id={i}
            deleteBtn={deleteBtn}
          />
        );
      })}
    </>
  );
}

export default Geekster;
