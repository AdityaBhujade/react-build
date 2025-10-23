import React, { useState } from "react";

function PaginationExample({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Pagination Example</h2>
      <ul>
        {currentItems.map((item, idx) => (
          <li key={idx} >{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Main Component with a better name
export default function PaginationDemo() {
  // Sample array of 50 items
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  return <PaginationExample data={items} itemsPerPage={10} />;
}
