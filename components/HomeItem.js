import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import { myData } from '../utils/data';
import Layout from './Layout';

const HomeItem = ({ home }) => {
  return (
    <>
    
      <div className="mb-5 mt-[8rem] block rounded-lg border border-gray-100 shadow-md">
        <Link href={`/home/${home.slug}`} className="">
          <img
            src={home.image}
            alt={home.name}
            // height="100"
            // width="100"
            // object-Fit="cover"
            className="rounded shadow"
          />
        </Link>

        <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/home/${home.slug}`}>
            <h2 className="text-lg capitalize font-serif text-black/80">
              {home.name}
            </h2>
          </Link>
          <button className="bg-amber-300 py-2 px-4 outline-none hover:bg-amber-400 active:bg-amber-500">
            read more
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
