import React from "react";
import { LogOut } from "@/data/auth/authAction";

function BtnLogout() {
  return (
    <div>
      <form action={LogOut}>
        <button
          type="submit"
          className="px-3 py-2 text-white bg-black rounded-md"
        >
          Log Out
        </button>
      </form>
    </div>
  );
}

export default BtnLogout;
