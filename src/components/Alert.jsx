import React from 'react'
import { useState } from "react";

function Alert() {
    const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
        <div className="relative m-10">
      {/* Button to trigger popup */}
      <button
        onClick={() => {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 4000); 
        }}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        {showAlert ? "Account Deleted" : "Delete Account"}
      </button>


      {showAlert && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-14 w-[300px] 
                     bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded 
                     shadow-lg transition-all duration-300 ease-in-out animate-fadeIn z-10"
        >
          <strong className="font-bold">Deleted! </strong>
          <span className="block">This is an delete alert — check it out!</span>
        </div>
      )}
    </div>

    </div>
  )
}

export default Alert