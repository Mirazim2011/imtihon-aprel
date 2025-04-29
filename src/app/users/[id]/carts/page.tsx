"use client";
import { CardType } from "@/app/interface";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [cart, setCart] = useState<CardType[]>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/carts`);
        const cartData = await res.json();
        setCart(cartData);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);
  const cartItem = cart?.filter((item: CardType) => item.userId === Number(id));
  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link className="text-indigo-400 text-3xl" href={`/users/${id}`}>
            User
          </Link>
          {cartItem?.map((item: CardType) => (
            <Link
              key={item.id}
              className="text-xl"
              href={`/users/${id}/carts/${id}`}
            >
              <h1>{item.date}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
