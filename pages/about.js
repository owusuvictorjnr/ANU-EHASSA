import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className=" flex flex-col h-screen">
          <div className="flex mx-auto top-[4rem] fixed">
            <h1 className="bg-blue-900 w-screen justify-center h-10 flex items-center mx-auto ">
              <p className="text-white uppercase text-sm md:text-xl lg:text-2xl">
                about school of engineering and allied science
              </p>
            </h1>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default AboutPage;
