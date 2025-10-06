import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  console.log("👨‍👦 Parent Rendered");

  return (
    <div className="p-5 text-center">
      <h2 className="text-xl font-bold mb-3">Parent Component</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increase Count
      </button>
      <Child name="Aditya" />
    </div>
  );
}
