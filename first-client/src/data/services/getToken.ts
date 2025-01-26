import { cookies } from "next/headers";

export async function GetToken() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("jwt")?.value;
  return token;
}
