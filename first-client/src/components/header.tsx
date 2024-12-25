import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
// import Logo  from "@/components/logo";

interface HeaderProps {
  data: {
    imageLogo: {
      id: number;
      url: string;
      text: string;
    };
    btnLogin: {
      id: number;
      url: string;
      text: string;
    };
  };
}
export async function Header({ data }: Readonly<HeaderProps>) {
  const { imageLogo, btnLogin } = data;

  return (
    <div className="z-50 flex justify-between mt-4">
      <Logo text={imageLogo.text} />
      <div>
        <Link href={btnLogin.url} className=" font-semibold text-lg mr-8">
          {btnLogin.text}
        </Link>
      </div>
    </div>
  );
}
