import React from 'react';

import Form from '../components/Form';

const Register = () => {
  return (
    <>
      <main>
        <div className='lg:flex'>
          <div className='lg:w-1/2 lg:h-screen lg:top-0 lg:sticky'>
            <div className='px-8 py-10'>
              <a className='inline-block' href='/'>
                <img src='/images/hackwell-logo.png' alt="Hackwell's logo" />
              </a>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <div className='px-8 py-10'>
              <h2 className='text-4xl md:text-5xl leading-tight font-medium text-gray-900'>
                <span className='font-bold text-blue-600'>Register</span> to
                hack
              </h2>
              <Form />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
