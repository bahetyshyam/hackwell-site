import React from 'react';

const About = () => {
  const content =
    'JSS Academy of Technical Education (JSSATE), Bengaluru always believes in ensuring that budding talents receive a platform to bloom. We have always strongly encouraged students to think out of the box and shall continue to do the same. This year, we have decided to take it up a notch and we hereby present HACKWELL 1.0 in association with Honeywell. Hackwell 1.0 is a 24 hour Hackathon and is scheduled on 12th & 13th of April 2019. Honeywell will be driving the event and also sponsoring cash prize worth INR 1,50,000. This event is intended to create a platform for students for self-expression and creativity to foster a culture of learning, team work, growth , innovation & fun through a broad range of technical skills. Participating teams will generate ideas, solve problems & also test their skills for application development. This event aims to collaborate with individuals intensively to innovate and develop an efficient and eco-friendly solution for global problems in the field of Artificial Intelligence and Machine Learning.';

  return (
    <section className='px-4 py-32' id='about'>
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
