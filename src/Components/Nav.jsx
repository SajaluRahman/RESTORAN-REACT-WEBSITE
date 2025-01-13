import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[#fea116] text-6xl font-bold">🍴</span>
          <span className="text-[#fea116] text-5xl lg:text-6xl font-bold">
            Restoran
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-2xl text-white">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link to="/About" className="hover:text-yellow-500">
            About
          </Link>
          <Link to="/Service" className="hover:text-yellow-500">
            Service
          </Link>
          <Link to="/Menu" className="hover:text-yellow-500">
            Menu
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-yellow-500 flex items-center space-x-1"
            >
              <span>Pages</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10 w-40">
                <Link
                  to="/Booking"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-500"
                >
                  Booking
                </Link>
                <Link
                  to="/OurTeam"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-500"
                >
                  Our Team
                </Link>
                <Link
                  to="/Testimonial"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-500"
                >
                  Testimonial
                </Link>
              </div>
            )}
          </div>

          <Link to="/Contatc" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/Booking"
          className="hidden lg:inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-2xl"
        >
          Book a Table
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-white py-4">
          <Link
            to="/"
            className="block px-6 py-2 hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="block px-6 py-2 hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/Service"
            className="block px-6 py-2 hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/Menu"
            className="block px-6 py-2 hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>
          {/* Dropdown Menu */}
          <div className="px-6 py-2">
            <button
              onClick={toggleDropdown}
              className="hover:text-yellow-500 flex items-center"
            >
              Pages
              <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 mt-2">
                <Link
                  to="/Booking"
                  className="block px-4 py-1 hover:text-yellow-500"
                >
                  Booking
                </Link>
                <Link
                  to="/OurTeam"
                  className="block px-4 py-1 hover:text-yellow-500"
                >
                  Our Team
                </Link>
                <Link
                  to="/Testimonial"
                  className="block px-4 py-1 hover:text-yellow-500"
                >
                  Testimonial
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/Contatc"
            className="block px-6 py-2 hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/Booking"
            className="block px-6 py-3 mt-2 bg-yellow-500 hover:bg-yellow-600 text-center rounded-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Table
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
