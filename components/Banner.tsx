import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BannerProps } from "./interfaces/bannerInterface";

const Banner = ({
  purpose,
  imgUrl,
  title1,
  title2,
  desc1,
  linkName,
  buttonText,
  desc2,
}: BannerProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center m-2.5">
      <Image src={imgUrl} width={500} height={300} alt="Banner" />
      <div className="p-[5px] ml-5">
        <h1 className="text-gray-500 text-sm font-medium">{purpose}</h1>
        <h1 className=" text-3xl font-bold">
          {title1}
          <br />
          {title2}
        </h1>
        <h1 className="text-lg py-[3px] text-gray-700">
          {desc1}
          <br />
          {desc2}
        </h1>
        <button className="text-xl bg-blue-600 py-1 px-3 uppercase text-white rounded-[8px]">
          <Link href={linkName}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
