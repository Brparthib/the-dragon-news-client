import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => console.log(error));
  };

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  return (
    <div>
      <div className="w-5/12 mx-auto my-10 px-10 py-14 bg-slate-200 border border-gray-200 rounded-lg shadow">
        <h3 className="font-medium text-2xl text-blue-400 text-center mb-6">
          Register your account
        </h3>
        <hr className="h-px w-11/12 mx-auto my-8 bg-zinc-300 border-0" />
        <form onSubmit={handleRegister} className="px-10">
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Input photo url"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900">
              Your password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                onClick={handleAccepted}
                name="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                required
              />
            </div>
            <label className="ml-2 text-sm font-medium text-zinc-500">
              Accept
              <Link to="/terms" className="text-blue-500 underline">
                Term & Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-7 py-2 block w-full"
            disabled={!accepted}
          >
            Register
          </button>
          <p className="mt-2 text-center">
            you have an account?
            <Link to="/login" className="ms-2 text-blue-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
