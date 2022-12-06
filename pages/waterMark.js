import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const WaterMark = () => {
  return (
    <Layout>
      <div className="mt-[8rem]">
        <Image
          src="/logo/ehassa.jpg"
          alt="ehassa"
          width="100"
          height="100"
          objectFit="responsive"
          className="h-[25rem] mx-4 w-[25rem] rounded-full  ml-[35%] mr-[25%] mt-[10rem] fixed top-0 z-20 left-0 right-0  blur-sm bottom-0 "
        />
        {/* <div className="mt-[20rem] bg-red-500">WaterMark</div> */}
      </div>
    </Layout>
  );
};

export default WaterMark;
