import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginsLayout from '../components/LoginsLayout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { useState } from 'react';

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <LoginsLayout>
        <Head>
          <title>Login</title>
        </Head>
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <p className="w-3/4 mx-auto text-white capitalize">
              login to your dashboard{' '}
            </p>
          </div>

          {/*Form*/}

          <form action="/pages/api/login" className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
                type="text"
                name="studentID"
                placeholder="Sudent ID"
                className={styles.input_text}
              />

              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type={`${show ? 'text' : 'password'}`}
                name="password"
                placeholder="Your super secret password"
                className={styles.input_text}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25} />
              </span>{' '}
            </div>
            {/*password reset*/}
            <div className="flex justify-end">
              <Link
                href="/"
                className="text-blue-500 hover:text-white hover:px-2 hover:rounded-md "
              >
                Forgot password?
              </Link>
            </div>
            {/*login buttons*/}
            {/* <div className="">
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>*/}
            <div className={styles.button}>
              <Link href={'/dashboard/student'} className={styles.button}>
                Login
              </Link>
            </div>

            {/*bottom*/}
            <p className="text-center text-white">
              don't have an account yet?{' '}
              <Link href={'/register'} className="text-blue-300 capitalize">
                sign up
              </Link>
            </p>
          </form>
        </section>
      </LoginsLayout>
    </>
  );
};

export default Login;
