import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("Green");

  return (
    <>
      <div style={{ backgroundColor: color, width: 1500, height: 700 }}>
        <div className="buttonlist" style={{ marginLeft: "400px" }}>
          <button
            className="midbox"
            style={{
              backgroundColor: "blue",
              border: "1px solid white",
              width: "100px",
              height: "50px",
            }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>

          <button
            className="red"
            style={{
              backgroundColor: "red",
              border: "1px solid white",
              width: "100px",
              height: "50px",
            }}
            onClick={() => setColor("red")}
          >
            red
          </button>

          <button
            className="purple"
            style={{
              backgroundColor: "purple",
              border: "1px solid white",
              width: "100px",
              height: "50px",
            }}
            onClick={() => setColor("purple")}
          >
            purple
          </button>

          <button
            className="yellow"
            style={{
              backgroundColor: "yellow",
              border: "1px solid white",
              width: "100px",
              height: "50px",
            }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
