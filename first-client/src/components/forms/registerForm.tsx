"use client";

import React from "react";
import { RegisterAction } from "@/data/auth/authAction";
import { useFormState } from "react-dom";
import { ZodErrors } from "../ZodError";
import { StrapiError } from "@/components/strapiError";

const initialState = {
  data: null,
  ZodErrors: null,
  message: null,
};

function RegisterForm() {
  // console.log(RegisterAction, "ini registerAction");

  const [formState, formAction] = useFormState(RegisterAction, initialState);
  console.log(formState, "ini formState");

  return (
    <div>
      <div className="max-w-sm ring-4 ring-teal-500 px-6 py-6 mx-auto mt-10 rounded-lg">
        <form action={formAction} method="POST">
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              className="rounded py-2 mt-2 p-2 bg-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              className="rounded py-2 mt-2 p-2 bg-gray-300"
            />
            {/* <ZodErrors error={formState?.zodErrors?.username} /> */}
            {/* <ZodErrors error={formState?.zodErrors?.username} /> */}
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              className="rounded py-2 mt-2 p-2 bg-gray-300"
            />
            {/* <ZodError error={formState?.zodErrors?.password} />/\ */}
          </div>
          <button
            type="submit"
            className="bg-blue-300 px-3 py-2 mt-5 rounded-md"
          >
            Register
          </button>
          <StrapiError />
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
