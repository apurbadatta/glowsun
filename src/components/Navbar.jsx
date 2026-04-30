"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/image/logo.png"

const Navbar = () => {
  return (
    <div className="border-b px-2 bg-yellow-50">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            width={35}
            height={35}
            className="object-cover h-auto w-auto rounded-2xl "
          />
          <h3 className="font-black text-lg">GLOW-SUN</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/Products"}>Products</Link>
          </li>
          
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-2 text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
