import React, { useState } from "react";

function Planner({ name, time, id, deleteBtn }) {
  let [count, setCount] = useState(time);
  const add = () => {
    if (count < 60) setCount(++count);
  };
  const sub = () => {
    if (count > 0) setCount(--count);
  };
  return (
    <>
      <div className="w-4/6 mx-auto  px-10 py-6 rounded-md">
        <div className=" w-full flex gap-2 justify-center items-center ">
          <p className="text-2xl font-semibold">{name} - </p>
          <p className=" text-2xl font-semibold ">Hours : {count}</p>
          <div className="flex gap-5">
            <button onClick={add} className=" border-2  border-black py-1 px-4 rounded font-bold">
              {" "}
              +
            </button>
            <button onClick={sub} className="border-2 border-black py-1 px-4 rounded font-bold text-xl">
              -
            </button>
            <button
              onClick={() => {
                deleteBtn(id);
              }}
              className="bg-blue-500 py-1 px-4 rounded font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planner;
