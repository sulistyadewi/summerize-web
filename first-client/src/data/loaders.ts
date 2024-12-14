import qs from "qs";
import { getStrapiUrl } from "@/lib/utils";
import { get } from "http";
import { headers } from "next/headers";
import { json } from "stream/consumers";
import { error } from "console";

const baseUrl = getStrapiUrl();

const fetchData = async (url: string) => {
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
  } catch (err) {
    console.log(err);
  }
};

export async function getHomePage() {
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
