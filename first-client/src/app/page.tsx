// import * as qs from "qs";
import Image from "next/image";
import logo from "@/components/logo_summerize__1_-removebg-preview.png";
import Register from "./register/page";
import Dashboard from "@/components/dashboard";

// const homePageQuery = qs.stringify({
//   populate: {
//     image: {
//       fields: ["url", "alternativeText"],
//     },
//     Link: {
//       populate: true,
//     },
//   },
// });

// async function getStrapiData(path: string) {
//   const baseUrl = "http://localhost:1337";
//   let url = new URL(path, baseUrl);
//   url.search = homePageQuery;
//   try {
//     const response = await fetch(baseUrl + url);
//     const data = await response.json();
//     // console.log(data, "test data");
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
//   try {
//     const response = await fetch(baseUrl + url);
//     const data = await response.json();
//     console.log(data, "test data");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function Home() {
  // const strapiData = await getStrapiData("/api/home-page");
  // console.log(strapiData, "test console log");

  // const {} = strapiData.data.attributes;

  return (
    <div className="">
      <div className="bg-[url('/image/HomePage.png')] bg-cover bg-no-repeat w-full h-screen">
        <div className="flex -mt-5 justify-between">
          <Image
            src={logo}
            width={170}
            height={170}
            alt="logo"
            className="flex"
          />
          <a href="/login" className="flex mt-10 mr-10 text-lg hover:underline">
            Login
          </a>
        </div>
        <div className="text-center mt-16">
          <h1 className="text-6xl font-bold">HEADING</h1>
          <p className="text-2xl mt-4 mb-4">Sub-Heading</p>
          <a
            href="/register"
            className="bg-teal-600 mt-4 text-lg px-3 py-2 rounded-md hover:bg-teal-800"
          >
            Register
          </a>
        </div>
      </div>

      {/* <Dashboard /> */}
    </div>
  );
}
