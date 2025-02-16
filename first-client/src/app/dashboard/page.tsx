// import Image from "next/image";
// import Card from "@/components/card";

import BtnLogout from "@/components/btnLogout";

export default async function Dashboard() {
  return (
    <div className="bg-yellow-400 h-screen flex flex-col basis-[80%]">
      <BtnLogout />
      <div className="bg-sky-700 flex basis-[10%]">
        <div className="flex self-center mx-auto gap-3">
          <input
            type="text"
            placeholder="url"
            className="bg-white w-80 h-9 p-1 rounded-lg text-left"
          />
          <button className="bg-amber-500 px-2 rounded-lg font-semibold">
            Summerize
          </button>
        </div>
        <div className="flex self-center mr-8">
          <h3 className="text-right text-lg">username</h3>
        </div>
      </div>
      <div className="bg-blue-400 basis-[90%] p-8 gap-5 grid grid-cols-3">
        <form action="" className="">
          <div className="flex mt-2 gap-3">
            <div className="">
              <input
                type="text"
                placeholder="testuser"
                className="px-5 py-3 rounded-md"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="testuser@email.com"
                className="px-5 py-3 rounded-md"
              />
            </div>
            <input
              type="text"
              value="You have credit(s)"
              disabled
              className="text-black rounded-md px-2 py-3"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <div>
              <input
                type="text"
                placeholder="firstName"
                className="px-9 py-3 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="lastName"
                className="px-9 py-3 rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <textarea
              name=""
              id=""
              rows={10}
              cols={65}
              placeholder="Write you bio here..."
              className="rounded-md p-1"
            ></textarea>
          </div>
          <button className="bg-black text-white py-2 px-3 text-sm rounded-md flex">
            Update Profile
          </button>
        </form>
        {/* <Card /> */}
        {/* <div className="bg-purple-400 max-w-sm w-72 h-56 p-3 rounded-lg">
            <h1 className="text-2xl">Title</h1>
            <p className="mt-4 text-ellipsis overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nihil, ex provident vel maxime illo?
            </p>
            <a
              href=""
              className="inline-flex items-center bg-cyan-800 px-3 py-2 rounded-lg text-center mt-5"
            >
              Read More{" "}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="bg-purple-400 max-w-sm w-72 h-56 p-3 rounded-lg">
            <h1 className="text-2xl">Title</h1>
            <p className="mt-4 text-ellipsis overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nihil, ex provident vel maxime illo?
            </p>
            <a
              href=""
              className="inline-flex items-center bg-cyan-800 px-3 py-2 rounded-lg text-center mt-5"
            >
              Read More{" "}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="bg-purple-400 max-w-sm w-72 h-56 p-3 rounded-lg">
            <h1 className="text-2xl">Title</h1>
            <p className="mt-4 text-ellipsis overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nihil, ex provident vel maxime illo?
            </p>
            <a
              href=""
              className="inline-flex items-center bg-cyan-800 px-3 py-2 rounded-lg text-center mt-5"
            >
              Read More{" "}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="bg-purple-400 max-w-sm w-72 h-56 p-3 rounded-lg">
            <h1 className="text-2xl">Title</h1>
            <p className="mt-4 text-ellipsis overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nihil, ex provident vel maxime illo?
            </p>
            <a
              href=""
              className="inline-flex items-center bg-cyan-800 px-3 py-2 rounded-lg text-center mt-5"
            >
              Read More{" "}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div> */}
      </div>
    </div>
  );
}
