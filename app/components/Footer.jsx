import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center  w-full">
      <div className="flex justify-center h-auto bg-leafy-green py-7 px-20 ">
        <div className="grid grid-cols-1 w-1/4">
          <h1 className="text-sm font-bold h-max">Our Product</h1>
          <div className="">
            <Link href="/" className="text-sm">
              <p>Meal Kits</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>prepared Meals</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Less Prep</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Frozen Meals</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>All Recipes</p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 w-1/4 ">
          <h1 className="text-sm font-bold h-max">Help</h1>
          <div>
            <Link href="/" className="text-sm">
              <p>Pricing</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Recycle</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Extras</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>FAQs</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Contact US</p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 w-1/4 ">
          <h1 className="text-sm font-bold h-max">Connect</h1>
          <div>
            <Link href="/" className="text-sm">
              <p>Blog</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Merch</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Partnerships</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Affliate Program</p>
            </Link>
            <Link href="/" className="text-sm">
              <p>Careers</p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 w-2/5 gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-bold">Follow us on :</h1>
            <div className="flex gap-3">
              <Link href="/">
                <Image
                  src="/assets/images/instagram-with-circle.svg"
                  width={35}
                  height={35}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/images/facebook-with-circle.svg"
                  width={35}
                  height={35}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/images/pinterest-circle.svg"
                  width={35}
                  height={35}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/images/twitter-with-circle.svg"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1>Sign-Up for Our Weekly Menu</h1>
            <input
              className="rounded-md px-2 py-2 text-black"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-white text-black pt-10 pb-20">
        <div className="flex justify-center text-sm font-bold">
          <p>© Copyright 2023 FreshBite. All rights reserved.</p>
        </div>

        <div className="flex justify-center text-gray-600 gap-2">
          <Link href="/">
            <h2 className="text-sm border-gray-600 border-r-2 px-2">
              Terms & Conditions
            </h2>
          </Link>
          <Link href="/">
            <h2 className="text-sm border-gray-600 border-r-2 px-2">
              Privacy Policy
            </h2>
          </Link>
          <Link href="/">
            <h2 className="text-sm border-gray-600 border-r-2 px-2">
              Do Not sell My Info
            </h2>
          </Link>
          <Link href="/">
            <h2 className="text-sm border-gray-600 border-r-2 px-2">
              Accessibilty Statement
            </h2>
          </Link>
          <Link href="/">
            <h2 className="text-sm">Site Map</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
