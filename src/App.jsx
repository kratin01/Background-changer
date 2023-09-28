import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");
  return (
    <>
      <div
        className=" w-full h-screen  duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="flex justify-center text-2xl font-bold p-5  bg-white text-black items-center">
          PASTEL COLOR RAINBOW
        </h1>
        <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl shadow-lg px-3 py-2">
            <button
              onClick={() => setcolor("#CFB3E8")}
              className=" outline-none  bg-[#CFB3E8] rounded-full px-2 shadow-xl text-black"
            >
              Violet
            </button>
            <button
              onClick={() => setcolor("#C2C3F0")}
              className=" outline-none  bg-[#C2C3F0] rounded-full px-2 shadow-xl text-black"
            >
              Indigo
            </button>
            <button
              onClick={() => setcolor("#BDE1ED")}
              className=" outline-none  bg-[#BDE1ED] rounded-full px-2 shadow-xl text-black"
            >
              Blue
            </button>
            <button
              onClick={() => setcolor("#BBEBB2")}
              className=" outline-none  bg-[#BBEBB2] rounded-full px-2 shadow-xl text-black"
            >
              Green
            </button>
            <button
              onClick={() => setcolor("#FCF4D3")}
              className=" outline-none  bg-[#FCF4D3] rounded-full px-2 shadow-xl text-black"
            >
              Yellow
            </button>
            <button
              onClick={() => setcolor("#F2D2BA")}
              className=" outline-none  bg-[#F2D2BA] rounded-full px-2 shadow-xl text-black"
            >
              Orange
            </button>
            <button
              onClick={() => setcolor("#EBC5C5")}
              className=" outline-none  bg-[#EBC5C5] rounded-full px-2 shadow-xl text-black"
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
