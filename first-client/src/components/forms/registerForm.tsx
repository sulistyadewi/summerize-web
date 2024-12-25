import React from "react";
import { RegisterAction } from "@/data/auth/authAction";
import { useActionState } from "react";

function RegisterForm() {
  const initialState = {
    data: "before action",
  };

  console.log(RegisterAction, "ini registerAction");

  const [formState, formAction] = useActionState(RegisterAction, initialState);
  // console.log(formState, "ini formState");

  return (
    <div>
      <div className="max-w-sm ring-4 ring-teal-500 px-6 py-6 mx-auto mt-10 rounded-lg">
        <form action={formAction}>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              className="rounded py-2 mt-2 p-2 bg-gray-300"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              className="rounded py-2 mt-2 p-2 bg-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-300 px-3 py-2 mt-5 rounded-md"
          >
            Register
          </button>
          <h6 className="mt-5">
            Have an account{" "}
            <a href="/login">
              <span className="text-blue-900 hover:underline">Login</span>
            </a>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
