import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Student = () => {
  return (
    <section>
      <Head>
        <title>Student</title>
      </Head>
      <div className="bg-[#fcbf49] h-screen mx-auto ">
        <div className="bg-[#1d3557] h-40 shadow-md border-b">
          <div className="flex justify-center ">
            <Image
              src="/logo/ehassa.jpg"
              alt="logo"
              height={100}
              width="100"
              className="rounded-full pt-10"
            />
          </div>

          <nav className="flex justify-end items-end">
            <ul className="mx-auto px-5 py-2 flex ">
              <li>home</li>

              <li>register</li>

              <li>read projects</li>

              <li>read lecture notes</li>

              <li>search</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Student;
