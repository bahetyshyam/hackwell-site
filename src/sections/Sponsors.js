import React from 'react';

const Sponsors = () => {
  return (
    <section className='px-4 py-32 bg-blue-900' id='sponsors'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='text-4xl md:text-5xl leading-tight font-medium text-gray-100'>
            Sponsors
          </h2>
          <p className='mt-2 text-lg md:text-xl tracking-wide text-gray-400'>
            Interested in being a sponsor? Email us at{' '}
            <a
              className='font-semibold text-gray-200 underline'
              href='mailto:jsshackwell@jssateb.ac.in'
              target='_blank'
              rel='noopener noreferrer'
            >
              jsshackwell@jssateb.ac.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
