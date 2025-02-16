import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./data/services/getUser";

const protectedRoutes = ["/dashboard"];

function isProtectedRoute(path: string): boolean {
  return protectedRoutes.some((route) => path.startsWith(route));
}

export async function middleware(request: NextRequest) {
  const user = await getUser();
  const currentPath = request.nextUrl.pathname;
  if (isProtectedRoute(currentPath) && user.ok === false) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  console.log("=======================================================");
  console.log(user, "ini user");
  console.log(currentPath, "ini currentPath");

  // if (isProtectedRoute(currentPath) && user.ok === false) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // return NextResponse.next();

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
