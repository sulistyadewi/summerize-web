import React from "react";
import Image from "next/image";
import ImagePicker from "@/components/imagePicker";
import { StrapiError } from "@/components/strapiError";
import { ZodErrors } from "@/components/ZodError";

interface ProfileImgProps {
  id: string;
  url: string;
  alternativeText: string;
}

interface InitialState {
  message: null;
  data: null;
  ZodErrors: null;
  StrapiError: null;
}

export default function ProfileImgForm({
  data,
}: {
  data: Readonly<ProfileImgProps>;
}) {
  return (
    <form action="">
      <div>
        <ImagePicker
          id="image"
          name="image"
          label="profileImage"
          defaultValue={data?.url || ""}
        />
        {/* <ZodErrors error={formState?.ZodErrors?.image}/> */}
        {/* <StrapiError error={formState?.strapiErrors}/> */}
      </div>
      <button
        type="submit"
        className="bg-black rounded-md text-white px-3 py-2 mt-2"
      >
        Upload Image
      </button>
    </form>
  );
}
