import Link from "next/link";

// function MountainIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 z" />
//     </svg>
//   );
// }

interface logoProps {
  text?: string;
  dark?: boolean;
}

export function Logo({ text = "logoText", dark = false }: Readonly<logoProps>) {
  return (
    <Link className="flex items-center gap-2 justify-between" href="/">
      {/* <MountainIcon className={"h-6 w-6  text-pink-500"} /> */}
      <img src="/logo.png" alt="" className="h-24 w-24 object-cover" />
      <span
        className={`text-lg font-semibold${
          dark ? "text-white hidden" : "text-slate-900 hidden"
        }`}
      >
        {text}
      </span>
    </Link>
  );
}
