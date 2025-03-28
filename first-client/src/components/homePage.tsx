import image from "next/image";
import { StrapiImageBg } from "@/components/strapiImage";
import { getUser } from "@/data/services/getUser";
import { userAgent } from "next/server";

interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface LinkProps {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
}

interface HomePageProps {
  id: number;
  documentId: string;
  _component: string;
  heading: string;
  subHeading: string;
  image: ImageProps;
  link: LinkProps;
}

export default async function HomePage({
  data,
}: {
  readonly data: HomePageProps;
}) {
  // console.log(data, "ini dari HomePage");

  // console.dir(data, { depth: null });
  const user = await getUser();
  const userLogIn = user?.ok;
  const { heading, subHeading, image, link } = data;
  const linkUrl = userLogIn ? "/dashboard" : link.url;
  const imageUrl = "http://localhost:1337" + image.url;
  return (
    <div className="text-center">
      <div className="bg-cover bg-no-repeat w-full h-screen -z-50">
        <StrapiImageBg
          src={imageUrl}
          alt={image.alternativeText ?? "no alternative text"}
          width={1920}
          height={1080}
          className="w-full h-full inset-0 absolute object-cover -z-50"
        />
        {/* <div className="flex -mt-5 justify-between sticky">
          <img
            src="./image/logo_summerize.png"
            width={170}
            height={170}
            alt="logo"
            className="flex"
          />
          <a href="/login" className="flex mt-10 mr-10 text-lg hover:underline">
            Login
          </a>
        </div> */}
        <div className="pt-36 sticky text-center">
          <h1 className="text-6xl font-bold">{heading}</h1>
          <p className="text-2xl mt-4 mb-4">{subHeading}</p>
          <a
            href={linkUrl}
            className="bg-teal-600 mt-4 text-lg px-3 py-2 rounded-md hover:bg-teal-800"
          >
            {userLogIn ? "Dashboard" : link.text}
          </a>
        </div>
      </div>
    </div>
  );
}
