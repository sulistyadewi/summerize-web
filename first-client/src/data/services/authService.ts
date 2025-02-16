import { getStrapiUrl } from "@/lib/utils";
import { error } from "console";
import { json } from "stream/consumers";

interface registerUserProps {
  email: string;
  username: string;
  password: string;
}

interface loginUserProps {
  identifier: string;
  password: string;
}

const baseUrl = getStrapiUrl();

export async function RegisterService(userData: registerUserProps) {
  const url = new URL("/api/auth/local/register", baseUrl);
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...userData }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function LoginService(userData: loginUserProps) {
  const url = new URL("/api/auth/local", baseUrl);
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...userData }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
