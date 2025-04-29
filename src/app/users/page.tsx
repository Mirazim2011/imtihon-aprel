import React from "react";
import { UsersType } from "../interface";
import Item from "../components/Item";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/users");
  const users = await res.json();
  if (!res.ok) throw new Error("Failed to Fetch");
  return (
    <div className="p-6">
      <ul className="flex flex-col justify-between gap-4 items-cemter">
        {users.map((user: UsersType) => (
          <Item key={user.id} users={user} />
        ))}
      </ul>
    </div>
  );
};

export default Page;
