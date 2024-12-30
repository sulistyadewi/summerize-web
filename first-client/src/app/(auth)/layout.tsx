import React from "react";

function AuthLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center">
      {/* <h1>Authentication header</h1> */}
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
