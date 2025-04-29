import { ProductType } from "@/interface";
import React from "react";
import CustomImage from "./CustomImage";
import Link from "next/link";

const Item = ({ product }: { product: ProductType }) => {
  return (
    <li
      key={product.id}
      className="min-h-96 flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-2xl hover:scale-102 transition-all duration-400 ease-in-out"
    >
      <Link
        href={`/products/${product.id}`}
        className="flex p-4 flex-col w-full h-full"
      >
        <div className="relative w-full flex-1">
          <CustomImage product={product} fillValue={true} />
        </div>
        <span className="text-indigo-700 font-semibold mr-auto mb-2">
          {product.category}
        </span>
        <div className="flex w-full mb-2 justify-between font-bold">
          <h3 className="line-clamp-1 w-[300px]">{product.title}</h3>
          <span>${product.price}</span>
        </div>
        <p className="line-clamp-2">{product.description}</p>
      </Link>
    </li>
  );
};

export default Item;
