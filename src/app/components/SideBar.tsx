import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="bg-indigo-600 flex flex-col h-screen w-1/8">
      <ul className="flex flex-col justify-center items-center gap-2 p-4">
        <li>
          <Link
            className="text-white text-2xl font-bold bg-amber-400 border-1 border-amber-400 p-2 rounded-lg"
            href={"/users"}
          >
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
