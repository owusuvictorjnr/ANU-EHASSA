import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from '../../styles/Form.module.css';
import { useState } from 'react';
import Head from 'next/head';
import { BsSearch } from 'react-icons/bs';

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
          <div className="flex items-center px-5 ">
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

          <div className="flex justify-center">
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
                        <BsSearch />
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
        {/*Body starts here*/}
        <div className="pt-[4rem]">
          {/*upload or read project field*/}
          <div className="flex justify-center px-10 pt-10">
            <h1 className="text-sm text-[#001d3d] uppercase font-bold md:text-xl lg:text-2xl">
              upload or read projects
            </h1>
          </div>
          {/*grid*/}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {/*upload field*/}

            <div className=" bg-red-300 min-h-[40rem] flex justify-center px-5 lg:w-[50rem] mt-5">
              <div className="flex flex-col">
                <h1 className="flex justify-center text-sm text-[#003566] capitalize font-bold mt-5 md:text-xl lg:text-2xl">
                  upload project
                </h1>
                <form>
                  {/*name*/}
                  <div className="flex justify-center flex-col">
                    <label
                      htmlFor="username"
                      className="flex justify-center mt-3"
                    >
                      student name
                    </label>
                    <input
                      type="text"
                      name="username"
                      // value=""
                      placeholder="Full Name"
                      className="px-4 mt-2 py-2 flex justify-center rounded md:h-10"
                    />
                  </div>
                  {/*school*/}
                  <div className="flex justify-center flex-col">
                    <label
                      htmlFor="school"
                      className="flex justify-center mt-3"
                    >
                      school of
                    </label>
                    <select className="rounded px-3 py-2 mt-2 uppercase text-sm md:text-xl">
                      <option value="default">Select</option>
                      <option>Business</option>
                      <option>Engineering & Allied Science</option>
                    </select>
                  </div>
                  {/*eng department*/}
                  <div className="flex justify-center flex-col">
                    <label
                      htmlFor="department"
                      className="flex justify-center mt-3"
                    >
                      department
                    </label>
                    <select className="rounded px-3 py-2 mt-2 uppercase text-sm md:text-xl">
                      <option value="default">Select</option>
                      <option>Computer Science & Engineering</option>
                      <option>Biomedical & Engineering</option>
                      <option>Nursing</option>
                      <option>Oil & Gas</option>
                      <option>Electronic & Communication</option>

                      <option value="" disabled>
                        -----------------------------------------
                      </option>
                      <option>Finance</option>
                      <option>Economics</option>
                      <option>HR</option>
                      <option>Banking</option>
                      <option>Resource</option>
                    </select>
                  </div>
                  {/*file upload*/}
                  <div className="upload">
                    <label htmlFor="" className="flex justify-center mt-3">
                      upload file
                    </label>
                    <input
                      type="file"
                      name="file"
                      // value=""
                      className="mx-5 px-3 mt-2 py-2 flex justify-center rounded md:h-10"
                    />
                  </div>
                  {/*date*/}
                  <div className="flex justify-center flex-col">
                    <label htmlFor="date" className="flex justify-center mt-3">
                      date
                    </label>
                    <input
                      type="datetime-local"
                      name="uploadting-time"
                      value=""
                      className="px-4 mt-2 py-2 flex justify-center rounded md:h-10"
                    />
                  </div>
                  {/*supervisor*/}
                  <div className="flex justify-center flex-col">
                    <label
                      htmlFor="supervisor"
                      className="flex justify-center mt-3"
                    >
                      supervisor
                    </label>
                    <input
                      type="text"
                      name="text"
                      // value=""
                      placeholder="Full Name"
                      className="px-4 mt-2 py-2 flex justify-center rounded md:h-10"
                    />
                  </div>

                  {/*student telphone num*/}
                  <div className="flex justify-center flex-col">
                    <label htmlFor="phone" className="flex justify-center mt-3">
                      your telephone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      // value=""
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      min={10}
                      max={12}
                      // placeholder="Phone number"
                      className="px-4 mt-2 py-2 flex justify-center rounded md:h-10"
                    />
                  </div>

                  {/*submit button*/}
                  <div className="pt-5">
                    <button type="submit" className={styles.button}>
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>read project</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
