import React from 'react';
import LoginsLayout from '../components/LoginsLayout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().required('First Name required'),
  // MiddleName: yup.string().required().optional(),
  lastName: yup.string().required('Last Name required'),
  studentId: yup.string().required('Student ID required'),
  semester: yup.number().required('Semester required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password required'),
  cpassword: yup
    .string()
    .required('Confirm Password')
    .oneOf([yup.ref('password')], 'Password must be match'),
});

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginsLayout>
      <Head>
        <title>Register</title>
      </Head>{' '}
      <section className="w-3/2 px-2 mx-auto flex flex-col gap-1 mb-10 md:w-3/4">
        <div className="font-bold border-b-2">
          <h1 className="w-3/4 mx-auto text-white text-sm md:text-xl capitalize ">
            register to login to your dashboard{' '}
          </h1>
        </div>

        {/*Form*/}

        <form
          onSubmit={handleSubmit(formSubmit)}
          action="/pages/api/register"
          method="POST"
          className="flex flex-col gap-3 pb-5 pt-5"
        >
          {/*first name*/}
          <div>
            <div className={styles.input_group}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={styles.input_text}
                {...register('firstName')}
              />

              <span className="icon flex items-center px-4">
                <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.firstName && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.firstName.message}
              </div>
            )}
          </div>

          {/*middle name*/}
          <div>
            <div className={styles.input_group}>
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                className={styles.input_text}
                {...register('middleName')}
              />

              <span className="icon flex items-center px-4">
                <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
          </div>

          {/*last name*/}
          <div>
            <div className={styles.input_group}>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={styles.input_text}
                {...register('lastName')}
              />

              <span className="icon flex items-center px-4">
                <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>

            {errors.lastName && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.lastName.message}
              </div>
            )}
          </div>

          {/*student ID*/}
          <div>
            <div className={styles.input_group}>
              <input
                type="text"
                name="student_id"
                placeholder="Sudent ID "
                className={styles.input_text}
                {...register('studentId')}
              />

              <span className="icon flex items-center px-4">
                <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.studentId && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.studentId.message}
              </div>
            )}
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

          {/*semester*/}
          <div>
            <div className={styles.input_group}>
              <input
                type="number"
                name="semester"
                placeholder="Semester"
                // value={''}
                max={15}
                min={1}
                className={styles.input_text}
                {...register('semester')}
              />

              <span className="icon flex items-center px-4">
                <HiAtSymbol size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.semester && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.semester.message}
              </div>
            )}
          </div>

          {/*password*/}
          <div>
            <div className={styles.input_group}>
              <input
                type={`${show.password ? 'text' : 'password'}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
                {...register('password')}
              />

              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>

            {errors.password && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.password.message}
              </div>
            )}
          </div>

          {/*cpassword*/}
          <div>
            <div className={styles.input_group}>
              <input
                type={`${show.cpassword ? 'text' : 'password'}`}
                name="cpassword"
                placeholder="Confirm Password"
                className={styles.input_text}
                {...register('cpassword')}
              />

              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiFingerPrint size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.cpassword && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.cpassword.message}
              </div>
            )}
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
