"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/image/logo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-3 bg-yellow-50 sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>

          {user && (
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          )}
        </ul>

        <div className="hidden md:flex items-center gap-4 text-sm">
          {!user ? (
            <>
              <Link href="/signup">SignUp</Link>
              <Link href="/signin">SignIn</Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Image
                src={user.image || "/default-avatar.png"}
                alt="user"
                width={35}
                height={35}
                className="rounded-full border"
              />

              <button
                onClick={handleLogout}
                className="text-red-500 font-medium"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>
            Products
          </Link>

          {user && (
            <Link href="/profile" onClick={() => setIsOpen(false)}>
              My Profile
            </Link>
          )}

          <hr />

          {!user ? (
            <>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                SignUp
              </Link>
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                SignIn
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Image
                  src={user.image || "/default-avatar.png"}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span>{user.name}</span>
              </div>

              <button
                onClick={handleLogout}
                className="text-red-500 cursor-pointer "
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
