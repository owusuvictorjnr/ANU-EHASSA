import React from 'react';
import { myData } from '../../utils/data';
import Router, { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

const HomeScreen = () => {
  const router = useRouter();

  const { query } = useRouter();
  const { slug } = query;
  const departments = myData.homeScreens.find((x) => x.slug === slug);
  if (!departments) {
    return <div>Department Not Found</div>;
  }

  // props for departmental executives

  return (
    <Layout title={departments.name}>
      <div>
        <div className="mt-[7rem]">
          {/* <div className="">
          <Link href="/">back home</Link>
        </div> */}

          <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
            <h2>executives</h2>
          </div>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className="divide-y-yellow-600" />
        <div
          className="grid  grid-cols-1 lg:grid-cols-5 md:grid-cols-2 mb-5 
      rounded-lg border border-gray-100 shadow md:pl-[9rem] pr-20 gap-5  sticky top-0
      "
        >
          {myData.depExe.map((departmentExe, _index) => {
            return (
              <div className="">
                <div className="">
                  <img
                    src={departmentExe.image}
                    alt={departmentExe.name}
                    className="rounded-md h-[10rem] w-[15rem] mb-5 mt-[3rem] block border border-gray-100 shadow-md "
                  />
                  <div
                    key={_index.slug}
                    className="text-2xl text-black/80 font-serif capitalize"
                  >
                    {departmentExe.name}
                  </div>
                  <div className="text-1xl capitalize font-serif text-black/70 font-semibold">
                    <h1> {departmentExe.position}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" mt-[2rem] min-h-[20rem]">
        <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
          <h1>courses</h1>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />

        <div className="capitalize text-2xl font-serif">
          <h3 className="flex justify-between px-5">
            degree courses 
            
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
