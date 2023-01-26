import React from 'react';
import Layout from './Layout';
import styles from '../styles/LoginsLayout.module.css';

const LoginsLayout = ({ children }) => {
  return (
    <Layout>
      <div className="flex h-screen bg-gradient-to-br from-yellow-300 to-red-100 pt-36">
        <div className="m-auto bg-blue-900 rounded-md w-3/5 min-h-3/4 grid lg:grid-cols-2 ">
          <div className={styles.imgStyle}>
            <div className={styles.logoanimi}></div>
            <div className={styles.cessa}></div>
            <div className={styles.anumain}></div>
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
