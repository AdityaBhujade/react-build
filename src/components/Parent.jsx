import React, { useState, useEffect } from "react";
import Child from "./Child";

export default function Parent() {
  const [inputValue, setInputValue] = useState("John Doe");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count); // what will this log?
  };


  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);


  useEffect(() => {
    const handler = setTimeout(() => {
      setName(inputValue);
    }, 1000); // 300ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  console.log("👨‍👦 Parent Rendered");

  return (
    <div className="p-5 text-center">
      <h2 className="text-xl font-bold mb-3">Parent Component</h2>
      <p>Count: {count}</p>
      <button
        onClick={() =>
          handleClick()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increase Count
      </button>
      <br />
      <input className="text-gray-700 border mt-5 p-2 rounded outline-0" type="text" placeholder="Enter your name" value={inputValue} onChange={e => setInputValue(e.target.value)} />

      <Child name={name} />
    </div>
  );
}
