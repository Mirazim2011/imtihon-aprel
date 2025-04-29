"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { cardId } = useParams();
  const [cart, setCart] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/carts/${cardId}`);
        const cartData: any = await res.json();
        setCart(cartData);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [cardId]);

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {cart ? (
            <div>
              <div>
                <h1>UserID: {cart?.userId}</h1>
                <h1>Date: {cart?.date}</h1>
              </div>
            </div>
          ) : (
            <p>Cart mavjud emas</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
