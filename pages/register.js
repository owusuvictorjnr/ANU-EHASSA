import React from 'react';
import LoginsLayout from '../components/LoginsLayout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  return (
    <LoginsLayout>
      <Head>
        <title>Register</title>
      </Head>{' '}
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-white text-2xl font-bold py-10 capitalize ">
            welcome to ANU school of enigeneering portal
          </h1>
          <p className="w-3/4 mx-auto text-white capitalize ">
            register to login to your dashboard{' '}
          </p>
        </div>

        {/*Form*/}

        <div className={styles.input_group}>
          <input
            type="id"
            name="id"
            placeholder="Sudent ID "
            className={styles.input_text}
          />

          <span className="icon flex items-center px-4">
            <HiOutlineUser size={25} />
          </span>
        </div>

        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email "
              name="email "
              placeholder=" School Email"
              className={styles.input_text}
            />

            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type={`${show.password ? 'text' : 'password'}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/*login buttons*/}
          <div className="">
            <button type="submit" className={styles.button}>
              sign up
            </button>
          </div>

          {/*bottom*/}
          <p className="text-center text-white">
            have an account?{' '}
            <Link href={'/login'} className="text-blue-700 capitalize">
              sign in
            </Link>
          </p>
        </form>
      </section>
    </LoginsLayout>
  );
};

export default Register;
