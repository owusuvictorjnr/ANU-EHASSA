import React from "react";
import { myData } from "../../utils/data";
import Router, { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";

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
      <div className="mt-[7rem]">
        <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
          <h2> about cessa </h2>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className="bg-blue-500 min-h-[20rem]">
          TODO: loreVeniam culpa et proident reprehenderit sunt proident dolore
          eu nisi pariatur.
        </div>
      </div>
      <div>
        <div className="mt-[2rem]">
          {/* <div className="">
          <Link href="/">back home</Link>
        </div> */}

          <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
            <h2>executives</h2>
          </div>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className="divide-y-yellow-600" />
        <div className="grid  grid-cols-1 lg:grid-cols-5 md:grid-cols-2 mb-5 rounded-lg border border-gray-100 shadow md:pl-[9rem] pr-20 gap-5  sticky top-0">
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
        <div className="bg-yellow-600 py-2 px-4 block uppercase text-3xl tracking-wide font-serif  ">
          <h1>courses</h1>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className="grid md:grid-cols-4 md:gap-10">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b w-screen">
                <tr>
                  <th className="px-5 text-left">degree courses</th>
                  <th className="px-5 text-center">requirement</th>
                  <th className="px-5 text-right">diploma courses</th>
                  <th className="px-5 text-center">requirement</th>
                  {/* <th className="px-5 text-left">Name</th> */}
                </tr>
              </thead>
            </table>
            <tbody>
              <tr className="px-4">hello</tr>
              <td>hello</td>
            </tbody>
          </div>
        </div>
        {/* <div className="capitalize text-2xl font-serif flex ">
          <div className="flex space-x-10 gap-[13rem] ">
            <h3 className="bg-red-500 h-8  w-full">degree courses</h3>
            <div className="bg-black/70 h-[15rem] w-1  mb-2 py-48 " />

            <div className="flex gap-[7rem]">
              <h3 className="flex justify-center ">requirement</h3>
              <div className="bg-black/70 h-[15rem] w-1  mb-2 py-48 " />
            </div>

            <div className="flex gap-[7rem]">
              <h3 className="flex justify-center ">deploma courses</h3>
              <div className="bg-black/70 h-[15rem] w-1  mb-2 py-48 " />
            </div>

            <div className="flex gap-[7rem]">
              <h3 className="flex justify-center ">requirement</h3>
              <div className="bg-black/70 h-[15rem] w-1  mb-2 py-48 " />
            </div>
          </div>
        </div> */}
      </div>
      <div className="">
        <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
          <h2> programs for the semester </h2>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className="bg-blue-500 min-h-[20rem] mb-4">
          TODO: loreVeniam culpa et proident reprehenderit sunt proident dolore
          eu nisi pariatur.
        </div>
      </div>

      <div className="">
        <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
          <h2> associations </h2>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className=" min-h-[20rem] mb-4">
          <ul className="text-2xl font-serif px-4 py-8 block capitalize space-y-8 text-black/70 ">
            <li className="bg-blue-200/50">google developer student clubs</li>
            <li className="bg-blue-200">microsoft students academy</li>
            <li className="bg-blue-200/50">huawei ICT academy </li>
            <li className="bg-blue-200">ingressive for good</li>
            <li className="bg-blue-200/50">
              computer science and engineering association of ghana
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <div className="bg-yellow-600 py-2 px-4 uppercase text-3xl tracking-wide font-serif  ">
          <h2> contact us </h2>
        </div>
        <div className="bg-red-600 h-[0.3rem] sticky top-0 w-full divide-red-500" />
        <div className="bg-blue-500 min-h-[20rem] mb-4">
          TODO: loreVeniam culpa et proident reprehenderit sunt proident dolore
          eu nisi pariatur.
        </div>
      </div>
    </Layout>
  );
};
export default HomeScreen;
