import { useState,useEffect } from "react";


const ProblemFive = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
        <h3>
            Problem Five
        </h3>
      <p>
        Window width: <strong>{width}px</strong>
      </p>
      <small>
        Resize the window to see it update. Unmount to remove the listener.
      </small>
    </div>
  );
}

export default ProblemFive