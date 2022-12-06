import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
// import HomeItem from './HomeItem';

const Layout = ({ children, title }) => {
  return (
    <>
      <div>
        <Head>
          <title>{title ? title + 'ANU EHASSA' : 'ehassa-home'}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col justify-between min-h-screen">
          <header>{/* <Navbar /> */}</header>

          <main className="main">{children}</main>

          <footer className="">{/* <Footer /> */}</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
