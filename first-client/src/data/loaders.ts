import qs from "qs";
import { getStrapiUrl } from "@/lib/utils";
import { get } from "http";
import { headers } from "next/headers";
import { json } from "stream/consumers";
import { error } from "console";
import { url } from "inspector";

const baseUrl = getStrapiUrl();

const fetchData = async (url: any) => {
  let token = null;
  let headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    let response = await fetch(url, token ? headers : {});
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export async function getHomePage() {
  // throw new Error("ini error");
  const url = new URL("/api/home-page", baseUrl);
  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: {
                populate: true,
              },
            },
          },
          "layout.features-section": {
            populate: {
              feature: {
                populate: true,
              },
            },
          },
        },
      },
    },
  });
  return await fetchData(url.href);
}

export async function getGlobalData() {
  const url = new URL("/api/global-page", baseUrl);
  url.search = qs.stringify({
    populate: [
      "header.imageLogo",
      "header.btnLogin",
      "footer.textLogo",
      "footer.icon",
    ],
  });
  return await fetchData(url.href);
}

export async function getMetaData() {
  const url = new URL("/api/global-page", baseUrl);
  url.search = qs.stringify({
    field: ["title", "description"],
  });
  return await fetchData(url.href);
}
