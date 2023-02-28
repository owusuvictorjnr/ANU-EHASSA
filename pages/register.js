import React from 'react';
import LoginsLayout from '../components/LoginsLayout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <LoginsLayout>
      <Head>
        <title>Register</title>
      </Head>{' '}
      <section className="w-3/2 px-2 mx-auto flex flex-col gap-1 mb-10 md:w-3/4 ">
        <div className="font-bold border-b-2">
          {/*
        <h1 className="text-white text-sm md:text-xl font-bold capitalize ">
          welcome to ANU school of enigeneering portal
        </h1>
      */}
          <h1 className="w-3/4 mx-auto text-white text-sm md:text-xl capitalize ">
            register to login to your dashboard{' '}
          </h1>
        </div>

        {/*Form*/}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 pb-5 pt-5"
        >
          <div className={styles.input_group}>
            <input
              type="text"
              // name="id"
              placeholder="First Name"
              className={styles.input_text}
              {...register('First name', { required: true, maxLength: 80 })}
            />

            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type="text"
              // name="lname"
              placeholder="Middle Name"
              className={styles.input_text}
              {...register('First name', { required: false, maxLength: 80 })}
            />

            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="text"
              // name="id"
              placeholder="Last Name"
              className={styles.input_text}
              {...register('Last name', { required: true, maxLength: 80 })}
            />

            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type="text"
              name="id"
              placeholder="Sudent ID "
              className={styles.input_text}
              {...register('Student ID', { required: true, maxLength: 80 })}
            />

            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
            </span>
          </div>

          {/*
        
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
        */}

          <div className={styles.input_group}>
            <input
              type="number "
              name="semester "
              placeholder="Semester"
              className={styles.input_text}
              {...register('Semester', {
                required: true,
                max: 12,
                maxLength: 12,
              })}
            />

            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} className="h-5 w-5 md:h-10 md:w-10" />
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
              <HiFingerPrint size={20} className="h-5 w-5 md:h-10 md:w-10" />
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
              <HiFingerPrint size={20} className="h-5 w-5 md:h-10 md:w-10" />
            </span>
          </div>

          {/*login buttons*/}

          <div className="">
            <button
              onSubmit={handleSubmit}
              type="submit"
              className={styles.button}
            >
              sign up
            </button>
          </div>
          {/*
          <input type="submit" />
        
        */}

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
