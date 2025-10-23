import { useState, useMemo } from "react";

function ExpensiveCalc() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += i;
    return sum + count;
  }, [count]); // only recalc when 'count' changes

  return (
    <div>
      <h2>Expensive Value: {expensiveValue}</h2>
      <p>Other Value: {other}</p>
      <button onClick={() => {setCount(count + 1)
        console.log("Count increased")
      }
      }>Increase Count</button>
      <button onClick={() => {setOther(other + 1)
        console.log("Other changed")
      }
      }>Change Other</button>
    </div>
  );
}

export default ExpensiveCalc;
