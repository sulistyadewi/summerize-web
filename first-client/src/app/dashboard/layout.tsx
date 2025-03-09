import React from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex -z-50">
      <div className="bg-blue-100  h-screen flex basis-[15%]">
        <div className="flex flex-col w-[17rem]">
          <Link
            href={"/dashboard"}
            className="text-lg px-5 py-2 hover:bg-sky-600 hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/summerize"}
            className="text-lg px-5 py-2 hover:bg-sky-600 hover:text-white"
          >
            Summerize
          </Link>
          <Link
            href={"/dashboard/account"}
            className="text-lg px-5 py-2 hover:bg-sky-600 hover:text-white"
          >
            Account
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
