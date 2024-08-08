import React from "react";
import { images } from "../constants";

export const Header = () => {
  const navItemInfo = [
    { name: "Home" },
    { name: "Article" },
    { name: "Pages" },
    { name: "Pricing" },
    { name: "FAQ" },
  ];
  const NavItem = ({ name }) => {
    return (
      <li className="relative group">
        <a className="px-9 py-2" href="/">
          {name}
        </a>
      </li>
    );
  };

  return (
    <>
      <section>
        <header className="container mx-auto p-5 flex justify-between">
          <div>
            <img className="w-19 h-10" src={images.logo} alt="" />
          </div>
          <div className="flex gap-x-9 items-center">
            <ul className="flex gap-x-6 font-semibold">
              {navItemInfo.map((item) => (
                <NavItem key={item.name} name={item.name} />
              ))}
            </ul>
            <button className=" border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
              Sign Up
            </button>
          </div>
        </header>
      </section>
    </>
  );
};
