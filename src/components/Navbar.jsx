"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/image/logo.png";

import { FaBars, FaTimes, } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b px-3 bg-yellow-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="rounded-2xl"
          />
          <h2 className="text-xl md:text-2xl font-bold text-orange-500">
            GLOW<span className="text-black">SUN</span>
          </h2>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Products">Products</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/signup">SignUp</Link>
          <Link href="/signin">SignIn</Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/Products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>My Profile</Link>

          <hr />

          <Link href="/signup" onClick={() => setIsOpen(false)}>SignUp</Link>
          <Link href="/signin" onClick={() => setIsOpen(false)}>SignIn</Link>

         
        </div>
      )}
    </div>
  );
};

export default Navbar;