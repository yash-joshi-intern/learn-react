import { useState } from "react";
import reactLogo from "./assets/react.svg";
import javaLogo from "./assets/java-4-logo.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [flowers, setFlowers] = useState([]);

  const handleClick = (e) => {
    setCount((c) => c + 1);

    const rect = e.target.getBoundingClientRect();

    const newFlowers = Array.from({ length: 15 }).map((_, i) => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 150 + Math.random() * 50;
      return {
        id: Date.now() + i,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
      };
    });

    setFlowers(newFlowers);

    setTimeout(() => {
      setFlowers([]);
    }, 1500);
  };

  return (
    <>
      <div>
        <a href="https://java.dev" target="_blank">
          <img src={javaLogo} className="logo" alt="Java logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Java + React</h1>

      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>

      </div>

      {flowers.map((flower) => (
        <span
          key={flower.id}
          className="flower"
          style={{
            left: flower.x,
            top: flower.y,
            "--dx": `${flower.dx}px`,
            "--dy": `${flower.dy}px`,
          }}
        >
          🌸
        </span>
      ))}

      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  );
}

export default App;