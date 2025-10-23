import React from "react";
import { useState } from "react";
function Button() {
  const [followed, setFollowed] = useState(false);
  return (
    <div className="m-5">
      <button
        className="border border-blue-500 text-blue-500
    bg-white
    hover:bg-blue-500 hover:text-white
    py-2 px-4 rounded
    transition-all duration-300 all ease-in-out
    hover:scale-105"
        onClick={() => {
          setFollowed(true);
          setTimeout(() => setFollowed(false), 2000);
        }}
      >
        {followed ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default Button;
