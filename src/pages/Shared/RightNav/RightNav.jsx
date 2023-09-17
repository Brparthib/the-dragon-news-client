import React from "react";
import "./RightNav.css";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import instagram from "../../../assets/instagram.png";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const RightNav = () => {
  return (
    <div className="px-5">
      <div className="mb-5">
        <h5 className="font-bold text-xl mb-5">Login With</h5>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <FaGoogle className="mr-2 text-xl"></FaGoogle>
          <p>Sign in with Google</p>
        </button>
        <button
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <FaGithub className="mr-2 text-xl"></FaGithub>
          <p className="mr-1">Sign in with Github</p>
        </button>
      </div>
      <div className="mb-5">
        <h5 className="font-bold text-xl mb-5">Find Us On</h5>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full font-medium text-left text-gray-600">
            <tbody>
              <tr className="bg-gray-100 border-b hover:bg-slate-200">
                <td className="px-6 py-4">
                  <a href="" className="flex">
                    <img className="w-6 mr-3" src={facebook} alt="icon" />
                    <span>Facebook</span>
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100 border-b hover:bg-slate-200">
                <td className="px-6 py-4">
                  <a href="" className="flex">
                    <img className="w-6 mr-3" src={twitter} alt="icon" />
                    <span>Twitter</span>
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100 border-b hover:bg-slate-200">
                <td className="px-6 py-4">
                  <a href="#" className="flex">
                    <img className="w-6 mr-3" src={instagram} alt="icon" />
                    <span>Instagram</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-5">
        <h5 className="font-bold text-xl mb-5">Q-Zone</h5>
        <div className="block max-w-sm p-6 bg-slate-100 border border-slate-200 rounded-lg shadow hover:bg-gray-200">
          <a href="#">
            <img src={qZone1} alt="" />
          </a>
          <a href="#">
            <img className="my-5" src={qZone2} alt="" />
          </a>
          <a href="#">
            <img src={qZone3} alt="" />
          </a>
        </div>
      </div>
      <div className="create mb-5 text-center">
        <div
          href="#"
          className="block max-w-sm p-14 border border-gray-200 shadow"
        >
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create an Amazing Newspaper
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-3 mb-8">
          Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
          </p>
          <button
          type="button"
          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 focus:outline-none mr-5"
        >
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
