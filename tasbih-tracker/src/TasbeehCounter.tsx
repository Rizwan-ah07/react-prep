import { useState, useContext, useEffect } from "react";
import { TasbeehContext } from "./TasbeehContext";

interface TasbeehCounterProps {
  name: string;
}

const TasbeehCounter = ({ name }: TasbeehCounterProps) => {
  const [count, setCount] = useState<number>(0);
  const { addToTotal, total } = useContext(TasbeehContext);

  const increment = () => {
    setCount((prev) => prev + 1);
    addToTotal(1);
  };

  const reset = () => {
    addToTotal(-count);
    setCount(0);
  };

  // 👇 Reset automatically when total = 0 (after global reset)
  useEffect(() => {
    if (total === 0) {
      setCount(0);
    }
  }, [total]);

  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: "1rem",
        margin: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h3>{name}</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TasbeehCounter;
