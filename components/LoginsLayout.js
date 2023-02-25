import React from 'react';
import Layout from './Layout';
import styles from '../styles/LoginsLayout.module.css';

const LoginsLayout = ({ children }) => {
  return (
    <Layout>
      <div className="flex h-screen">
        <div className="m-auto bg-blue-900 rounded-md w-3/5 min-h-3/4 grid lg:grid-cols-2 ">
          <div className={styles.imgStyle}>
            <div className={styles.logoanimi}></div>
            <div className={styles.cessa}></div>
            <div className={styles.anumain}></div>
            <div className={styles.spe}></div>
            <div className={styles.ece}></div>
            <div className={styles.src}></div>
            <div className={styles.sbahs}></div>
            <div className={styles.besa}></div>
          </div>

          <div className="right flex flex-col justify-evenly">
            <div className="text-center py-10 ">{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginsLayout;
