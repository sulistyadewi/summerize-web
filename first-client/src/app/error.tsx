"use client";
import { error } from "console";
import React from "react";
import { useEffect } from "react";

function Errorr({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="-z-50 mb-[4.5rem]">
      {/* <p>{error.message}</p> */}
      <div className="mx-auto -mt-28 border-2 w-[32rem] pb-7 rounded-3xl border-gray-300 bg-gray-100">
        <img
          src="/errColor.png"
          alt=""
          className="mx-auto w-[32rem] h-[20rem] "
        />
        <h1 className="text-5xl font-semibold text-center">Server Error!</h1>
      </div>
    </div>
  );
}

export default Errorr;
