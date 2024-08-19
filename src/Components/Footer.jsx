import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-poppins text-xl font-semibold">e-Shop</h3>
          <p className="mt-4 text-sm font-poppins font-normal">
            Your one-step fot all your needs. Shop with use and experience the
            best online shopping experiences.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="font-poppins text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 font-poppins font-normal">
            <li>
              <Link className="hover:underline" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:underline" to="/shop">Shop</Link>
            </li>
            <li>
              <Link className="hover:underline" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="hover:underline" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
            <h2 className="font-poppins text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-4">
                <FaFacebook className="hover:text-gray-400 text-lg duration-300"/>
                <FaTwitter className="hover:text-gray-400 text-lg duration-300"/>
                <FaGithub className="hover:text-gray-400 text-lg duration-300"/>
                <FaLinkedin className="hover:text-gray-400 text-lg duration-300"/>
            </div>
            <form className="flex items-center justify-center mt-8">
                <input type="email" placeholder="Your Email"  className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 outline-none"/>
                <button className="bg-red-600 hover:bg-red-700 duration-300 text-white px-4 py-2 rounded-r-lg border border-gray-600 font-poppins font-medium">Subscribe</button>
            </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container flex flex-col md:flex-row justify-between items-center">
            <p className="font-poppins font-medium">&copy; 2024 e-shop All rights reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0 font-poppins font-normal">
                <Link className="hover:underline">Privacy Policy</Link>
                <Link className="hover:underline">Terms & Conditions</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
