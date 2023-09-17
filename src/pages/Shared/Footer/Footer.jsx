import React from "react";
import logo from '../../../assets/newspaper.png'
import logo2 from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="shadow bg-slate-200">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src={logo}
                className="w-12 mr-3"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-dark">
                <img className="w-48" src={logo2} alt="" />
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              The Dragon News™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
