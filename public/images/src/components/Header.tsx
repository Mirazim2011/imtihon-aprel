import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header id="header" className="text-gray-600 body-font shadow">
      <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">PDP School</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home Page
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900">
            All Products
          </Link>
          <Link href={"/contacts"} className="mr-5 hover:text-gray-900">
            Contacts
          </Link>
        </nav>
        <button className="inline-flex items-center bg-blue-600 border-2 border-blue-600 text-white font-semibold py-2 px-8 focus:outline-none hover:bg-transparent hover:text-black hover:transition hover:ease-out rounded text-base mt-4 md:mt-0">
          My Bag
        </button>
      </div>
    </header>
  );
};

export default Header;
