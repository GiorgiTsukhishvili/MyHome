import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import { GetServerSideProps } from "next";
import { PropertiesInterface } from "../../interfaces/propertiesInterface";
import Image from "next/image";

const Property = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    amenities,
    furnishingStatus,
    photos,
  },
}: {
  propertyDetails: PropertiesInterface;
}) => {
  return (
    <div className=" flex m-auto p-[4px]">
      {photos && <ImageScrollbar data={photos} />}
      <div className="w-full ml-3">
        <div className="w-full p-[6px]">
          <div className="pt-[2px] flex items-center">
            <div className="flex items-center mr-3">
              <div className="pr-[3px] text-green-400">
                {isVerified && <GoVerified />}
              </div>
              <h1 className="font-bold text-lg">
                GEL: {price}
                {rentFrequency && `/${rentFrequency}`}
              </h1>
            </div>
            <Image src={agency.logo.url} alt="Logo" width={150} height={90} />
          </div>
          <div className="flex items-center p-[1px] w-[250px] text-blue-500">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </div>
          <h1 className="text-lg">{title}</h1>
        </div>
        <h1 className="text-gray-600 mt-[2px]">{description}</h1>
        <div className="flex flex-wrap uppercase justify-between">
          <div className="flex justify-between w-[400px] border-b-[1px] border-gray-100 p-[3px]">
            <h1>Type</h1>
            <h1 className="font-bold">{type}</h1>
          </div>
          <div className="flex justify-between w-[400px] border-b-[1px] border-gray-100 p-[3px]">
            <h1>Purpose</h1>
            <h1 className="font-bold">{purpose}</h1>
          </div>
          {furnishingStatus && (
            <div className="flex justify-between w-[400px] border-b-[1px] border-gray-100 p-[3px]">
              <h1>Furnishing Status</h1>
              <h1 className="font-bold">{furnishingStatus}</h1>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${params!.id}`
  );

  return {
    props: {
      propertyDetails: data,
    },
  };
};

export default Property;
