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

      <div className="bg-[#fcbf49] h-screen mx-auto ">
        <div className=" bg-[#1d3557] h-40  border-b fixed top-0  left-0 right-0  flex justify-evenly capitalize items-center">
          <div className="flex">
            <Link href="/">
              <Image
                src="/logo/ehassa.png"
                alt="cessa"
                width="80"
                height="80"
                className=" rounded-full  py-1 mt-3"
              />
            </Link>
            <Link href="/" className="cursor-poniter">
              <h2 className="mx-3  py-8 uppercase text-3xl text-white flex justify-start ">
                ehassa
              </h2>
            </Link>
          </div>

          {/*navnar*/}
          <div className="">
            <nav className="">
              <div className=" mx-5">
                <div className=" pt-8  text-2xl text-white flex-auto justify-end item-center">
                  <ul className="space-x-5 mb-4  flex justify-end items-end lg:justify-end hidden md:flex">
                    <Link href="/" className="cursor-pointer">
                      <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                        home
                      </li>
                    </Link>
                    <Link href="/about" className="cursor-pointer">
                      <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                        register
                      </li>
                    </Link>
                    {/*<Link href="/contact">
                      <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                        read projects
                      </li>
  </Link>*/}

                    <Link href="/login" className="cursor-pointer">
                      <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                        search
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </nav>

            {/*side navbar */}
            <div
              onClick={handleNav}
              className="flex items-center cursor-pointer md:hidden"
            >
              <AiOutlineMenu size={25} color={'#ffffff'} />
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
                        height={70}
                        width="70"
                        className="rounded-full"
                      />

                      <div className="">
                        <p className="text-3xl text-[#fcbf49] uppercase">
                          {' '}
                          ehassa
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={handleNav}
                      className="rounded-full shadow-lg shadow-white p-3 cursor-pointer"
                    >
                      <AiOutlineClose
                        size={40}
                        color={'#e63946'}
                        className="hover:bg-white rounded-full py-2"
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
          <div className="flex justify-center items-center">
            {/* {department.logo}*/}
            logo
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
