import { ReactNode, useState } from 'react';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import { AppConfig } from '../utils/AppConfig';

type INavbarProps = {
  logo: ReactNode;
};

const Navbar = (props: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { navbars } = AppConfig;
  const styleForNormalNavbar: string = 'hover:text-white hover:bg-pink-100';
  const styleForNormalNavbarMobile: string = `${styleForNormalNavbar} text-black`;
  const styleForButtonNavbar: string = 'hover:bg-gray-500 bg-pink-300';
  const styleForButtonNavbarMobile: string = `${styleForButtonNavbar} text-white`;

  return (
    <div>
      <nav className=" w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">
                  <a>{props.logo}</a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navbars.map((item, i) => (
                    <LinkScroll
                      key={i}
                      activeClass={item.title}
                      to={item.router}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer text-white  px-3 py-2 rounded-md text-md font-semibold ${
                        item.isBottom
                          ? styleForButtonNavbar
                          : styleForNormalNavbar
                      }`}
                    >
                      {item.title}
                    </LinkScroll>
                  ))}
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-pink-100 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                {navbars.map((item, i) => (
                  <LinkScroll
                    key={i}
                    activeClass={item.title.toLowerCase()}
                    to={item.router}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${
                      item.isBottom
                        ? styleForButtonNavbarMobile
                        : styleForNormalNavbarMobile
                    }`}
                  >
                    {item.title}
                  </LinkScroll>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export { Navbar };
