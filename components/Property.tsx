import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PropertiesInterface } from "../interfaces/propertiesInterface";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import defaultImage from "./../assets/imgs/house.JPG";

const Property = ({ property }: { property: PropertiesInterface }) => {
  return (
    <Link href={`/property/${property.externalID}`} passHref>
      <div className="flex flex-wrap w-[420px] p-[5px] pt-0 justify-start cursor-pointer">
        <div>
          <Image
            src={property.coverPhoto ? property.coverPhoto.url : defaultImage}
            width={420}
            height={260}
            alt="house"
          />
        </div>
        <div className="w-full">
          <div className="pt-[2px] flex items-center justify-between">
            <div className="flex items-center">
              <div className="pr-[3px] text-green-400">
                {property.isVerified && <GoVerified />}
              </div>
              <h1 className="font-bold text-lg">
                GEL: {property.price}
                {property.rentFrequency && `/${property.rentFrequency}`}
              </h1>
            </div>

            <Image
              src={property.agency.logo.url}
              alt="Logo"
              width={150}
              height={90}
            />
          </div>
          <div className="flex items-center p-[1px] w-[250px] text-blue-500">
            {property.rooms} <FaBed /> | {property.baths} <FaBath /> |{" "}
            {millify(property.area)} sqft <BsGridFill />
          </div>
          <h1 className="text-lg">
            {property.title.length > 30
              ? `${property.title.substring(0, 30)}...`
              : property.title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Property;
