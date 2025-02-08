import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./data/services/getUser";

const protectedRoutes = ["/dashboard"];

function isProtectedRoute(path: string): boolean {
  return protectedRoutes.some((route) => path.startsWith(route));
}

export async function MiddleWare(request: NextRequest) {
  const user = await getUser();
  const currentPath = request.nextUrl.pathname;

  console.log("=======================================================");
  console.log(user, "ini user");
  console.log(currentPath, "ini currentPath");

  // if (isProtectedRoute(currentPath) && user.ok === false) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // return NextResponse.next();

  if (currentPath.startsWith("/dashboard") && user.ok === false) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
