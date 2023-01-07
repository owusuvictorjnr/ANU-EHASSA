import React from 'react';
import Link from 'next/link';
import { myData } from '../utils/data';
import SubHeaders from './SubHeaders';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';
import { HiGlobeEuropeAfrica } from 'react-icons/hi2';
import { TbCertificate } from 'react-icons/tb';
import { FaUniversity } from 'react-icons/fa';

const HomeItem = () => {
  return (
    <>
      <div className="mt-[7rem]">
        <div className="">
          <div className="bg-yellow-600  px-4  uppercase text-3xl tracking-wide font-serif  flex justify-center text-blue-900 sticky top-[7rem]">
            <div className="sticky top-[14rem]">
              <SubHeaders label="welcome to all nations university school of engineering koforidua ghana west africa" />
              <div className="bg-blue-500 h-[0.1rem]  divide-red-500 sh-underline" />
            </div>
          </div>

          <div className=" min-h-[50rem] p-2 ">TODO: Landing Page</div>
        </div>
        <div className="sticky top-[7rem]">
          {/*Departments*/}
          <SubHeaders label="our departments" />
          <div className="bg-blue-500 h-[0.1rem] sticky top-0 w-full divide-red-500 sh-underline" />
          <div className="divide-y-yellow-600" />
        </div>

        {/* h-[calc(100vh_-_144px)] */}

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mb-5 mt-[1rem] rounded-lg border border-gray-100 shadow px-4 pb-5">
          {myData.homeScreens.map((departments, _index) => {
            return (
              <div className="">
                <Link href={`/departments/${departments.slug}`} className="">
                  <img
                    src={departments.image}
                    alt={departments.name}
                    className="rounded-md   h-[20rem] w-[30rem] mb-5 mt-[3rem] block border border-gray-100 shadow-md "
                  />
                  <div
                    key={_index.slug}
                    className="text-2xl text-black/80 font-serif capitalize"
                  >
                    {departments.name}
                  </div>
                </Link>
                <button className="bg-amber-300 rounded-md py-2 px-4 outline-none hover:bg-amber-400 active:bg-amber-500 text-1xl text-black/60 font-serif font-semibold capitalize">
                  read more
                </button>
              </div>
            );
          })}
        </div>

        {/*About ANU*/}
        <div>
          <div className="sticky top-[7rem] z-50">
            <SubHeaders label="about" />
            <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
          </div>
          <div className="mb-5 ">
            <div className=" min-h-[40rem] relative">
              <Image
                src="/images/main.jpg"
                alt="background image"
                height="150"
                width="150"
                className="w-full h-[40rem] blur-[0.5rem] object-cover absolute mix-blend-multiply"
              />
              <div className="text-3xl capitalize font-serif text-yellow-400 px-8 py-5 pt-20 space-y-5 space-x-10">
                <div className="flex gap-2">
                  <Image
                    src="/logo/anumain.png"
                    alt="logo"
                    height="50"
                    width="50"
                    className="rounded-full bg-yellow-600 "
                  />
                  <em>all nations </em> university
                </div>
                <div className="grid grid-cols-1 lg:flex text-4xl">
                  <span className=""> about our</span> university
                </div>
                <div className="">
                  <div className=" grid grid-cols-1 sm:grid-cols-2  gap-10 pt-2 pb-8 ">
                    <p className="text-red-500 text-left flex justify-">
                      <span className="text-left">
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University. all nations University was
                        established by dr. donkor in 1983 for the public benefit
                        and it is recognized globally. Throughout our great
                        history, all nations has offered access to a wide range
                        of academic opportunities. As a world leader in higher
                        education, the University has pioneered change in the
                        sector.
                      </span>
                    </p>
                  </div>
                  <div>
                    <button>
                      read more <BsArrowRightShort className="" size={40} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 w-full min-h-[30rem] ">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 lg:space-x-40 px-5 pt-10">
                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif ">
                    <ImBooks size={80} className="text-yellow-500" />
                    <p>education services</p>
                  </div>

                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif">
                    <HiGlobeEuropeAfrica
                      size={80}
                      className="text-yellow-500"
                    />
                    <p>international hubs</p>
                  </div>

                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif">
                    <TbCertificate size={80} className="text-yellow-500" />
                    <p>bacherkor's and master's</p>
                  </div>

                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif">
                    <FaUniversity size={80} className="text-yellow-500" />
                    <p>university life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
