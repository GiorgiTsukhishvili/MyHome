import React from "react";
import { PropertiesPhotos } from "../interfaces/propertiesInterface";
import Image from "next/image";

const ImageScrollbar = ({ data }: { data: PropertiesPhotos[] }) => {
  return (
    <div className="h-[82vh] min-w-[300px] max-w-[301px] overflow-scroll overflow-x-hidden">
      {data.map((item) => (
        <div key={item.id} className="min-w-[300px] inline-block">
          <Image
            src={item.url}
            alt="Property"
            width={1000}
            height={500}
            className="w-[1000px] h-[500px] "
          />
        </div>
      ))}
    </div>
  );
};

export default ImageScrollbar;
