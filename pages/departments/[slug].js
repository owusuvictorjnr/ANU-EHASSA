import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import SubHeaders from '../../components/SubHeaders';
import jsonData from '../../utils/data.json';

export async function getServerSideProps(context) {
  const department = jsonData[context.params.slug];
  return {
    props: {
      department,
    },
  };
}

const HomeScreen = ({ department }) => {
  const [data, setData] = useState(jsonData);
  const { query } = useRouter();
  const { slug } = query;
  // const myData = data[slug];
  // const departments = myData.homeScreens.find((x) => x.slug === slug);
  // if (!departments) {
  //   return <div>Department Not Found</div>;
  // }

  // props for departmental executives

  useEffect(() => {
    const dept = jsonData[slug];
    setData(dept);
  }, [jsonData]);

  // console.log(department.executives);

  return (
    <Layout title={department.name}>
      <div className="mt-[7rem]">
        <SubHeaders label="about cessa" />

        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className="bg-blue-500 min-h-[20rem]">
          TODO: loreVeniam culpa et proident reprehenderit sunt proident dolore
          eu nisi pariatur.
        </div>
      </div>

      <div className="">
        <SubHeaders label="executives" className="sticky top-52" />

        <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
        <div className="grid  grid-cols-1 lg:grid-cols-5 md:grid-cols-2 mb-5 rounded-lg border border-gray-100 shadow md:pl-[9rem] pr-20 gap-5">
          {department.executives.map((executive, _index) => (
            <div className="">
              <div className="">
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="rounded-md h-[10rem] w-[15rem] mb-5 mt-[3rem] block border border-gray-100 shadow-md z-100"
                />
                <div
                  key={_index.slug}
                  className="text-2xl text-black/80 font-serif capitalize"
                >
                  {executive.name}
                </div>
                <div className="text-1xl capitalize font-serif text-black/70 font-semibold pb-5">
                  <h1> {executive.position}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="md:mt-[2rem]">
            <SubHeaders label="courses" />
            <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
          </div>
          <div className="min-h-[20rem] bg-red-200 mb-5  p-4 order-4 ">
            <h1 className="">{department.courses}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
