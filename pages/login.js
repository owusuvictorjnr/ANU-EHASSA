import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import LoginsLayout from '../components/LoginsLayout';

const Login = () => {
  return (
    <>
      <LoginsLayout>
        <Head>
          <title>Login</title>
        </Head>
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-10"> ANU</h1>
            <p className="w-3/4 mx-auto text-gray-400 capitalize">
              login to your dashboard{' '}
            </p>
          </div>

          {/*Form*/}

          <form className="flex flex-col gap-5">
            <div className="">
              <input
                type="email"
                name="email"
                placeholder="ID / School Email"
                className=""
              />
            </div>

            <div className="{styles.input - group}">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=""
              />
            </div>

            {/*login buttons*/}
            <div className="">
              <button type="submit">Login</button>
            </div>

            {/*Sign in using school email address*/}
            <div>
              <div className="">
                <button type="submit">sign in with your school email</button>
              </div>
            </div>

            {/*Sign in using school index number*/}
            <div>
              <div className="">
                <button type="submit">sign in with your index number</button>
              </div>
            </div>

            {/*bottom*/}
            <p className="text-center text-gray-400">
              don't have an account yet?{' '}
              <Link href={'/register'} className="text-blue-700">
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
