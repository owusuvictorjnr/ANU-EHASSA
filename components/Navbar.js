import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="shadow-xl h-[7rem]  fixed top-0 z-20 left-0 right-0  bg-yellow-500  flex justify-evenly capitalize text-1xl">
        <div className="flex">
          <Link href="/home">
            <Image
              src="/logo/ehassa.jpg"
              alt="cessa"
              width="80"
              height="80"
              className="bg-yellow-500 rounded-full  py-1 mt-3"
            />
          </Link>
          <Link href="/" className="cursor-poniter">
            <h2 className="mx-3  py-8 uppercase text-3xl text-blue-900 font-serif flex justify-start ">
              ehassa
            </h2>
          </Link>
        </div>
        <nav className="">
          <div className=" mx-5">
            <div className=" pt-8  text-2xl text-blue-900 font-serif flex-auto justify-end item-center">
              <ul className="space-x-5 mb-4  flex justify-end items-end lg:justify-end ">
                <Link href="/" className="cursor-pointer">
                  <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                    home
                  </li>
                </Link>

                <Link href="/about" className="cursor-pointer">
                  <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                    about
                  </li>
                </Link>

                <Link href="/contact">
                  <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                    contact
                  </li>
                </Link>

                {/* <Link href="/departments" className="cursor-pointer">
                  <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                    departments
                  </li>
                </Link> */}

                <Link href="/login" className="cursor-pointer">
                  <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                    login
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
