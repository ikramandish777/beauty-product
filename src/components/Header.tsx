// components/Navbar.js
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex   justify-between lg:justify-stretch lg:grid lg:grid-flow-col px-6 py-4 lg:px-16">
      <div className="">
        <img src="/Beautify.png" alt="" />
      </div>
      {/* Hamburger Menu */}
      <button
        className="lg:hidden text-white text-2xl w-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      {/* Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute lg:static lg:flex top-16 left-0 w-full lg:w-auto bg-blue-900 lg:bg-transparent space-y-4 lg:space-y-0 lg:space-x-6 text-lg font-medium text-white px-6 py-4 lg:p-0`}
      >
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
      </ul>
    </nav>
  );
}
