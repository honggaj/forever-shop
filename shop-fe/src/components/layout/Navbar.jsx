import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center py-5 font-medium">
        <img className="w-32" src={logo} alt="logo-forever" />

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/home" className="flex flex-col gap-1 items-center">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col gap-1 items-center">
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col gap-1 items-center">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col gap-1 items-center">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <BiSearchAlt2 className="w-5 cursor-pointer" />
          <div className="group relative">
            <MdAccountCircle className="w-5 cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link className="relative" to="/cart">
            <HiShoppingCart className="w-5 min-w-5 cursor-pointer" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>

          {/* Mobile menu icon */}
          <CiMenuFries
            onClick={() => setVisible(true)}
            className="w-6 h-6 sm:hidden cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <IoClose
            onClick={() => setVisible(false)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-5 p-5 text-gray-700">
          <NavLink onClick={() => setVisible(false)} to="/home">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact">
            CONTACT
          </NavLink>
        </ul>
      </div>
    </>
  );
}
