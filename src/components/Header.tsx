import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const linkStyle = "text-gray-700 hover:text-red-700";
  const mobileLinkStyle = "p-2 hover:text-red-700";
  return (
    <nav className="top-0 z-10 font-serif mb-6 relative">
      <div className="flex justify-between py-5 px-3 mb-4">
        <div className="flex items-center w-full">
          <div className=" m-0 p-0">
            <NavLink to="/home">
              <span className="font-bold text-3xl">Y_Quilling</span>
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-12 justify-center w-full text-xl">
            <NavLink to="/home" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
            <NavLink to="/portfolio" className={linkStyle}>
              Portfolio
            </NavLink>
            <NavLink to="/video" className={linkStyle}>
              Video
            </NavLink>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className="md:hidden position-absolute top-0 start-100 translate-middle"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          {menuToggle ? (
            <FaTimes
              size={40}
              color="white"
              className="absolute top-4 end-4 z-10"
            />
          ) : (
            <RxHamburgerMenu size={40} />
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
        <NavLink to="/home" className={mobileLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" className={mobileLinkStyle}>
          About
        </NavLink>
        <NavLink to="/portfolio" className={mobileLinkStyle}>
          Portfolio
        </NavLink>
        <NavLink to="/video" className={mobileLinkStyle}>
          Video
        </NavLink>
        <NavLink to="/contact" className={mobileLinkStyle}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
