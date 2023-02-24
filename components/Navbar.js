import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { useState } from 'react';
import jsonData from '../utils/data.json';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const department = jsonData[context.params.slug];
  return {
    props: {
      department,
    },
  };
}

const Navbar = ({ department }) => {
  const [data, setData] = useState(jsonData);
  const { query } = useRouter();
  const { slug } = query;

  useEffect(() => {
    const dept = jsonData[slug];
    setData(dept);
  }, [jsonData]);

  {
    /*side Navbar*/
  }
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="shadow-md h-[4rem] fixed top-0 z-20 left-0 right-0  bg-yellow-100 flex justify-between">
        <div className="flex">
          <Link href="/">
            <Image
              src="/logo/ehassa.png"
              alt="cessa"
              width="300"
              height="300"
              className="rounded-full h-16 w-16 py-1 mx-5 mt-3 pb-4"
            />
          </Link>
          <div>
            <Link href="/" className="cursor-poniter">
              <h2 className="py-5 uppercase text-sm md:text-xl lg:text-3xl text-blue-900">
                school of engineering
              </h2>
            </Link>
          </div>
        </div>

        {/*navbar*/}
        <div className="">
          <nav className="py-4 mx-5 capitalize text-sm text-blue-900 space-x-10 flex justify-between md:text-xl lg:text-3xl ">
            <ul className=" hidden md:flex lg:gap-10 md:gap-5">
              <Link href="/" className="cursor-pointer">
                <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                  <h1 className="">home</h1>
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

              <Link href="/login" className="cursor-pointer">
                <li className="hover:bg-white py-1 px-2 rounded hover:underline duration-500">
                  sign in
                </li>
              </Link>
            </ul>
          </nav>

          {/*side navbar */}
          <div onClick={handleNav} className="flex cursor-pointer md:hidden">
            <AiOutlineMenu size={25} color={'#023e8a'} className="" />
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
                      src="/logo/ehassa.jpg"
                      alt="logo"
                      height={70}
                      width="70"
                      className="rounded-full"
                    />

                    <div className="">
                      <p className="text-sm text-yellow-600 uppercase">
                        schoolof engineering
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-md shadow-white p-2 cursor-pointer"
                  >
                    <AiOutlineClose
                      size={25}
                      color={'#e63946'}
                      className="hover:bg-white rounded-full py-1"
                    />
                  </div>
                </div>

                <div className="border-b border-gray-300 my-4">
                  <h2 className="flex justify-center container mx-auto w-[85%] md:w-[90%] py-4 text-yellow-600 ">
                    all nations university school of engineering
                  </h2>
                </div>
              </div>
              <div className="py-4 flex flex-col text-yellow-600">
                <ul className="uppercase text-sm">
                  <Link href="/" className="cursor-pointer ">
                    <li className="hover:bg-white py-4 px-2 rounded-md hover:underline duration-500">
                      home
                    </li>
                  </Link>

                  <Link href="/about" className="cursor-pointer">
                    <li className="hover:bg-white py-4 px-2 rounded hover:underline duration-500">
                      about
                    </li>
                  </Link>

                  <Link href="/contact">
                    <li className="hover:bg-white py-4 px-2 rounded hover:underline duration-500">
                      contact
                    </li>
                  </Link>

                  <Link href="/login" className="cursor-pointer">
                    <li className="hover:bg-white py-4 px-2 rounded hover:underline duration-500">
                      sign in
                    </li>
                  </Link>
                </ul>

                {/*Socila media icons*/}
                <div className="pt-40">
                  <p className="uppercase tracking-widest text-white">
                    let's connect{' '}
                  </p>

                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <FaLinkedinIn />
                    </div>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <AiOutlineMail />
                    </div>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <FaFacebook />
                    </div>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <FaInstagram />
                    </div>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      <FaTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
