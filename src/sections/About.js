import React from 'react';

const About = () => {
  const content =
    'JSS Academy of Technical Education (JSSATE), Bengaluru always believes in focusing the spotlight on potential talent and promising skills. We have constantly encouraged students to seek out the untrodden paths and provided prospects which hone their innovative mindset. This year we are reintroducing our own JSS Hackathon. Hackwell 2.0 in association with Honeywell, is a 24-hour hackathon which is scheduled on 12th and 13th of April 2020. Honeywell will be powering up the event and will be sponsoring the cash prize worth INR 1,50,000 lakhs. This challenge is intended to provide a stage to instigate a ground breaking culture of creativity, synergy, zeal and overall progress over a broad range of technical skills. Participating teams will generate ideas, solve problems and test their skills of application development. This event aims to collaborate with individuals to innovate and develop an efficient and eco-friendly solution for global problems in the field of Artificial Intelligence and Machine Learning.';

  return (
    <section className='px-4 py-32 bg-white' id='about'>
      <div className='container'>
        <div className='md:flex'>
          <div className='md:w-2/3 text-center md:text-left'>
            <div className='uppercase tracking-wider text-sm text-blue-600 font-bold'>
              Know more
            </div>
            <h2 className='text-4xl md:text-5xl leading-tight font-medium text-gray-900'>
              Hackwell is for{' '}
              <span className='font-bold text-blue-600'>developers</span>{' '}
              <br className='hidden lg:block' />
              like <span className='font-bold text-blue-600'>you</span>
            </h2>
            <p className='mt-4 text-lg md:text-xl tracking-wide text-gray-800'>
              {content}
            </p>
          </div>
          <div className='md:w-1/3 mt-8 md:mt-0 md:flex-shrink-0'>
            <img className='w-48 md:w-56 mx-auto' src='' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
