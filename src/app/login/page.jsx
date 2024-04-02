import React from 'react';

const Page = () => {
  return (
    <>
      <form>
        <div className="flex flex-col items-center justify-center px-6 py-8 mt-32 mb-8 mx-auto lg:py-0 ">
          <div className="w-full bg-white rounded-lg shadow-md shadow-white border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login
              </p>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
                </label>
                <input
                  placeholder="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="email"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Mot de pass
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                />
              </div>
              <button
                className="w-full bg-[#25416e] hover:bg-[#25416eab] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
