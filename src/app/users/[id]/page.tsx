"use client";
import { UsersType } from "@/app/interface";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UsersType>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/users/${id}`);
        const userData: UsersType = await res.json();
        setUser(userData);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);
  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link className="text-indigo-400 text-3xl" href={"/users"}>
            Users
          </Link>
          <p className="text-xl">UserId: {user?.id}</p>
          <h1 className="text-2xl">Name: {user?.name?.firstname}</h1>
          <h1 className="text-2xl">Surname: {user?.name?.lastname}</h1>
          <Link
            className="text-indigo-400 text-3xl"
            href={`/users/${id}/carts`}
          >
            Carts
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
