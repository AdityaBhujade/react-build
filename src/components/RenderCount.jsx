import { useState, useRef, useEffect } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); // value persists but doesn’t cause re-render

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <p>Clicked {count} times</p>
      <p>Component Rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default RenderCounter;
