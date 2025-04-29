import Link from "next/link";
import React from "react";
import { UsersType } from "../interface";

const Item = ({ users }: { users: UsersType }) => {
  return (
    <li>
      <Link
        href={`/users/${users.id}`}
        className="flex items-center gap-2 text-2xl  font-bold hover:text-amber-500"
      >
        <h1>{users.name.firstname}</h1>
        <h2>{users.name.lastname}</h2>
      </Link>
    </li>
  );
};

export default Item;
