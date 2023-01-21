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

const HomeItem = () => {
  return <div>{Guest()}</div>;
};

// authorize user

function Guest() {
  return (
    <>
      <div className=" mx-auto">
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
                {/*Background Image*/}
                <Image
                  src="/images/main.jpg"
                  alt="background image"
                  height="150"
                  width="150"
                  className="w-full h-[40rem] blur-[0.5rem] object-cover absolute mix-blend-multiply"
                />
                // *530#
                <div className="flex justify-evenly">
                  <div className="text-3xl capitalize font-serif text-yellow-400 px-8 py-5 pt-20 ">
                    <div className="flex gap-2">
                      <Image
                        src="/logo/anumain.png"
                        alt="logo"
                        height="50"
                        width="50"
                        className="rounded-full bg-yellow-600 "
                      />
                      <div>all nations university</div>
                    </div>
                    <div className="grid grid-cols-1 lg:flex text-4xl">
                      <div className=""> about our</div> university
                    </div>
                  </div>

                  <div className=" grid grid-cols-1 sm:grid-cols-1  gap-10 px-8 py-5 pt-20 pb-8 lg:grid-cols">
                    <p className="text-red-500 ">
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
                    {/*<button>
                    read more <BsArrowRightShort className="" size={40} />
                  </button>*/}
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 w-full min-h-[30rem] ">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:space-x-40 px-5 pt-10">
                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif ">
                    <ImBooks size={80} className="text-yellow-500" />
                    <h2>education services</h2>
                    <div className="text-sm lowercase font-normal lg:text-2xl md:text-lg">
                      <p>
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                      <button
                        type=""
                        className="flex   hover:bg-yellow-600 rounded-md px-2 mb-4 capitalize"
                      >
                        learn more
                      </button>
                    </div>
                  </div>

                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif">
                    <HiGlobeEuropeAfrica
                      size={80}
                      className="text-yellow-500"
                    />
                    <p>international hubs</p>

                    <div className="text-sm lowercase font-normal lg:text-2xl md:text-lg">
                      <p>
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                      <button
                        type=""
                        className="flex   hover:bg-yellow-600 rounded-md px-2 mb-4 capitalize"
                      >
                        learn more
                      </button>
                    </div>
                  </div>

                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif">
                    <TbCertificate size={80} className="text-yellow-500" />
                    <p>bacherkor's and master's</p>

                    <div className="text-sm lowercase font-normal lg:text-2xl md:text-lg">
                      <p>
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                      <button
                        type=""
                        className="flex   hover:bg-yellow-600 rounded-md px-2 mb-4 capitalize"
                      >
                        learn more
                      </button>
                    </div>
                  </div>

                  <div className="px-5 py-5 font-bold text-2xl text-white capitalize font-serif">
                    <FaUniversity size={80} className="text-yellow-500" />
                    <p>university life</p>

                    <div className="text-sm lowercase font-normal lg:text-2xl md:text-lg">
                      <p>
                        We are one of the largest, most diverse universities in
                        the ghana with over 5,000 students in ghana, and a
                        further 1,000 studying across 20 countries for all
                        nations University.
                      </p>
                      <button
                        type=""
                        className="flex sm:text-yellow-300  hover:bg-yellow-600 rounded-md px-2 mb-4 capitalize"
                      >
                        learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*News & Updates*/}

          <div>
            <div className="mb-5 ">
              <div className="sticky top-[7rem] z-50">
                <SubHeaders label="News & Updates" />
                <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
              </div>

              <div className="min-h-[40rem]">
                <div>
                  <div className="lg:flex lg:justify-between grid grid-cols-1 ">
                    <div className="w-full mb-5  ">
                      <div className="py-2 px-[8rem] mt-10 w-full ">
                        <button
                          type=""
                          className="capitalize font-serif text-yellow-700 text-lg hover:text-blue-400"
                        >
                          read all news
                        </button>
                      </div>
                      <div className="capitalize font-serif px-[8rem]">
                        <Image
                          src="/images/sir.jpg"
                          alt="event picture"
                          height="40"
                          width="100"
                          className="rounded-md w-[20rem] h-[10rem]"
                        />
                      </div>

                      {/*Date and Time*/}
                      <div className="mt-5  text-gray-500 px-[8rem]">
                        <DateTime />
                      </div>

                      <div className="mt-5 px-[8rem]">
                        <Link
                          href="/"
                          className=" cursor-pointer text-yellow-600 hover:text-amber-300 text-3xl "
                        >
                          Professor Albert joint research <br /> on mobile money
                          in Tanzania
                        </Link>
                      </div>

                      {/*left content of the same div */}
                      <div className="min-h-[10rem] pt-10">
                        <div className="bg-gray-200 h-[10rem]">
                          TODO: Social media handles (swipper)
                        </div>
                      </div>
                    </div>

                    {/*Quick Links*/}
                    <div className="w-full mb-5 min-h-[10rem] bg-blue-900/90">
                      {/*<Image
                        src="/logo/ehassa.jpg"
                        alt="quick links"
                        height="150"
                        width="150"
                        className="bg-white w-full h-[10rem] blur-[0.5rem] object-cover absolute mix-blend-multiply "
                      />*/}
                      TODO: Background image
                      <div className="py-2 px-[8rem] mt-10 w-full ">
                        <div className="flex gap-5 text-white text-4xl capitalize font-bold ">
                          <HiOutlineLink size={30} className="" />
                          <h1>quick links </h1>
                        </div>

                        {/*Links*/}
                        <div className="mt-10 capitalize text-yellow-600 text-2xl ">
                          <div className="mt-10  hover:text-amber-500">
                            <Link href="/">alumni & donors</Link>
                          </div>
                          <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-10" />

                          <div className="mt-10  hover:text-amber-500">
                            <Link href="/">sports calendar</Link>
                          </div>
                          <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-10" />

                          <div className="mt-10  hover:text-amber-500">
                            <Link href="/">all ANU events</Link>
                          </div>
                          <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-10" />

                          <div className="mt-10  hover:text-amber-500">
                            <Link href="/">partnership & out reach</Link>
                          </div>
                          <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-10" />

                          <div className="mt-10  hover:text-amber-500">
                            <Link href="/">academic programs</Link>
                          </div>
                          <div className="w-[15rem] h-[0.1rem] bg-gray-200/30 mt-10" />

                          <div className="mt-10  hover:text-amber-500 mb-10 ">
                            <Link href="/">tuition and fees</Link>
                          </div>
                        </div>
                      </div>
                      {/*Apply*/}
                      <div className="bg-yellow-600 h-[10rem] pt-[2rem]">
                        <div className="flex gap-2 justify-center items-center">
                          <Link href="/">
                            <Image
                              src="/logo/anumain.png"
                              alt="logo"
                              height="50"
                              width="50"
                              className="rounded-full bg-yellow-600  mt-5 flex items-center"
                            />
                          </Link>
                          <div className="text-5xl capitalize font-bold text-white hover:text-blue-300">
                            <Link href="/">
                              apply to all nations university
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*campus tour*/}
          <div>
            <div className="sticky top-[7rem] z-50">
              <SubHeaders label="campus tour" />
              <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
            </div>

            <div className="bg-red-300 min-h-[40rem] mb-5">
              <div className="pt-5">
                <div>TODO: Video section</div>
                <p>
                  Take a tour in ANU and you will find the best university in
                  the country. The video will take you to every places in this
                  university.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
