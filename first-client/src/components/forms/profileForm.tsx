"use client";
import React from "react";
import { useFormState } from "react-dom";
import { ProfileAction } from "@/data/auth/profileAction";
import { StrapiError } from "@/components/strapiError";

const initialState = {
  data: null,
  message: null,
  strapiErrors: null,
};

interface ProfileFormProps {
  id: string;
  username: string;
  email: string;
  credit: number;
  firstName: string;
  lastName: string;
  bio: string;
}

// function CountCredit({ text }: { readonly text: number }) {
//   <div>
//     You have <span>{text}</span> credit(s)
//   </div>;
// }

export default function ProfileForm({
  data,
}: {
  readonly data: ProfileFormProps;
  readonly className?: string;
}) {
  const [formState, formAction] = useFormState(ProfileAction, initialState);
  console.log(formState, "ini dari profile");

  return (
    <div>
      <div className="bg-blue-400 basis-[85%] p-8 gap-5 grid grid-cols-3">
        <form action={formAction} className="">
          <div className="flex mt-2 gap-3">
            <div className="">
              <input
                type="text"
                defaultValue={data.username}
                placeholder="username"
                className="px-5 py-3 rounded-md"
              />
            </div>
            <input type="hidden" name="id" value={data?.id} />
            <div className="">
              <input
                type="email"
                defaultValue={data.email}
                placeholder="testuser@email.com"
                className="px-5 py-3 rounded-md"
              />
            </div>
            {/* <CountCredit text={data?.credit} /> */}
            {/* <input
              type="text"
              defaultValue={data.credit}
              value="You have credit(s)"
              disabled
              className="text-black rounded-md px-2 py-3"
            /> */}
          </div>
          <div className="flex gap-3 mt-4">
            <div>
              <input
                type="text"
                defaultValue={data.firstName}
                placeholder="firstName"
                className="px-9 py-3 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={data.lastName}
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
              defaultValue={data.bio}
              placeholder="Write you bio here..."
              className="rounded-md p-1"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-3 text-sm rounded-md flex"
          >
            Update Profile
          </button>
          <StrapiError error={formState?.strapiErrors} />
        </form>
      </div>
    </div>
  );
}
