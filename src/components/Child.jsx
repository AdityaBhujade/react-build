import React from "react";

function Child({ name }) {
  console.log("🧒 Child Rendered");
  return (
    <div className="mt-4 bg-gray-100 p-3 rounded shadow">
      <p>Child Component — Name: {name}</p>
    </div>
  );
}

export default React.memo(Child);
