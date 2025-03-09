import React from "react";
import Image from "next/image";

export default function ProfileImgForm() {
  return (
    <div>
      <form action="">
        <div>
          <Image src="/loop.png" alt="" width={500} height={500} />
        </div>
        <button className="px-4 py-2 rounded-md bg-black text-white">
          Upload Image
        </button>
      </form>
    </div>
  );
}
