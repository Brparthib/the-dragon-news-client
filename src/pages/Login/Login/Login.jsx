import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="w-4/12 mx-auto mt-10 px-6 py-14 bg-slate-200 border border-gray-200 rounded-lg shadow">
        <h3 className="font-medium text-2xl text-blue-500 text-center mb-6">
          Login your account
        </h3>
        <hr className="h-px w-11/12 mx-auto my-8 bg-zinc-300 border-0" />
        <form onSubmit={handleLogin} className="px-10">
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
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-7 py-2 block w-full"
          >
            Login
          </button>
          <p className="mt-2 text-center">
            you haven't account?
            <Link to="/register" className="ms-2 text-blue-600 underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
