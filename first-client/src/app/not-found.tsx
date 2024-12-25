import React from "react";

function notFound() {
  return (
    <div className="mb-[7.2rem] flex">
      <div className="max-w-xs ml-32">
        <img src="/loops.png" alt="" className="w-64 h-64" />
      </div>
      <div className="border-r-2 border-gray-300"></div>
      <div className="m-10 flex flex-col self-center">
        <h1 className="text-8xl font-bold text-slate-700 tracking-wider">
          404
        </h1>
        <h3 className="text-5xl font-bold text-slate-700 mt-3">
          Page Not Found
        </h3>
      </div>
    </div>
  );
}

export default notFound;
