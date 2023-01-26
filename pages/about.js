import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className=" flex flex-col h-screen mt-[7rem]">
        <div className="flex  mx-auto top-[7rem] sticky">
          <h1 className="bg-blue-900 w-screen justify-center h-10 flex items-center mx-auto text-white uppercase text-4xl py-2">
            about ehassa
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
