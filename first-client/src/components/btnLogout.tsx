import React from "react";
import { LogOut } from "@/data/auth/authAction";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function BtnLogout() {
  return (
    <div>
      <form action={LogOut}>
        <button type="submit">
          <FaArrowRightFromBracket className="text-red-500 w-6 h-6 hover:text-red-800" />
        </button>
      </form>
    </div>
  );
}

export default BtnLogout;
