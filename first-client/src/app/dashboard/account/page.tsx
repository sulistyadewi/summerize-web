import React from "react";
import { getUser } from "@/data/services/getUser";
import ProfileForm from "@/components/forms/profileForm";
import ProfileImgForm from "@/components/forms/profileImgForm";

export default async function Account() {
  const userLogin = await getUser();
  console.log(userLogin, "ini dari account");
  const userData = userLogin.data;
  const userLoginImg = userData?.image;
  return (
    <div className="flex bg-blue-400 h-screen">
      <ProfileForm data={userData} />
      <ProfileImgForm data={userLoginImg} />
    </div>
  );
}
