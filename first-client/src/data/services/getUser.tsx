import React from "react";
import { GetToken } from "./getToken";
import { getStrapiUrl } from "@/lib/utils";
// import { ok } from "assert";
// import { error, log } from "console";

export async function getUser() {
  let baseUrl = getStrapiUrl();
  let url = new URL("/api/users/me", baseUrl);
  let token = await GetToken();
  if (!token) return { ok: false, data: null, error: null };

  try {
    let response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (err) {
    console.log(err);
    return { ok: false, data: null, error: err };
  }
  return "";
}
