import { useState } from "react";
import logo from "../assets/logo.svg";
import { GrLanguage } from "react-icons/gr";
// import { IoMenu } from "react-icons/io5";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "Pricing", path: "pricing" },
    { link: "About", path: "about" },
  ];
  // fixed top-0 right-0 left-0
  return (
    <>
      <nav className="bg-white md:px-14 border-b p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center ">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="w-20 inline-block items-center"
              />
              <span>Freenzei</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link key={link} to={path} className="block hover:text-gray-300 cursor-pointer">
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" /> Language
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none   focus:text-gray-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary " />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-5 mt-16 bg-secondary text-lg ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link key={link} to={path} onClick={toggleMenu} className="block text-white hover:text-gray-300 cursor-pointer">
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
