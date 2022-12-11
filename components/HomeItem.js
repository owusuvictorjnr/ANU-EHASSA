import React from 'react';
import Link from 'next/link';
import { myData } from '../utils/data';

const HomeItem = () => {
  return (
    <div className="mt-[7rem]">
      <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
        <h3> our departments</h3>

        {/* h-[calc(100vh_-_144px)] */}
      </div>
      <div className="bg-blue-500 h-[0.1rem] sticky top-0 w-full divide-red-500" />
      <div className="divide-y-yellow-600" />
      <div
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mb-5 mt-[1rem] rounded-lg border border-gray-100 shadow px-4">
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
    </div>
  );
};

export default HomeItem;

// <>

//   <div className="mb-5 mt-[8rem] block rounded-lg border border-gray-100 shadow-md">
//     <Link href={`/home/${home.slug}`} className="">
//       <img
//         src={home.image}
//         alt={home.name}
//         // height="100"
//         // width="100"
//         // object-Fit="cover"
//         className="rounded shadow"
//       />
//     </Link>

//     <div className="flex flex-col items-center justify-center p-5">
//       <Link href={`/home/${home.slug}`}>
//         <h2 className="text-lg capitalize font-serif text-black/80">
//           {home.name}
//         </h2>
//       </Link>
//       <button className="bg-amber-300 py-2 px-4 outline-none hover:bg-amber-400 active:bg-amber-500">
//         read more
//       </button>
//     </div>
//   </div>
// </>
