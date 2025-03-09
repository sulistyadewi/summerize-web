import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { getUser } from "@/data/services/getUser";
import BtnLogout from "@/components/btnLogout";
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

interface UserProps {
  username: string;
  email: string;
}

function LoginUser({ userData }: { readonly userData: UserProps }) {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/dashboard/account">{userData.username}</Link>
      <BtnLogout />
    </div>
  );
}

export async function Header({ data }: Readonly<HeaderProps>) {
  const user = await getUser();
  console.log(user, "ini user");
  const dashboardCN = `z-50 flex justify-between px-5 items-center bg-blue-100`;
  const homePageCN = `z-50 flex justify-between pt-4 px-4`;
  const userLogin = user?.ok;
  const headerHomePage = userLogin ? dashboardCN : homePageCN;
  const { imageLogo, btnLogin } = data;

  return (
    <div className="">
      {/* dashboard */}
      {user.ok ? (
        <div className={dashboardCN}>
          <div className="">
            <Logo text={imageLogo.text} />
          </div>
          <div className="flex items-center">
            {user.ok ? (
              <LoginUser userData={user.data} />
            ) : (
              <Link href={btnLogin.url} className=" font-semibold text-lg">
                {btnLogin.text}
              </Link>
            )}
          </div>
        </div>
      ) : (
        // home page
        <div className={homePageCN}>
          <Logo text={imageLogo.text} />
          <div>
            {user.ok ? (
              <LoginUser userData={user.data} />
            ) : (
              <Link href={btnLogin.url} className=" font-semibold text-lg mr-8">
                {btnLogin.text}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
