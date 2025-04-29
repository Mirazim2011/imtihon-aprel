import CustomImage from "@/components/CustomImage";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  let { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const product = await res.json();

  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="bg-white max-w-4xl w-full rounded-md flex items-center gap-6 p-6">
        <div className="w-[350px] h-[400px] relative">
          <CustomImage product={product} fillValue={true} />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-3xl font-bold text-gray-500 mb-2">
            ${product.price}
          </p>
          <p className="text-md font-semibold text-gray-700">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
