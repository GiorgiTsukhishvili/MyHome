import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import NoResult from "../assets/imgs/noresult.svg";
import { baseUrl } from "../utils/fetchApi";
import { GetServerSideProps } from "next";
import { fetchApi } from "../utils/fetchApi";
import { PropertiesInterface } from "../interfaces/propertiesInterface";

const Search = ({ properties }: { properties: PropertiesInterface[] }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div
        className="flex cursor-pointer bg-gray-100 border-b-[1px] border-gray-200 p-[2px] font-bold text-lg justify-center items-center"
        onClick={() => setSearchFilters((prevFilter) => !prevFilter)}
      >
        <h1 className="mr-3">Search Property By Filters</h1>
        <BsFilter className="text-2xl" />
      </div>
      {searchFilters && <SearchFilters />}
      <h1 className="text-2xl p-[4px] font-bold">
        Properties {router.query.purpose}
      </h1>
      <div className="flex flex-wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      {properties.length === 0 && (
        <div className="flex flex-col justify-center items-center my-[5px]">
          <Image alt="No result" src={NoResult} />
          <h1 className="text-2xl mt-3">No Results Were Found</h1>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
};

export default Search;
