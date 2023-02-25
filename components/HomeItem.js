import React from 'react';
import Link from 'next/link';
import { myData } from '../utils/data';
import SubHeaders from './SubHeaders';
import Image from 'next/image';
import { ImBooks } from 'react-icons/im';
import { HiGlobeEuropeAfrica } from 'react-icons/hi2';
import { TbCertificate } from 'react-icons/tb';
import { FaUniversity } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import DateTime from './DateTime';
import Layout from './Layout';
import Navbar from './Navbar';
import Footer from './Footer';

const HomeItem = () => {
  return <div>{Guest()}</div>;
};

// authorize user

function Guest() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="mt-[4rem]">
          <div className="sticky top-[1rem] md:top-[2rem] text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
            <SubHeaders
              label="welcome to all nations university school of engineering
          koforidua ghana west africa"
            />
            <div className="bg-blue-500 h-[0.1rem] sticky top-[4rem] w-full divide-red-500 sh-underline" />
            <div className="divide-y-yellow-600" />
          </div>

          {/*



      
        <div className=" uppercase flex justify-center text-center text-sm md:text-xl lg:text-3xl text-blue-900 sticky top-[7rem]">
          <div className="sticky top-[7rem]">
            <SubHeaders
              
              className=""
            />
            <div className="bg-blue-500 h-[0.1rem]  divide-red-500 sh-underline" />
          </div>
        </div>




        
      */}
          <div className=" min-h-[20rem]">
            <div>
              <Image
                src={'/images/main.jpg'}
                alt={'/'}
                width={500}
                height={500}
                className="w-full rounded-md  mx-auto flex justify-center px-5 pb-5 h-[20rem] md:w-full md:h-[30rem] lg:h-[40rem]"
              />
            </div>
          </div>
          <div className="sticky top-[4rem] text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
            {/*Departments*/}
            <SubHeaders label="our departments" />
            <div className="bg-blue-500 h-[0.1rem] sticky top-[4rem] w-full divide-red-500 sh-underline" />
            <div className="divide-y-yellow-600" />
          </div>
          {/* h-[calc(100vh_-_144px)] */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mb-5 mt-[1rem] rounded-lg border border-gray-100 shadow px-4 pb-5 mx-auto lg:pl-[7rem]">
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
            <div className="sticky top-[4rem] z-50 text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
              <SubHeaders label="about" />
              <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
            </div>
            <div className="mb-5">
              <div className=" min-h-[30rem] relative">
                <div className="">
                  <div className="flex gap-2 pt-10 px-10 lg:mt-10">
                    <Image
                      src="/logo/anumain.png"
                      alt="logo"
                      height="50"
                      width="50"
                      className="rounded-full bg-yellow-600"
                    />
                    <div className="pt-3 capitalize text-blue-700 text-sm md:text-lg">
                      all nations university
                    </div>
                  </div>
                  <div className="pt-10 flex justify-center capitalize text-sm text-blue-800 font-bold md:text-2xl lg:text-3xl">
                    about the school of engineering and allied science
                  </div>
                </div>

                <div className="pt-5 container mx-auto px-5">
                  <p className="text-sm text-blue-300 md:text-xl lg:px-[10rem]">
                    We are one of the largest, most diverse universities in the
                    ghana with over 5,000 students in ghana, and a further 1,000
                    studying across 20 countries for all nations University. all
                    nations University was established by dr. donkor in 1983 for
                    the public benefit and it is recognized globally. Throughout
                    our great history, all nations has offered access to a wide
                    range of academic opportunities. As a world leader in higher
                    education, the University has pioneered change in the
                    sector.
                  </p>
                  <div className="pt-2 flex justify-center ">
                    <button
                      type="submit"
                      className="bg-[#ee6c4d] py-2 px-5 rounded-full capitalize text-sm text-white md:text-xl hover:bg-gray-100 hover:text-blue-600 border-2 border-amber-200 duration-500"
                    >
                      read more
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full min-h-[30rem]">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                  <div className="px-5 py-5">
                    <div className="flex gap-2">
                      <ImBooks size={40} className="text-yellow-500" />
                      <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                        education services
                      </h2>
                    </div>
                    <div className="">
                      <p className="pt-2 text-sm text-blue-200 md:text-lg lg:text-2xl">
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                    </div>
                    <button
                      type=""
                      className="bg-[#ee6c4d] py-2 px-5 mt-3 rounded-full capitalize text-sm text-white md:text-xl hover:bg-gray-100 hover:text-blue-600 border-2 border-amber-200 duration-500"
                    >
                      learn more
                    </button>
                  </div>

                  <div className="px-5 py-5">
                    <div className="flex gap-2">
                      <HiGlobeEuropeAfrica
                        size={40}
                        className="text-yellow-500"
                      />
                      <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                        education services
                      </h2>
                    </div>
                    <div className="">
                      <p className="pt-2 text-sm text-blue-200 md:text-lg lg:text-2xl">
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                    </div>
                    <button
                      type=""
                      className="bg-[#ee6c4d] py-2 px-5 mt-3 rounded-full capitalize text-sm text-white md:text-xl hover:bg-gray-100 hover:text-blue-600 border-2 border-amber-200 duration-500"
                    >
                      learn more
                    </button>
                  </div>

                  <div className="px-5 py-5">
                    <div className="flex gap-2">
                      <TbCertificate size={40} className="text-yellow-500" />
                      <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                        education services
                      </h2>
                    </div>
                    <div className="">
                      <p className="pt-2 text-sm text-blue-200 md:text-lg lg:text-2xl">
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                    </div>
                    <button
                      type=""
                      className="bg-[#ee6c4d] py-2 px-5 mt-3 rounded-full capitalize text-sm text-white md:text-xl hover:bg-gray-100 hover:text-blue-600 border-2 border-amber-200 duration-500"
                    >
                      learn more
                    </button>
                  </div>

                  <div className="px-5 py-5">
                    <div className="flex gap-2">
                      <FaUniversity size={40} className="text-yellow-500" />
                      <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize lg:text-3xl md:text-xl">
                        education services
                      </h2>
                    </div>
                    <div className="">
                      <p className="pt-2 text-sm text-blue-200 md:text-lg lg:text-2xl">
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                    </div>
                    <button
                      type=""
                      className="bg-[#ee6c4d] py-2 px-5 mt-3 rounded-full capitalize text-sm text-white md:text-xl hover:bg-gray-100 hover:text-blue-600 border-2 border-amber-200 duration-500"
                    >
                      learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*News & Updates*/}
          <div>
            <div className="mb-5 ">
              <div className="sticky top-[4rem] text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
                <SubHeaders label="News & Updates" />
                <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
              </div>

              <div className="min-h-[20rem]">
                <div className="flex justify-center pt-10">
                  <button
                    type="submit"
                    className="capitalize text-blue-800 text-sm md:text-xl lg:text-3xl hover:text-blue-400"
                  >
                    read all news
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <Image
                        src="/images/sir.jpg"
                        alt="event picture"
                        height="300"
                        width="300"
                        className="rounded-md w-[20rem] h-[10rem] "
                      />
                    </div>
                    {/*Date and Time*/}
                    <div className="mt-5  text-gray-500 text-center">
                      <DateTime />
                    </div>
                    <div className="mt-5">
                      <Link href="/" className="cursor-pointer">
                        <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                          Professor Albert joint research on mobile money in
                          Tanzania
                        </p>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center pt-5 md:pt-0">
                    <div className="flex justify-center">
                      <Image
                        src="/images/sir.jpg"
                        alt="event picture"
                        height="300"
                        width="300"
                        className="rounded-md w-[20rem] h-[10rem] "
                      />
                    </div>
                    {/*Date and Time*/}
                    <div className="mt-5  text-gray-500 text-center">
                      <DateTime />
                    </div>
                    <div className="mt-5">
                      <Link href="/" className="cursor-pointer">
                        <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                          Professor Albert joint research on mobile money in
                          Tanzania
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/*left content of the same div */}
                <div className="min-h-[5rem] pt-10">
                  <div className="bg-gray-200 h-[5rem]">
                    TODO: Social media handles (swipper)
                  </div>
                </div>

                {/*Quick Links*/}
                <div className="w-full mb-5 min-h-[10rem]">
                  <div className="py-2 px-[8rem] mt-10 w-full ">
                    <div className="flex justify-center gap-2 ">
                      <HiOutlineLink
                        className="mt-1 text-sm md:text-2xl"
                        color="white"
                      />
                      <h1 className="text-blue-800 capitalize font-bold text-sm md:text-2xl lg:text-3xl">
                        quick links
                      </h1>
                    </div>

                    {/*Links*/}
                    <div className="mt-5 capitalize text-blue-200 text-sm flex flex-col text-center md:text-xl lg:text-3xl ">
                      <div className="mt-5  hover:text-amber-500">
                        <Link href="/">alumni & donors</Link>
                      </div>
                      <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-5 flex md:mx-[15rem] lg:mx-[44rem]" />

                      <div className="mt-5  hover:text-amber-500">
                        <Link href="/">sports calendar</Link>
                      </div>
                      <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-5 md:mx-[15rem] lg:mx-[44rem]" />

                      <div className="mt-5  hover:text-amber-500">
                        <Link href="/">all ANU events</Link>
                      </div>
                      <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-5 md:mx-[15rem] lg:mx-[44rem]" />

                      <div className="mt-5  hover:text-amber-500">
                        <Link href="/">partnership & out reach</Link>
                      </div>
                      <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-5 md:mx-[15rem] lg:mx-[44rem]" />

                      <div className="mt-5  hover:text-amber-500">
                        <Link href="/">academic programs</Link>
                      </div>
                      <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-5 md:mx-[15rem] lg:mx-[44rem]" />

                      <div className="mt-5 hover:text-amber-500 mb-10 ">
                        <Link href="/">tuition and fees</Link>
                      </div>
                    </div>
                  </div>
                  {/*Apply*/}
                  <div className="bg-yellow-600 h-[5rem">
                    <div className="flex gap-2 justify-center items-center">
                      <Link href="/">
                        <Image
                          src="/logo/anulogo.png"
                          alt="logo"
                          height="100"
                          width="100"
                          className="rounded-full h-10 w-10 flex items-center"
                        />
                      </Link>
                      <div className="text-sm capitalize font-bold text-white hover:text-blue-300 md:text-xl lg:text-3xl">
                        <Link href="/">apply to all nations university</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*campus tour*/}
          <div>
            <div className="sticky top-[4rem] text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
              <SubHeaders label="campus tour" />
              <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
            </div>

            <div className="min-h-[40rem] mb-5">
              <div className="pt-5">
                <div>TODO: Video section</div>
                <p className="mx-10">
                  Take a tour in ANU and you will find the best university in
                  the country. The video will take you to every places in this
                  university.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

{
  /*Authorize user*/
}

function User() {
  <Layout className="text-center">
    <h3 className="mt-[10rem]">Authorize user homepage</h3>
    <div>
      <button type="submit">sign out</button>
    </div>
  </Layout>;
}

export default HomeItem;
