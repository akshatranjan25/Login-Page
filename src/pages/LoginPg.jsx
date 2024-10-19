import React from "react";

const LoginPg = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl w-full shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="md:w-1/2">
          <img
            className="h-screen w-screen"//<a href="https://ibb.co/60XdV3r"><img src="https://i.ibb.co/k2mdkR5/login-Final.png" alt="login-Final" border="0" /></a>
            src="https://i.ibb.co/k2mdkR5/login-Final.png"
            alt="Person with laptop"
          />
          
        </div>
        
        {/* Right Section */}
        <div className="md:w-1/2 p-8 font-sans text-left">
          <form className="space-y-6">
            <div>
            <h2 className="text-3xl font-bold mb-1">Welcome Back</h2>
            <p className=" mb-6">Sign in to continue your progress</p>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email / Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <span className="ml-2 block text-sm text-gray-900">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center font-sans">
            <p className="text-sm">OR LOGIN WITH</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="#" className="text-gray-500 w-8 h-8 border-2 border-gray-300 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoTU2roNal6tjTGLyJZqgQpBhjmKtmHrsEA&s" alt="Instagram"  className="rounded-full"/>
              </a>
              <a href="#" className="text-gray-500 w-8 h-8 border-2 border-gray-300 rounded-full">
                <img src="https://i.pinimg.com/originals/0c/12/d3/0c12d348d3b82d9efbcc6a4fcd667f5c.png" alt="Facebook"  className="rounded-full"/>
              </a>
              <a href="#" className="text-gray-500 w-8 h-8 border-2 border-gray-300 rounded-full">
                <img src="https://developers.google.com/static/business-communications/images/logo-guidelines/do-logo-circle.png" alt="Google"  className="rounded-full"/>
              </a>
              <a href="#" className="text-gray-500 w-8 h-8 border-2 border-gray-300 rounded-full">
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter"  className="rounded-full" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Register Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPg;
