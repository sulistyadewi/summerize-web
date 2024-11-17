import qs from "qs";
import Image from "next/image";

import Register from "./register/page";
import Dashboard from "@/components/dashboard";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HomePage from "@/components/homePage";
import { getStrapiUrl } from "@/lib/utils";

const homePageQuery = qs.stringify({
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

async function getStrapiData(path: string) {
  const baseUrl = getStrapiUrl();
  // console.log(baseUrl, "ini base url");

  let url = new URL(path, baseUrl);
  url.search = homePageQuery;
  try {
    const response = await fetch(url.href, { cache: "no-store" });
    const data = await response.json();
    // console.log(data, "test data");
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  // console.log(strapiData, "test console log");
  // console.dir(strapiData, { depth: null });
  const { blocks } = strapiData.data;
  // console.log(blocks[1], "ini blocks");

  // const { title, description } = strapiData.data;

  return (
    <div className="">
      {/* <Dashboard /> */}
      <HomePage data={blocks[0]} />
      <Features data={blocks[1]} />
      <Footer />
    </div>
  );
}
