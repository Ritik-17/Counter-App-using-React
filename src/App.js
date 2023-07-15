import "./App.css";
import { useState } from "react";

function App() {

  const [count, UpdatedCount] = useState(0);

  function Increament(){
    UpdatedCount(count+1);
  }

  function Decreament(){
    UpdatedCount(count-1);
  }

  function Reset(){
    UpdatedCount(0)
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
      <div className=" text-[#0398d4] font-medium text-2xl " >Increament && Decreament</div>
      <div className="flex justify-center bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
        <button onClick={Decreament} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl " >-</button>
        <div className="font-bold text-5xl gap-12 ">{count}</div>
        <button onClick={Increament} className=" border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" >+</button>
      </div>
      <div>
        <button onClick={Reset}  className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg " >Reset</button>
      </div>
    </div>
    

  );
}

export default App;
