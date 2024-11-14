import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white">
        <div className="flex justify-between font-serif py-5 px-3 mb-4">
          <div className="flex items-center">
            <div>
              <a href={process.env.PUBLIC_URL + "/home"} className="flex mr-24">
                <span className="font-bold text-3xl">Y_Quilling</span>
              </a>
            </div>
            <div className="hidden md:flex space-x-5 justify-center w-96 text-xl">
              <a
                href={process.env.PUBLIC_URL + "/home"}
                className="text-gray-700 hover:text-red-900"
              >
                Home
              </a>
              <a
                href={process.env.PUBLIC_URL + "/about"}
                className="text-gray-700 hover:text-red-900"
              >
                About
              </a>
              <a
                href={process.env.PUBLIC_URL + "/portfolio"}
                className="text-gray-700 hover:text-red-900"
              >
                Portfolio
              </a>
              <a
                href={process.env.PUBLIC_URL + "/video"}
                className="text-gray-700 hover:text-red-900"
              >
                Video
              </a>
              <a
                href={process.env.PUBLIC_URL + "/contact"}
                className="text-gray-700 hover:text-red-900"
              >
                Contact
              </a>
            </div>
          </div>

          {/* mobile menu */}
          <div
            className="md:hidden z-10 flex items-center"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            {menuToggle ? (
              <FaTimes size={30} color="white" />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </div>
        </div>

        {/* mobile menu items */}
        <div
          className={` ${
            menuToggle
              ? "text-white opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-y-full"
          } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex
        flex-col justify-center items-center text-2xl`}
          onClick={() => setMenuToggle(false)}
        >
          <a
            href={process.env.PUBLIC_URL + "/home"}
            className="p-2 hover:text-teal-600"
          >
            Home
          </a>
          <a
            href={process.env.PUBLIC_URL + "/about"}
            className="p-2 hover:text-teal-600"
          >
            About
          </a>
          <a
            href={process.env.PUBLIC_URL + "/portfolio"}
            className="p-2 hover:text-teal-600"
          >
            Portfolio
          </a>
          <a
            href={process.env.PUBLIC_URL + "/video"}
            className="p-2 hover:text-teal-600"
          >
            Video
          </a>
          <a
            href={process.env.PUBLIC_URL + "/contact"}
            className="p-2 hover:text-teal-600"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
