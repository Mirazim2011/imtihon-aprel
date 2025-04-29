"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProductType } from "../../../interface";
import CustomImage from "../../../components/CustomImage";

const DetailModalPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProductData() {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await res.json();
        setProduct(productData);
      } finally {
        setLoading(false);
      }
    }
    getProductData();
  }, [id]);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="hourglassBackground">
            <div className="hourglassContainer">
              <div className="hourglassCurves"></div>
              <div className="hourglassCapTop"></div>
              <div className="hourglassGlassTop"></div>
              <div className="hourglassSand"></div>
              <div className="hourglassSandStream"></div>
              <div className="hourglassCapBottom"></div>
              <div className="hourglassGlass"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs backdrop-brightness-90">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl relative">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-[300px] h-[400px] relative">
                {product && <CustomImage product={product} fillValue={true} />}
              </div>
              <div className="flex-1 space-y-4">
                <h1 className="text-2xl font-bold line-clamp-1">
                  {product?.title}
                </h1>
                <p className="text-xl font-semibold text-gray-800">
                  ${product?.price}
                </p>
                <div className="flex items-center gap-4">
                  <p className="font-medium">
                    {product?.rating.rate} ⭐⭐⭐⭐⭐
                  </p>
                  <p className="text-blue-600 cursor-pointer">
                    See all {product?.rating.count} reviews
                  </p>
                </div>
                <p className="text-base text-gray-700 line-clamp-5">
                  {product?.description}
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition">
                    Add To Bag
                  </button>
                  <button
                    className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
                    onClick={() => window.location.reload()}
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailModalPage;
