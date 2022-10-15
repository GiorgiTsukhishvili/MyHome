import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues: { [x: string]: string }) => {
    const path = router.pathname;

    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };

  return (
    <div className="flex bg-gray-100 p-[10px] py-5 justify-center flex-wrap">
      {filters.map((filter) => (
        <div key={filter.queryName} className="mr-5 mb-5 flex flex-col">
          <label htmlFor="">{filter.placeholder}</label>
          <select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
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
    </div>
  );
};

export default SearchFilters;
