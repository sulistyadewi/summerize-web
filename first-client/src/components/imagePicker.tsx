"use client";
import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { StrapiImageBg } from "./strapiImage";

interface ImageProps {
  id: string;
  name: string;
  label: string;
  showCard?: boolean;
  defaultValue?: string;
}

function generateImageUrl(file: File, callback: (imageUrl: string) => void) {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result as string);
  reader.readAsDataURL(file);
}

function ImagePreview({ dataUrl }: { readonly dataUrl: string }) {
  return (
    <StrapiImageBg
      src={dataUrl}
      alt="image preview"
      width={300}
      height={300}
      className="object-cover"
    />
  );
}

function ImageCard({
  dataUrl,
  fileInput,
}: {
  readonly dataUrl: string;
  readonly fileInput: React.RefObject<HTMLInputElement>;
}) {
  const imagePreview = dataUrl ? (
    <ImagePreview dataUrl={dataUrl} />
  ) : (
    <p>not image selected</p>
    // <Image
    //   src="/avatar.png"
    //   alt="image"
    //   width={300}
    //   height={300}
    //   className="max-w-[12rem]"
    // />
  );
  return (
    <div className="bg-gray-100 relative mt-10 mr-40">
      <div>{imagePreview}</div>
      <button
        onClick={() => fileInput.current?.click()}
        className="absolute w-full inset-0"
      ></button>
    </div>
  );
}

export default function ImagePicker({
  id,
  name,
  label,
  defaultValue,
}: Readonly<ImageProps>) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(defaultValue ?? null);
  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) generateImageUrl(file, setDataUrl);
  };
  return (
    <React.Fragment>
      <div className="hidden">
        <label htmlFor={name}>{label}</label>
        <input
          type="file"
          name={name}
          id={id}
          onChange={fileChange}
          ref={fileInput}
          accept="image/*"
        />
      </div>
      <ImageCard dataUrl={dataUrl ?? ""} fileInput={fileInput} />
    </React.Fragment>
  );
}
