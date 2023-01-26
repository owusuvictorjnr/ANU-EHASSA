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

  useEffect(() => {
    const dept = jsonData[slug];
    setData(dept);
  }, [jsonData]);

  // console.log(department.executives);

  return (
    <Layout title={department.name}>
      <div>
        <div className="mt-[7rem]">
          <SubHeaders label="about " programme={department.programmes} />

          <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
          <div className="bg-blue-500 min-h-[20rem]">
            TODO: About the department.
          </div>
        </div>

        <div className="">
          <SubHeaders label="executives" className="sticky top-52" />

          <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
          <div className="grid  grid-cols-1 lg:grid-cols-4 px-12 md:grid-cols-2 mb-5 rounded-lg border border-gray-100 shadow md:pl-[9rem] pr-20 gap-5">
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
                    className="text-2xl text-black/80 capitalize"
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

        {/*Associations*/}
        <div className="">
          <div className="md:mt-[2rem]">
            <SubHeaders label="associations" />
            <div className="bg-red-600 h-[0.2rem]  w-full sh-underline1" />
          </div>
          <div className="min-h-[20rem] bg-red-200 mb-5  p-4 order-4 ">
            <div className="flex flex-col">
              {department.associations}
              {/*  <div className='text-3xl capitalize '>
             <p>google developer student clubs</p>
                <p>huawei ICT academy</p>
                <p>microsoft student academy</p>
                <p>ingressive for good</p>
                <p>computer science & engineering association of ghana</p>
            </div>*/}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
