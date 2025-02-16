"use client";
import React from "react";
import { LoginAction } from "@/data/auth/authAction";
import { useFormState } from "react-dom";
import { StrapiError } from "@/components/strapiError";
// import { ZodError } from "zod";

const initialState = {
  data: null,
  ZodError: null,
  message: null,
  StrapiError: null,
};

function LoginForm() {
  const [formState, formAction] = useFormState(LoginAction, initialState);
  return (
    <div className="z-50">
      <div className="max-w-sm ring-4 ring-amber-400 px-6 py-6 mx-auto rounded-lg">
        <form action={formAction}>
          <div className="flex flex-col">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="identifier"
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
            Login
          </button>
          <StrapiError error={formState?.strapiError} />
          <h6 className="mt-5">
            Don't have an account{" "}
            <a href="/register">
              <span className="text-blue-900 hover:underline">register</span>
            </a>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
