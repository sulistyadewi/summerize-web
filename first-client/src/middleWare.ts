import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GetUser } from "./data/services/getUser";

export async function MIddleWare(request: NextRequest) {
  const user = await GetUser();
  const currentPath = request.nextUrl.pathname;
  if (currentPath.startsWith("/dashboard") && user.ok === false) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
