"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex justify-between align-center w-full sm:px-16 px-6 py-3 bg-leafy-green z-50 sticky top-0 border-b-2 border-gray-300">
      <Link href="/" className="">
        <p className="logo_text">FreshBite</p>
      </Link>

      {/* Desktop nav */}
      <div className="sm:flex" hidden>
        <div className="flex gap-3 md:gap-5">
          <Link href="/menu" className="menu_link">
            Menu
          </Link>
          <Link href="/how-it-works" className="menu_link">
            How It Works
          </Link>
          <Link href="/contact" className="menu_link">
            Contact
          </Link>
          <Link href="/cart">
            <Image
              src="/assets/images/cart.png"
              alt="cart"
              width={30}
              height={30}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      {/* mobile nav */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/cart.png"
            alt="profile"
            width={37}
            height={37}
            className="rounded-full"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <button
                type="button"
                className="mt-5 w-full black_btn"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
