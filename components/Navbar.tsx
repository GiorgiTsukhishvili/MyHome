import React from "react";
import Link from "next/link";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[4px] border-b-[1px] border-gray-100">
      <div className="text-3xl text-blue-500 font-bold">
        <Link href="/" className="pl-[2px]">
          MyHome
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex gap-2 items-center">
          <FcHome />
          <Link href="/">Home</Link>
        </div>
        <div className="flex gap-2 items-center">
          <BsSearch />
          <Link href="/search">Search</Link>
        </div>
        <div className="flex gap-2 items-center">
          <FcAbout />
          <Link href="/search?purpose=for-sale">Buy Property</Link>
        </div>
        <div className="flex gap-2 items-center">
          <FiKey />
          <Link href="/search?purpose=for-rent">Rent Property</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
