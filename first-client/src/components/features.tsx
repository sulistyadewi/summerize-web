// import { features } from "process";

function getIcon(name: string) {
  switch (name) {
    case "Save Time":
      return <SaveTimeIcon className="mx-auto text-blue-950" />;
    case "Cloud":
      return <CloudIcon className="mx-auto text-blue-950" />;
    case "Accurate":
      return <AccurateIcon className="mx-auto text-blue-950" />;
    default:
      return null;
  }
}

interface featureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: string;
}

interface fProps {
  id: number;
  documentId: string;
  _component: string;
  title: string;
  description: string;
  feature: featureProps;
}
// { data }: { readonly data: fProps }
export default function Features({
  data,
}: {
  data: { feature: featureProps[] };
}) {
  // console.dir(data, { depth: null });
  const { feature } = data;
  // console.dir(feature, { depth: null });
  // console.log(feature, "ini heading");

  return (
    <div className="w-full flex justify-center items-center mb-12 -mt-56">
      <div className="flex mx-auto justify-center">
        {feature.map((feat, index) => (
          <div key={index} className="text-center border-x-2 border-slate-300">
            {getIcon(feat.icon)}
            <h1 className="mt-2">{feat.heading}</h1>
            <h6 className="text-slate-500 text-sm max-w-sm mt-1">
              {feat.subHeading}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccurateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SaveTimeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}
