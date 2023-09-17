import React, { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav className="bg-white mb10 border-gray-200 mt-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="text-xl"></FaBars>
          </button>
          <div
            className="hidden w-full mx-auto md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-slate-100 hover:text-blue-500 focus:bg-neutral-100 focus:text-blue-500 focus:ring-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="block cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-slate-100 hover:text-blue-500 focus:bg-neutral-100 focus:text-blue-500 focus:ring-0">
                  About
                </Link>
              </li>
              <li>
                <Link className="block cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-slate-100 hover:text-blue-500 focus:bg-neutral-100 focus:text-blue-500 focus:ring-0">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          {user && (
            <>
              <Link className="text-xl font-medium mr-3 text-sky-700">
                {user?.email}
              </Link>
            </>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-7 py-2"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-7 py-2"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
