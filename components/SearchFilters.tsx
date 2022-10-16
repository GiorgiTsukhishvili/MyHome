import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

interface FilterInt {
  [x: string]: string;
}

const filters = filterData;

const SearchFilters = () => {
  const [chosenFilters, setChosenFilters] = useState<FilterInt[]>([]);

  const router = useRouter();

  const searchProperties = () => {
    const path = router.pathname;

    const { query } = router;

    chosenFilters.forEach((filterValues) => {
      query[Object.keys(filterValues)[0]] = Object.values(filterValues)[0];
    });

    router.push({ pathname: path, query });
  };

  const handleChange = (filterValues: { [x: string]: string }) => {
    setChosenFilters((prevFilters) => {
      return [...prevFilters, filterValues];
    });
  };

  return (
    <div className="flex bg-gray-100 p-[10px] py-5 justify-center items-center flex-wrap">
      {filters.map((filter) => (
        <div key={filter.queryName} className="mr-5 mb-5 flex flex-col">
          <label htmlFor="">{filter.placeholder}</label>
          <select
            onChange={(e) =>
              handleChange({ [filter.queryName]: e.target.value })
            }
            className="p-[2px]"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button
        onClick={searchProperties}
        className="bg-blue-500 px-3 h-6 rounded-[8px] text-white"
      >
        Filter
      </button>
    </div>
  );
};

export default SearchFilters;
