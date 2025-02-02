import Link from "next/link";
import NavLinks from "./Nav-Link";
import "../styles/sideNav.css";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20  items-end justify-center rounded-md bg-red-600 p-4 md:h-40"
        href="/"
      >
        <div className="brand-name flex align-middle text-white md:w-40 font-extrabold text-3xl tracking-wide md:text-4xl text-gradient">
          Anyawe B.
        </div>{" "}
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
       
      </div>
    </div>
  );
}
