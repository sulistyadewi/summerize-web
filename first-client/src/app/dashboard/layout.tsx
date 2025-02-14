import React from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-blue-100  h-screen flex basis-[20%]">
        <div className="flex flex-col w-[17rem]">
          <Link
            href={"/dashboard"}
            className="text-xl p-2 hover:bg-blue-800 hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/summerize"}
            className="text-xl p-2 hover:bg-blue-800 hover:text-white"
          >
            Summerize
          </Link>
          <Link
            href={"/dashboard/account"}
            className="text-xl p-2 hover:bg-blue-800 hover:text-white"
          >
            Account
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
