// import qs from "qs";
import Image from "next/image";

// import Register from "./register/page";
// import Dashboard from "@/components/dashboard";
import Features from "@/components/features";
// import Footer from "@/components/footer";
import HomePage from "@/components/homePage";
// import { getStrapiUrl } from "@/lib/utils";
import { features } from "process";
import { getHomePage } from "@/data/loaders";

const blockComponent = {
  "layout.hero-section": HomePage,
  "layout.features-section": Features,
};

const render = (block: any) => {
  let Component =
    blockComponent[block.__component as keyof typeof blockComponent];
  return Component ? <Component key={block.id} data={block} /> : null;
};

export default async function Home() {
  const strapiData = await getHomePage();
  // console.log(strapiData, "ini strapiData");

  // console.log(strapiData, "test console log");
  // console.dir(strapiData, { depth: null });
  const { blocks } = strapiData?.data;
  // console.log(blocks, "ini blocks");
  if (!blocks) {
    return <div>blocks not found</div>;
  }
  return <main>{blocks.map(render)}</main>;
  // return <Dashboard />;
  // console.log(blocks[1], "ini blocks");

  // const { title, description } = strapiData.data;
}
