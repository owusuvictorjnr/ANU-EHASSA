import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { useState } from 'react';
import Head from 'next/head';

const Student = () => {
  {
    /*side Navbar*/
  }
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section>
      <Head>
        <title>Student</title>
      </Head>

      <div className="h-screen mx-auto ">
        <div className=" bg-[#1d3557] h-16  border-b fixed top-0  left-0 right-0  flex justify-between capitalize items-center">
          <div className="flex items-center mx-10 ">
            <Link href="/">
              <Image
                src="/logo/ehassa.png"
                alt="cessa"
                width="300"
                height="300"
                className="rounded-full h-14 w-14 md:h-16 md:w-16"
              />
            </Link>
          </div>

          <div className="">
            <h1 className="flex text-center text-white text-sm md:text-xl lg:text-2xl">
              dashboard
            </h1>
          </div>

          {/*navnar*/}
          <div className="">
            <nav className="">
              <div className=" mx-5">
                <div className=" pt-8  text-2xl text-white flex-auto justify-end item-center">
                  <ul className="space-x-5 mb-6 px-5 mx-10 hidden md:flex">
                    <Link href="/" className="cursor-pointer">
                      <li className="hover:bg-[#ffb703] py-1 px-2 rounded md:text-xl lg:text-2xl hover:underline duration-500">
                        home
                      </li>
                    </Link>
                    <Link href="/about" className="cursor-pointer">
                      <li className="hover:bg-[#ffb703] py-1 px-2 md:text-xl lg:text-2xl rounded hover:underline duration-500">
                        register
                      </li>
                    </Link>
                    {/*<Link href="/contact">
                      <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                        read projects
                      </li>
  </Link>*/}

                    <Link href="/login" className="cursor-pointer">
                      <li className="hover:bg-[#ffb703] py-1 px-2 md:text-xl lg:text-2xl rounded hover:underline duration-500">
                        search
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </nav>

            {/*side navbar */}
            <div onClick={handleNav} className="cursor-pointer md:hidden">
              <AiOutlineMenu size={25} color={'#ffffff'} className="mb-10" />
            </div>

            <div
              className={
                nav ? 'bg-black/70 h-screen w-full top-0 left-0 fixed' : ''
              }
            >
              <div
                className={
                  nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-blue-900 p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
              >
                {/*side navbar image */}
                <div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center md:gap-[4rem] gap-5">
                      <Image
                        src="/logo/ehassa.png"
                        alt="logo"
                        height={300}
                        width="300"
                        className="rounded-full h-16 w-16"
                      />
                    </div>

                    <div
                      onClick={handleNav}
                      className="rounded-full shadow-lg p-3 cursor-pointer"
                    >
                      <AiOutlineClose
                        size={20}
                        color={'#e63946'}
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  <div className="border-b border-gray-300 my-4">
                    <h2 className="w-[85%] md:w-[90%] py-4 text-[#fcbf49] ">
                      all nations university school of engineering
                    </h2>
                  </div>
                </div>
                <div className="py-4 flex flex-col text-[#fcbf49]">
                  <ul className="uppercase">
                    <Link href="/" className="cursor-pointer">
                      <li className="hover:bg-white py-4 px-2 rounded-md hover:underline duration-500">
                        home
                      </li>
                    </Link>

                    <Link href="/about" className="cursor-pointer">
                      <li className="hover:bg-white py-4 px-2 rounded hover:underline duration-500">
                        register
                      </li>
                    </Link>

                    <Link href="/contact">
                      <li className="hover:bg-white py-4 px-2 rounded hover:underline duration-500">
                        read projects
                      </li>
                    </Link>

                    <Link href="/login" className="cursor-pointer">
                      <li className="hover:bg-white py-4 px-2 rounded hover:underline duration-500">
                        read lecture notes
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
