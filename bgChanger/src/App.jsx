import React, { useState } from "react";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border-2">
          <button
            onClick={()=>setcolor("red")}
            className="outline-none px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={()=>setcolor("Blue")}
            className="outline-none px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={()=>setcolor("Green")}
            className="outline-none px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={()=>setcolor("Black")}
            className="outline-none px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
          onClick={()=>setcolor("orange")}
            className="outline-none px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
          onClick={()=>setcolor("magenta")}
            className="outline-none px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "magenta" }}
          >
            magenta
          </button>
          <button
          onClick={()=>setcolor("brown")}
            className="outline-none px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
