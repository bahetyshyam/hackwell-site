import React from 'react';

const Landing = () => {
  return (
    <section
      className='min-h-screen bg-center bg-fixed bg-no-repeat bg-cover flex justify-center items-center'
      // style={{
      //   backgroundImage: `url(${landingBg})`
      // }}
      id='landing'
    >
      <div className='relative'>
        <img
          // src={landingLogo}
          alt='Hackwell 2.0'
          className='max-w-sm sm:max-w-md md:max-w-xl'
        />
        {/* {showGlitch ? (
          <img
            src={landingLogo}
            alt='Hackwell 1.0 Glitch'
            className='absolute inset-0 opacity-50 glitch'
          />
        ) : (
        ''
        )} */}
      </div>
    </section>
  );
};

export default Landing;
