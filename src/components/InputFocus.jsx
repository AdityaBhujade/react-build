import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null); // create a reference

  useEffect(() => {
    inputRef.current.focus(); // focus the input when page loads
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus Again</button>
    </div>
  );
}

export default InputFocus;
