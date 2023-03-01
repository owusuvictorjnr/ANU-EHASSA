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
  FirstName: yup.string().required('First Name required'),
  // MiddleName: yup.string().required().optional(),
  LastName: yup.string().required('Last Name required'),
  StudentId: yup.string().required('Student ID required'),
  Semester: yup.number().required(),
  Password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password required'),
  Cpassword: yup
    .string()
    .required('Confirm Password')
    .oneOf([yup.ref('Password')], 'Password must be match'),
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
          onSubmit={handleSubmit(formSubmit)}
          action="/api/register"
          method="post"
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
                {...register('FirstName')}
              />

              <span className="icon flex items-center px-4">
                <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.FirstName && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.FirstName.message}
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
                {...register('MiddleName')}
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
                {...register('LastName', { required: true })}
              />

              <span className="icon flex items-center px-4">
                <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>

            {errors.LastName && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.LastName.message}
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
                {...register('StudentId')}
              />

              <span className="icon flex items-center px-4">
                <HiOutlineUser size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.StudentId && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.StudentId.message}
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
                {...register('Semester')}
              />

              <span className="icon flex items-center px-4">
                <HiAtSymbol size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.Semester && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.Semester.message}
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
                {...register('Password')}
              />

              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>

            {errors.Password && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.Password.message}
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
                {...register('Cpassword')}
              />

              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiFingerPrint size={20} className="h-5 w-5 md:h-10 md:w-10" />
              </span>
            </div>
            {errors.Cpassword && (
              <div className="text-red-500 text-sm md:text-xl">
                {errors.Cpassword.message}
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
