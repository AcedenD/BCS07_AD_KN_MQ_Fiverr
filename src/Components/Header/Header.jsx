import React from "react";

const Header = () => {
  return (
    <div className=" border-b border-[#14ee96] py-2">
      <nav
        class="bg-white border-gray-200 
      "
      >
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a href="/" class="flex items-center">
            <span class="self-center text-4xl font-bold whitespace-nowrap text-gray-800">
              fiverr
              <span className=" text-[#1dbf73]">.</span>
            </span>
          </a>
          <div className="flex justify-center items-center gap-2">
            <div class="flex items-center md:order-2">
              <a
                href="#"
                class="text-gray-800 hover:bg-[#14ee96] focus:ring-4 focus:ring-gray-300 font-medium text-md px-3 py-2 md:px-4 md:py-1.5 mr-1 md:mr-2 border border-[#83f6c7] bg-[#83f6c7] ease-in duration-200 "
              >
                Login
              </a>
              <a
                href="#"
                class="text-gray-800 hover:bg-[#14ee96] focus:ring-4 focus:ring-gray-300 font-medium text-md px-3 py-2 md:px-2 md:py-1 mr-1 md:mr-2 border-double border-4 border-[#83f6c7] hover:border-[#14ee96] ease-in duration-200"
              >
                Sign up
              </a>
              <button
                data-collapse-toggle="mega-menu-icons"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu-icons"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              id="mega-menu-icons"
              class="items-end justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1dbf73] md:p-0 ease-in duration-200"
                    aria-current="page"
                  >
                    Fiverr Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1dbf73] md:p-0 ease-in duration-200"
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1dbf73] md:p-0 ease-in duration-200"
                  >
                    <i class="fa-solid fa-globe mr-1"></i>
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1dbf73] md:p-0 ease-in duration-200"
                  >
                    US$ USD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1dbf73] md:p-0 ease-in duration-200"
                  >
                    Become a Seller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
