import { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <nav>
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex justify-between font-serif px-6">
            <div className="flex items-center px-3 py-5">
              <div>
                <a className="flex mr-24" href={"/home"}>
                  <span className="font-bold text-3xl">Y_Quilling</span>
                </a>
              </div>
              <div className="hidden sm:flex space-x-5 justify-center w-96 text-xl">
                <a href="/home" className="text-gray-700 hover:text-red-900">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-red-900">
                  About
                </a>
                <a
                  href="/portfolio"
                  className="text-gray-700 hover:text-red-900"
                >
                  Portfolio
                </a>
                <a href="/video" className="text-gray-700 hover:text-red-900">
                  Video
                </a>
                <a href="/contact" className="text-gray-700 hover:text-red-900">
                  Contact
                </a>
              </div>
            </div>

            {/* mobile menu */}
            <div className="sm:hidden flex">
              <button onClick={() => setMenuToggle(!menuToggle)}>
                {menuToggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu items */}
        <div className={classNames("sm:hidden", { hidden: !menuToggle })}>
          <a href="#" className="block py-2 px-3 text-sm hover:bg-gray-200">
            Home
          </a>
          <a href="#" className="block py-2 px-3 text-sm hover:bg-gray-200">
            Gallery
          </a>
          <a href="#" className="block py-2 px-3 text-sm hover:bg-gray-200">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
