import React, { useRef, useState } from "react";

const ProblemSeven = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <div>
        <h3>Problem Seven</h3>
      <p>State Count: {count}</p>
      <p>Component Rendered: {renderCount.current} times</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default ProblemSeven