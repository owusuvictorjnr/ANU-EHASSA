import Link from 'next/link';
import React from 'react';

import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className="bg-yellow-500 ">
        <div className="grid grid-cols-2  gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              All Nations University
            </h2>
            <ul className="text-blue-900 ">
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Careers
                </Link>
              </li>

              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Help center
            </h2>
            <ul className="text-blue-900 ">
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  LiknkedIn
                </Link>
              </li>

              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul className="text-blue-900">
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Download
            </h2>
            <ul className="text-blue-900">
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  ANU CGPA On Playstore
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  ANU CGPA On Appstore
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 px-4 bg-blue-900  md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            &copy; 2022 <Link href="https://vitechsolutions.com/">Vitech Solutions™</Link>.
            All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <BsFacebook size={25} />
            </Link>

            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <BsTwitter size={25} />
            </Link>

            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <AiOutlineGithub size={25} />
            </Link>

            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <AiOutlineLinkedin size={25} />
            </Link>

            {/* <Link href="">
              <a className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <BsFacebook size={25} />
              </a>
            </Link> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
