// import Image from "next/image";
// import Card from "@/components/card";
import Summerizee from "@/components/summerizee";

export default async function Dashboard() {
  return (
    <div className="w-full h-screen bg-amber-400 block">
      <div className="h-screen w-full basis-[85%]">
        <Summerizee />
        {/* <div className="bg-sky-700 flex">
          <div className="flex self-center w-full basis-[85%] mx-auto gap-3 pr-5">
            <input
              type="text"
              placeholder="url"
              className="bg-white w-80 h-9 p-1 rounded-lg text-left"
            />
            <button className="bg-amber-500 px-2 rounded-lg font-semibold">
              Summerize
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
