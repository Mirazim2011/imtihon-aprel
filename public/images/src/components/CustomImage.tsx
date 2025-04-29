"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { ProductType } from "../interface";

const CustomImage: FC<{ product: ProductType; fillValue: boolean }> = ({
  product,
  fillValue,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      className={`object-contain duration-700 ease-in-out ${
        isLoading && "blur-lg scale-110"
      }`}
      src={product.image}
      alt={product.description}
      fill={fillValue}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default CustomImage;
